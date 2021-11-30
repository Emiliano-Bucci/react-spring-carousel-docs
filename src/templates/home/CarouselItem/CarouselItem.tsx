import { css, cx } from "linaria";
import { useSpringCarouselContext } from "react-spring-carousel";
import { FC } from "react";
import { animated, useSpring } from "react-spring";

export function CarouselItem({
  title,
  content,
  Icon,
  activeItem,
  id,
}: {
  title: string;
  content: React.ReactNode;
  Icon: FC;
  activeItem: string;
  id: string;
}) {
  const { getIsNextItem, getIsPrevItem } = useSpringCarouselContext();
  const isActive = activeItem === id;
  const styles = useSpring({
    scale: isActive
      ? 1.08
      : getIsNextItem(id) || getIsPrevItem(id)
      ? 0.9
      : 0.78,
  });
  return (
    <div
      data-active={isActive}
      className={css`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        user-select: none;
        &[data-active="true"] {
          z-index: 10;
          & > * {
            box-shadow: 0.9px 0.9px 2px rgba(0, 0, 0, 0.009),
              3.1px 2.9px 6.7px rgba(97, 66, 66, 0.016),
              4px 12px 30px 4px rgba(0, 0, 0, 0.12);
          }
          .icon-wrapper {
            filter: grayscale(0);
          }
        }
      `}
    >
      <animated.article
        style={styles}
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          max-width: 280px;
          width: 100%;
          border-radius: 8px;
          padding: 2.4rem;
          transition: box-shadow 480ms ease;
          box-shadow: 0.9px 0.9px 2px rgba(0, 0, 0, 0.009),
            3.1px 2.9px 6.7px rgba(97, 66, 66, 0.016),
            14px 13px 30px rgba(0, 0, 0, 0.08);
        `}
      >
        <div
          className={cx(
            css`
              width: 80px;
              height: 80px;
              max-width: 80px;
              margin-bottom: 0.8rem;
              filter: grayscale(100);
              transition: all 480ms ease;
            `,
            "icon-wrapper"
          )}
        >
          {<Icon />}
        </div>
        <h3
          className={css`
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
            text-align: center;
          `}
        >
          {title}
        </h3>
        <span
          className={css`
            text-align: center;
          `}
        >
          {content}
        </span>
      </animated.article>
    </div>
  );
}
