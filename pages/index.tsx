import { css, cx } from "linaria";
import {
  useSpringCarousel,
  useSpringCarouselContext,
} from "react-spring-carousel";
import { colors } from "src/theme";
import PerformantIcon from "public/performant.svg";
import { FC, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "../src/atoms/Link/Link";

const text = `<Carousel />`;

function CarouselItem({
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

const items = [
  {
    id: "performance",
    title: "Extreemely performant",
    Icon: PerformantIcon,
    content: (
      <>
        <strong>react-spring</strong> offers very performant results with smooth
        and natural animations!🔥
      </>
    ),
  },
  {
    id: "mobile-first",
    title: "Mobile first",
    Icon: PerformantIcon,
    content: (
      <>
        We use <strong>@use-gesture</strong> to offer the best mobile experience
        with zero config!
      </>
    ),
  },
  {
    id: "custom-events",
    title: "Custom events",
    Icon: PerformantIcon,
    content: (
      <>
        Thanks to <strong>RxJS</strong> you'll be able to respond to every
        carousel action in a very simple and elegant way!
      </>
    ),
  },
  {
    id: "headless-ui",
    title: "Headless UI",
    Icon: PerformantIcon,
    content: (
      <>
        No more headaches trying to style the elements of the carousel. You
        control every aspect of the elements of the carousel.
      </>
    ),
  },
  {
    id: "composable",
    title: "Totally composable",
    Icon: PerformantIcon,
    content: (
      <>
        We give you the instruments (API) and you decide where to place all the
        elements of the carousel and how they will behave and interact.
      </>
    ),
  },
  {
    id: "easy-to-configure",
    title: "Easy to configure",
    Icon: PerformantIcon,
    content: (
      <>
        The carousel comes with lots of options, and the configuration is a
        piece of cake!
      </>
    ),
  },
];

export default function Home() {
  const [activeItem, setActiveItem] = useState(items[0].id);
  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    itemsPerSlide: 5,
    withLoop: true,
    initialStartingPosition: "center",
    items: items.map((i, indx) => ({
      id: i.id,
      renderItem: (
        <CarouselItem
          id={i.id}
          key={`${i.id}-${indx}`}
          title={i.title}
          Icon={i.Icon}
          content={i.content}
          activeItem={activeItem}
        />
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id);
    }
  });

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16.4rem 2.4rem;
          color: #fafafa;
          background-image: linear-gradient(
            to right,
            ${colors.primaryLight},
            ${colors.secondaryLight}
          );
        `}
      >
        <h1
          className={css`
            font-size: 5.6rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
            text-shadow: 0 2px 20px ${colors.primaryLight};
          `}
        >
          React Spring Carousel
        </h1>
        <span
          className={css`
            font-size: 24px;
            color: #fff;
          `}
        >
          A new {text} experience
        </span>
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          className={css`
            width: 100%;
            max-width: 100%;
            margin-top: -8rem;
            cursor: grab;
            & > * {
              padding: 8rem 0;
              margin-top: -8rem;
              margin-bottom: 8rem;
            }
            :active {
              cursor: grabbing;
            }
          `}
        >
          {carouselFragment}
        </div>
      </div>
      <div
        className={css`
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <Link
          linkProps={{
            href: "/",
          }}
          className={css`
            font-size: 1.8rem;
          `}
        >
          Documentation
        </Link>
      </div>
    </div>
  );
}
