import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";
import { colors } from "src/theme";
import PerformantIcon from "public/performant.svg";
import { useState } from "react";
import { Link } from "atoms/Link/Link";
import { CarouselItem } from "templates/home/CarouselItem/CarouselItem";

const text = `<Carousel />`;

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
          border-bottom: 8px solid ${colors.secondaryLight};
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
            .use-spring-carousel-item {
              cursor: grab;
              :active {
                cursor: grabbing;
              }
            }
            & > * {
              padding: 8rem 0;
              margin-top: -8rem;
              margin-bottom: 8rem;
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
