import { css, cx } from "linaria";
import { useSpringCarouselContext } from "react-spring-carousel";
import { FC, useState } from "react";
import { animated, useSpring } from "react-spring";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";

type Props = {
  title: string;
  content: React.ReactNode;
  Icon: FC;
  initialActiveItem: string;
  id: string;
};

export function CarouselItem({
  title,
  content,
  Icon,
  initialActiveItem,
  id,
}: Props) {
  const [isActive, setIsActive] = useState(initialActiveItem === id);
  const { getIsNextItem, getIsPrevItem, useListenToCustomEvent } =
    useSpringCarouselContext();

  const [styles, setStyles] = useSpring(() => ({
    x: getIsNextItem(id) ? 22 : getIsPrevItem(id) ? -22 : 0,
    scale: isActive
      ? 1.08
      : getIsNextItem(id) || getIsPrevItem(id)
      ? 0.9
      : 0.72,
  }));

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      const nextIsActive = event.nextItem.id === id;
      setIsActive(nextIsActive);
      setStyles.start({
        x: getIsNextItem(id) ? 22 : getIsPrevItem(id) ? -22 : 0,
        scale: nextIsActive
          ? 1.08
          : getIsNextItem(id) || getIsPrevItem(id)
          ? 0.9
          : 0.72,
      });
    }
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
            box-shadow: ${shadows.large};
          }
          .icon-wrapper svg {
            fill: ${colors.secondaryLight};
            opacity: 1;
            filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.16));
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
          max-width: 300px;
          width: 100%;
          border-radius: 8px;
          padding: 2.4rem;
          transition: box-shadow 480ms ease;
          box-shadow: ${shadows.small};
          ${mediaQueries.until.desktop} {
            max-width: 340px;
          }
          ${mediaQueries.until.tabletM} {
            max-width: 280px;
          }
          ${mediaQueries.until.tabletSM} {
            max-width: 400px;
          }
          ${mediaQueries.until.mobile} {
            padding: 2rem;
          }
        `}
      >
        <div
          className={cx(
            "icon-wrapper",
            css`
              width: 72px;
              height: 72px;
              max-width: 72px;
              margin-bottom: 1.2rem;
              svg {
                transition: all 480ms ease;
                fill: ${colors.primary};
                opacity: 0.48;
              }
            `
          )}
        >
          <Icon />
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
