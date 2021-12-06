import { ImgHTMLAttributes, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import { LazyModule } from "atoms/ResponsiveImages";
import { useSpring } from "react-spring";
import { css, cx } from "linaria";

type Props = {
  fallbackUrl?: string;
  isCritical?: boolean;
  withFadeIn?: boolean;
  placeholderBackground?: string;
  lazy?: boolean;
  onImageLoaded?(): void;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Img: React.FC<Props> = ({
  src = "",
  fallbackUrl,
  title,
  alt,
  isCritical = false,
  withFadeIn = false,
  placeholderBackground = "#fff",
  lazy = false,
  onImageLoaded,
  className,
  ...rest
}) => {
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const imageLoaded = useRef(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
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
        imageLoaded.current = true;
        imageRef.current!.style.visibility = "visible";
        onImageLoaded && onImageLoaded();
        setStyles({
          opacity: 0,
        });
      });
    }

    try {
      imageRef.current?.decode().then(handleComplete).catch(handleComplete);
    } catch (error) {
      handleComplete();
    }
  }, [setStyles, onImageLoaded]);

  useEffect(() => {
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
    <div
      className={cx(
        "image-wrapper",
        css`
          display: flex;
          position: relative;
        `
      )}
    >
      {isCritical && (
        <Head>
          <link rel="preload" as="image" key={src} href={src} />
        </Head>
      )}
      {lazy && (
        <LazyModule
          imageRef={imageRef}
          onImageInView={() => (imageRef.current!.src = src)}
        />
      )}
      <img
        src={lazy ? "" : src}
        onLoad={handleOnLoad}
        ref={imageRef}
        title={title}
        alt={alt}
        decoding="async"
        className={cx(
          css`
            width: 100%;
            height: 100%;
            object-fit: cover;
            visibility: hidden;
          `,
          className
        )}
        {...rest}
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
    </div>
  );
};
