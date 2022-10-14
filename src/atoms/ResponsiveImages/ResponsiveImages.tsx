import {
  AllHTMLAttributes,
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Head from "next/head";
import { useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { css, cx } from "linaria";

export function LazyModule({
  imageRef,
  onImageInView,
}: {
  imageRef: MutableRefObject<HTMLImageElement | null>;
  onImageInView(): void;
}) {
  const { inView, ref } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (imageRef.current) ref(imageRef.current);
  }, [imageRef, ref]);
  useEffect(() => {
    if (inView) {
      onImageInView();
    }
  }, [inView, onImageInView]);

  return null;
}

export type ResponsiveImageSources = {
  src: string;
  media: string;
};

export type Props = {
  sources: ResponsiveImageSources[];
  title: string;
  alt: string;
  fallbackUrl?: string;
  isCritical?: boolean;
  withFadeIn?: boolean;
  lazy?: boolean;
  placeholderBackground?: string;
  onImageLoaded?(): void;
} & AllHTMLAttributes<HTMLPictureElement>;

export const ResponsiveImages: React.FC<Props> = ({
  sources,
  title,
  alt,
  fallbackUrl,
  isCritical = false,
  withFadeIn = false,
  lazy = false,
  placeholderBackground = "#fff",
  onImageLoaded,
  className,
  ...rest
}) => {
  const [renderSources, setRenderSources] = useState(!lazy);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const imageLoaded = useRef(false);
  const [, setStyles] = useSpring(() => ({
    opacity: 1,
    onChange: ({ value }) => {
      if (placeholderRef.current) {
        placeholderRef.current.style.opacity = `${value.opacity}`;
      }
    },
    config: {
      tension: 150,
      velocity: 0.1,
    },
  }));

  const handleOnImageLoad = useCallback(() => {
    function handleComplete() {
      imageRef.current!.decode().then(() => {
        imageRef.current!.style.visibility = "visible";
        imageLoaded.current = true;
        setStyles({ opacity: 0 });
        onImageLoaded && onImageLoaded();
      });
    }
    try {
      imageRef.current?.decode().then(handleComplete).catch(handleComplete);
    } catch (error) {
      handleComplete();
    }
  }, [onImageLoaded, setStyles]);

  useLayoutEffect(() => {
    if (imageRef.current?.currentSrc && !imageLoaded.current) {
      handleOnImageLoad();
    }
  }, [handleOnImageLoad]);

  function handleOnLoad() {
    if (imageRef.current?.currentSrc && !imageLoaded.current) {
      handleOnImageLoad();
    }
  }

  return (
    <picture
      className={cx(
        className,
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
        `
      )}
      {...rest}
    >
      {lazy && (
        <LazyModule
          imageRef={imageRef}
          onImageInView={() => setRenderSources(true)}
        />
      )}
      {isCritical && (
        <Head>
          {sources.map((source) => (
            <link
              rel="preload"
              as="image"
              key={source.src}
              href={source.src}
              media={source.media}
            />
          ))}
        </Head>
      )}
      {renderSources &&
        sources.map((source, i) => (
          <source
            key={`${source.src}-${i}`}
            srcSet={source.src}
            media={source.media}
          />
        ))}
      <img
        title={title}
        alt={alt}
        draggable={false}
        decoding="async"
        onLoad={handleOnLoad}
        ref={imageRef}
        className={css`
          visibility: hidden;
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
      />
      {withFadeIn && (
        <div
          ref={placeholderRef}
          style={{
            background: placeholderBackground,
          }}
          className={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            opacity: 1;
            pointer-events: none;
          `}
        />
      )}
      {fallbackUrl && (
        <noscript>
          <img src={fallbackUrl} title={title} alt={alt} />
        </noscript>
      )}
    </picture>
  );
};
