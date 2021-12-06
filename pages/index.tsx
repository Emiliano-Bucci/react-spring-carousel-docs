import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";
import { colors } from "src/theme";
import { useEffect, useState } from "react";
import { Link } from "atoms/Link/Link";
import { CarouselItem } from "templates/home/CarouselItem/CarouselItem";
import PerformanceIcon from "public/performance.svg";
import ConfigureIcon from "public/configure.svg";
import MobileIcon from "public/mobile.svg";
import EventsIcon from "public/events.svg";
import HeadlessIcon from "public/headless.svg";
import ComposableIcon from "public/composable.svg";
import { mediaQueries, breakpoints } from "src/mediaQueries";

const text = `<Carousel />`;

const items = [
  {
    id: "performance",
    title: "Extreemely performant",
    Icon: PerformanceIcon,
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
    Icon: MobileIcon,
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
    Icon: EventsIcon,
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
    Icon: HeadlessIcon,
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
    Icon: ComposableIcon,
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
    Icon: ConfigureIcon,
    content: (
      <>
        The carousel comes with lots of options, and the configuration is a
        piece of cake!
      </>
    ),
  },
];

export default function Home() {
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
  const [activeItem, setActiveItem] = useState(items[0].id);
  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    itemsPerSlide: itemsPerSlide,
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

  useEffect(() => {
    const desktopDevice = window.matchMedia(
      `(min-width: ${breakpoints.desktop + 1}px)`
    );
    const tabletDevice = window.matchMedia(
      `(min-width: ${breakpoints.tabletSM + 1}px) and (max-width: ${
        breakpoints.desktop
      }px)`
    );
    const tabletSmDevice = window.matchMedia(
      `(max-width: ${breakpoints.tabletSM}px)`
    );

    if (desktopDevice.matches) {
      setItemsPerSlide(5);
    } else if (tabletSmDevice.matches) {
      setItemsPerSlide(1);
    } else if (tabletDevice.matches) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(5);
    }

    tabletSmDevice.addListener((e) => {
      if (e.matches) {
        setItemsPerSlide(1);
      }
    });
    tabletDevice.addListener((e) => {
      if (e.matches) {
        setItemsPerSlide(3);
      }
    });
    desktopDevice.addListener((e) => {
      if (e.matches) {
        setItemsPerSlide(5);
      }
    });
  }, []);

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
          border-bottom: 8px solid ${colors.secondaryLight};
          background-image: linear-gradient(
            to right,
            ${colors.primaryLight},
            ${colors.secondaryLight}
          );
          ${mediaQueries.until.mobile} {
            padding-top: 6.4rem;
            padding-bottom: 14rem;
          }
        `}
      >
        <h1
          className={css`
            font-size: 5.6rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
            text-shadow: 0 2px 20px ${colors.primaryLight};
            text-align: center;
            ${mediaQueries.until.mobile} {
              font-size: 4.8rem;
            }
          `}
        >
          React Spring Carousel
        </h1>
        <span
          className={css`
            font-size: 2.4rem;
            color: #fff;
            ${mediaQueries.until.mobile} {
              font-size: 2rem;
            }
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
            margin-top: -16rem;
            margin-bottom: 8rem;
            .use-spring-carousel-main-wrapper {
              overflow: hidden;
            }
            .use-spring-carousel-track-wrapper {
              padding: 8rem 0;
              ${mediaQueries.until.desktop} {
                padding: 8rem 6.4rem;
              }
            }
            .use-spring-carousel-item {
              cursor: grab;
              :active {
                cursor: grabbing;
              }
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
          ${mediaQueries.until.mobile} {
            margin-top: -8.8rem;
          }
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
