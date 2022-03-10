import { css } from "linaria";
import CheckedSVG from "public/checked.svg";
import { PropsWithChildren } from "react";
import { colors } from "src/theme";
import { HighlightText } from "atoms/HighlightText";
import { Link } from "atoms/Link";
import { shadows } from "src/theme";

function Decorator() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        margin: 0.8rem 0;
        margin-top: 2.4rem;
      `}
    >
      <div
        className={css`
          display: flex;
          span {
            width: 22px;
            height: 6px;
            border-radius: 20px;
            transform: rotate(45deg);
          }
        `}
      >
        <span
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.primaryLight};
            position: relative;
            margin-right: -0.4rem;
          `}
        />
        <span
          className={css`
            background-color: ${colors.secondaryLight};
          `}
        />
      </div>
    </div>
  );
}
function ListItem({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <li
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        border-radius: 8px;
        border: 1px solid ${colors.secondaryLight};
        padding: 2.4rem;
        transition: all 280ms ease;
        box-shadow: ${shadows.small};
        background-color: #fff;
        :hover {
          box-shadow: ${shadows.large};
          svg {
            fill: ${colors.secondaryLight};
          }
        }
      `}
    >
      <div
        className={css`
          min-width: 32px;
          min-height: 32px;
          margin-bottom: 0.8rem;
        `}
      >
        <CheckedSVG
          className={css`
            fill: ${colors.secondary};
            transition: all 280ms ease;
          `}
        />
      </div>
      <h3
        className={css`
          font-size: 1.8rem;
        `}
      >
        <strong>{title}</strong>
      </h3>
      <span
        className={css`
          font-size: 1.48rem;
        `}
      >
        {children}
      </span>
    </li>
  );
}

export default function Page() {
  return (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        <strong>React Spring Carousel</strong> is a new way of approaching the
        carousel experience on the web. It embraces the philosophy of{" "}
        <strong>Headless UI</strong>, which means that it's up to the developer
        to decide how it will look, while the library will only take care of the
        internal logic and the behavior of the carousel.
      </p>
      <p>
        With <strong>React Spring Carousel</strong> you'll feel for the first
        time that you have total control on how the Carousel behaves, and you'll
        find how easy is to interact with it, how simple is to put things on the
        screen, and how dumb is to make the carousel <strong>work</strong>.
      </p>
      <p>
        <strong>React Spring Carousel</strong> also embraces the full power of
        the newest React technology, offering <strong>Hooks</strong> and{" "}
        <strong>Context</strong> to create and manipulate the behavior of the
        carousel in any possible way.
      </p>
      <Decorator />
      <h2 id="motivation">Motivation</h2>
      <p>
        <strong>Why another carousel library?</strong> Many times happened to me
        that while I was investigating which library to implement a carousel I
        could use in my new project, I always had the feeling that there was
        something wrong with something (implementation, logic, animation result,
        etc)
      </p>
      <p>
        Don't get me wrong, there're lots of good libraries out there, but
        still, I didn't feel enough free regarding the implementation of the
        carousel at all. I always had the feeling that I was doing some kind of
        hack to make it work and fit inside my UI. It wasn't something natural,
        and that feeling always bothered me.
      </p>
      <p>
        With <strong>React Spring Carousel</strong> you're free to create and
        compose your own carousel without any kind of bounds, without having to
        override styles or adding weird class names, or some other kind of
        strange hack and animations feel natural and reals. They respond to user
        interaction as you've always expected to do.
      </p>
      <HighlightText
        className={css`
          margin-bottom: 2.4rem;
        `}
      >
        <p>
          <strong>React Spring Carousel</strong> is <strong>intuitive</strong>,{" "}
          <strong>simple</strong> and <strong>efficient</strong>.
        </p>
      </HighlightText>
      <Decorator />
      <h2 id="features">Features</h2>
      <ul
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          grid-gap: 2.4rem;
          &&&& li {
            margin: 0;
          }
          && li:not(:last-of-type) {
            margin-bottom: 0rem;
          }
          &&&& {
            padding-left: 0;
            list-style: none;
          }
        `}
      >
        <ListItem title="Performance">
          Thanks to React Spring, performances are on top!
        </ListItem>
        <ListItem title="Mobile">
          <strong>@use-gesture</strong> offers an excellent mobile experience
          out of the box!
        </ListItem>
        <ListItem title="Resizable">
          The carousel will listen to any resize event and will re-adapt itself
          accordingly.
        </ListItem>
        <ListItem title="Slide types">
          You have different types of scroll solutions to choose from.
        </ListItem>
        <ListItem title="Headless UI">
          You can compose all the pieces of the Carousel in any way you want.
        </ListItem>
        <ListItem title="Fullscreen capable">
          We use <strong>screenfull.js</strong> to offer a cross-browser
          efficient solution.
        </ListItem>
      </ul>

      <div
        className={css`
          display: flex;
          justify-content: center;
          margin-top: 8rem;
        `}
      >
        <Link
          linkProps={{
            href: "/docs/install",
          }}
        >
          Let's start!
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Introduction",
      onThisPageItems: [
        { id: "overview", label: "Overview" },
        { id: "motivation", label: "Motivation" },
        { id: "features", label: "Features" },
      ],
    },
  };
}
