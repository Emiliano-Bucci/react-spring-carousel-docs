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
import { Img } from "atoms/Img";

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
      <header
        className={css`
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16.4rem 2.4rem;
          color: #fafafa;
          z-index: 10;
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

          ::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: #ba6980;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='200' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23ED707D' href='%23a' transform='rotate(-60 0 0) scale(0.4)'/%3E%3Cuse stroke='%23e96f7d' href='%23a' transform='rotate(-50 0 0) scale(0.5)'/%3E%3Cuse stroke='%23e46e7d' href='%23a' transform='rotate(-40 0 0) scale(0.6)'/%3E%3Cuse stroke='%23e06d7c' href='%23a' transform='rotate(-30 0 0) scale(0.7)'/%3E%3Cuse stroke='%23db6c7c' href='%23a' transform='rotate(-20 0 0) scale(0.8)'/%3E%3Cuse stroke='%23d66b7c' href='%23a' transform='rotate(-10 0 0) scale(0.9)'/%3E%3Cuse stroke='%23d26a7c' href='%23a' transform=''/%3E%3Cuse stroke='%23cd697c' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23c8697c' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23c2687b' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23bd677b' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23b8667b' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23b2657b' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23ac647b' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23a6637a' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23a0627a' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%2399607a' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%23925f7a' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%238b5e7a' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23845d7a' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%237c5c79' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%23735b79' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%236A5A79' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            background-size: cover;
            opacity: 1;
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
            z-index: 5;
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
            z-index: 5;
            ${mediaQueries.until.mobile} {
              font-size: 2rem;
            }
          `}
        >
          A new {text} experience
        </span>
      </header>
      <main
        className={css`
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 150;
        `}
      >
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
      </main>

      <footer
        className={css`
          display: flex;
          justify-content: center;
          margin-top: 8rem;
          padding: 4rem;
          background-color: #fff;
          border-top: 8px solid ${colors.secondary};
        `}
      >
        <div
          className={css`
            display: flex;
          `}
        >
          <Img
            lazy
            withFadeIn
            src="https://img.shields.io/npm/v/react-spring-carousel-js?style=for-the-badge"
            className={css`
              max-width: 180px;
              margin-right: 2.4rem;
            `}
          />
          <Img
            lazy
            withFadeIn
            src="https://img.shields.io/bundlephobia/min/react-spring-carousel-js?style=for-the-badge"
            className={css`
              max-width: 180px;
            `}
          />
        </div>
      </footer>
    </div>
  );
}
