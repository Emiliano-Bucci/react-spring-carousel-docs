import { Header } from "templates/docs/Header";
import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";
import { CarouselItem } from "templates/docs/CarouselItem";

const items = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          <strong>React Spring Carousel</strong> is a new way of intend the
          carousel experience in the web. It embraces the philosophy of{" "}
          <strong>Headless UI</strong>, which means that it's up to the
          developer to decide how it will look, while the library will only take
          care about the internal logic and the behavior of the carousel.
        </p>
        <p>
          With <strong>React Spring Carousel</strong> you'll feel for the first
          time that you have total control on how the Carousel behaves, and
          you'll find how's easy to interact with it, how simple is to put
          things in the screen, and how dumb is to make the carousel{" "}
          <strong>work</strong>.
        </p>
        <p>
          <strong>React Spring Carousel</strong> also embraces the full power of
          the newest React technology, offering <strong>Hooks</strong> and{" "}
          <strong>Context</strong> to create and manipulate the behavior of the
          carousel in any possible way.
        </p>
      </>
    ),
  },
  {
    id: "motivation",
    title: "Motivation",
    content: (
      <>
        <p>
          <strong>Why another carousel library?</strong> Many times happened to
          me that while i was investigating which library to implement a
          carousel i could use in my new project, i always had the feeling that
          there was something wrong with something (implementation, logic,
          animation result, ecc)
        </p>
        <p>
          Don't get me wrong, there're lots of good libraries out there, but
          still i didn't feel enough free regarding the implementation of the
          carousel at all. I always had the feeling that i was doing some kind
          of hack to make it work and fit inside my UI. It wasn't something
          natural, and that feeling always bothered me.
        </p>
        <p>
          With <strong>React Spring Carousel</strong> you're free to create and
          compose your own carousel without any kind of bounds, without having
          to override styles or adding weird class names, or some other kind of
          strange hack, and animations feel naturals and reals. They respond to
          user interaction like you've always expected to do.
        </p>
        <p>
          <strong>React Spring Carousel</strong> is <strong>declarative</strong>
          , <strong>simple</strong> and <strong>efficient</strong>.
        </p>
      </>
    ),
  },
  {
    id: "features",
    title: "Features",
    content: (
      <>
        <p>
          Many times happened to me that while i was investigating which library
          to implement a carousel i could use in my new project, i always had
          the feeling that it was a difficult thing to do - at least, more than
          i always thought it should've been.
        </p>
        <p>
          Don't get me wrong, there're lots of good libraries out there, but
          still i didn't feel free regarding the implementation of the carousel
          at all. I always had the feeling that i was doing some kind of hack to
          make it work and fit inside my UI.
        </p>
      </>
    ),
  },
];

export default function Docs() {
  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    gutter: 24,
    startEndGutter: 24,
    initialStartingPosition: "center",
    items: items.map((i) => ({
      id: i.id,
      renderItem: (
        <CarouselItem
          key={i.id}
          title={i.title}
          content={i.content}
          id={i.id}
        />
      ),
    })),
  });

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        position: relative;
        flex: 1;
        ::before {
          content: "";
          display: block;
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-color: #6a5a79;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%23BA6980' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='13' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(277.2 0 0)' %3E%3Ccircle fill='%23BA6980' r='10'/%3E%3Cg transform='rotate(-156 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(-19.8 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(70.2 0 0)'%3E%3Cg transform='rotate(173.25 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(89.1 0 0)'%3E%3Cg transform='rotate(103.95 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-207.9 0 0)'%3E%3Cg transform='rotate(-70.2 0 0)'%3E%3Cg transform='rotate(-118.8 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          opacity: 0.9;
        }
      `}
    >
      <Header />
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 100%;
          flex: 1;
        `}
      >
        {carouselFragment}
      </div>
    </div>
  );
}
