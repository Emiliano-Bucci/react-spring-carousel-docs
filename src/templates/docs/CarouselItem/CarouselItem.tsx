import { animated, useSpring } from "@react-spring/web";
import { css } from "linaria";
import { useEffect, useState } from "react";
import { useSpringCarouselContext } from "react-spring-carousel";
import { colors } from "src/theme";

type Props = {
  title: string;
  content: React.ReactNode;
  id: string;
};

export function CarouselItem({ title, content, id }: Props) {
  const {
    useListenToCustomEvent,
    getIsNextItem,
    getIsPrevItem,
    getIsActiveItem,
  } = useSpringCarouselContext();
  const [isActive, setIsActive] = useState(getIsActiveItem(id));
  const [styles, setStyles] = useSpring(() => ({
    opacity: isActive ? 1 : 0.8,
    scale: isActive ? 1 : 0.9,
  }));

  useListenToCustomEvent((event) => {
    if (event.eventName === "onDrag") {
      if (
        !isActive &&
        ((event.slideActionType === "next" && getIsNextItem(id)) ||
          (event.slideActionType === "prev" && getIsPrevItem(id)))
      ) {
        const xDistance = event.distance[0];
        setStyles({
          opacity: 0.8 + xDistance / 1600,
          scale: 0.9 + xDistance / 3000,
        });
      }
      if (event.last && !isActive) {
        setStyles({
          opacity: 0.8,
          scale: 0.9,
        });
      }
    }
    if (event.eventName === "onSlideStartChange") {
      setIsActive(event.nextItem.id === id);
    }
    if (event.eventName === "onSlideChange") {
      if (isActive) {
        setStyles({
          opacity: 1,
          scale: 1,
        });
      } else {
        setStyles({
          opacity: 0.8,
          scale: 0.9,
        });
      }
    }
  });

  useEffect(() => {
    if (isActive) {
      setStyles({
        opacity: 1,
        scale: 1,
      });
    } else {
      setStyles({
        opacity: 0.8,
        scale: 0.9,
      });
    }
  }, [isActive]);

  return (
    <animated.div
      style={styles}
      data-active={isActive}
      className={css`
        cursor: grab;
        display: grid;
        align-content: start;
        grid-gap: 0.8rem;
        max-width: 720px;
        margin: 0 auto;
        transition: box-shadow 480ms ease;
        box-shadow: 0.9px 0.9px 2px rgba(0, 0, 0, 0.009),
          3.1px 2.9px 6.7px rgba(97, 66, 66, 0.016),
          2px 13px 30px rgba(0, 0, 0, 0.24);
        padding: 3.2rem;
        border-radius: 20px;
        border: 8px solid ${colors.secondaryLight};
        background-color: #fff;
        user-select: none;
        opacity: 0.8;
        transform: scale(0.9);
        :active {
          cursor: grabbing;
        }
        p {
          line-height: 1.48;
          color: ${colors.primaryLight};
        }
      `}
    >
      <h2
        className={css`
          font-weight: bold;
          font-size: 4rem;
          line-height: 1.2;
          color: ${colors.secondary};
        `}
      >
        {title}
      </h2>
      {content}
    </animated.div>
  );
}
