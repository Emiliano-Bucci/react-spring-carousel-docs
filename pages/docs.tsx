import { css } from "linaria";
import CheckedSVG from "public/checked.svg";
import { PropsWithChildren } from "react";
import { colors } from "src/theme";
import { HighlightText } from "atoms/HighlightText";

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
            width: 20px;
            height: 4px;
            border-radius: 20px;
            transform: rotate(45deg);
          }
        `}
      >
        <span
          className={css`
            background-color: ${colors.primaryLight};
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
        border-radius: 12px;
        border: 1px solid ${colors.secondaryLight};
        padding: 1.6rem;
        transition: all 280ms ease;
        box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
          0px 6px 15px rgba(0, 0, 0, 0.06);
        :hover {
          box-shadow: 0.9px 0.9px 2px rgba(0, 0, 0, 0.009),
            3.1px 2.9px 6.7px rgba(97, 66, 66, 0.016),
            2px 13px 30px rgba(0, 0, 0, 0.12);
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

export default function Docs() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        flex: 1;
      `}
    >
      <div
        className={css`
          display: flex;
          width: 100%;
          flex: 1;
          max-width: 1326px;
          padding: 4rem 0rem;
          h2 {
            font-size: 3.4rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: ${colors.secondary};
            border-bottom: 2px solid ${colors.secondaryLight};
            &:not(:first-of-type) {
              margin-top: 2.4rem;
            }
          }
          p {
            &:not(:last-child) {
              margin-bottom: 2.4rem;
            }
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h2>Overview</h2>
          <p>
            <strong>React Spring Carousel</strong> is a new way of intend the
            carousel experience in the web. It embraces the philosophy of{" "}
            <strong>Headless UI</strong>, which means that it's up to the
            developer to decide how it will look, while the library will only
            take care about the internal logic and the behavior of the carousel.
          </p>
          <p>
            With <strong>React Spring Carousel</strong> you'll feel for the
            first time that you have total control on how the Carousel behaves,
            and you'll find how's easy to interact with it, how simple is to put
            things in the screen, and how dumb is to make the carousel{" "}
            <strong>work</strong>.
          </p>
          <p>
            <strong>React Spring Carousel</strong> also embraces the full power
            of the newest React technology, offering <strong>Hooks</strong> and{" "}
            <strong>Context</strong> to create and manipulate the behavior of
            the carousel in any possible way.
          </p>
          <Decorator />
          <h2>Motivation</h2>
          <p>
            <strong>Why another carousel library?</strong> Many times happened
            to me that while i was investigating which library to implement a
            carousel i could use in my new project, i always had the feeling
            that there was something wrong with something (implementation,
            logic, animation result, ecc)
          </p>
          <p>
            Don't get me wrong, there're lots of good libraries out there, but
            still i didn't feel enough free regarding the implementation of the
            carousel at all. I always had the feeling that i was doing some kind
            of hack to make it work and fit inside my UI. It wasn't something
            natural, and that feeling always bothered me.
          </p>
          <p>
            With <strong>React Spring Carousel</strong> you're free to create
            and compose your own carousel without any kind of bounds, without
            having to override styles or adding weird class names, or some other
            kind of strange hack, and animations feel naturals and reals. They
            respond to user interaction like you've always expected to do.
          </p>
          <HighlightText
            className={css`
              margin-bottom: 2.4rem;
            `}
          >
            <p>
              <strong>React Spring Carousel</strong> is{" "}
              <strong>intuitive</strong>, <strong>simple</strong> and{" "}
              <strong>efficient</strong>.
            </p>
          </HighlightText>
          <Decorator />
          <h2>Features</h2>
          <ul
            className={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              grid-gap: 2rem;
            `}
          >
            <ListItem title="Performance">
              Thanks to React Spring, performances are on top!
            </ListItem>
            <ListItem title="Mobile">
              <strong>@use-gesture</strong> offers an excelent mobile experience
              out of the box!
            </ListItem>
            <ListItem title="Resizable">
              The carousel will listen to any resize event and will re-adapt
              itself accordingly.
            </ListItem>
            <ListItem title="Slide types">
              You have different types of scroll solutions to choose with.
            </ListItem>
            <ListItem title="Headless UI">
              You can compose all the pieces of the Carousel in any way you
              want.
            </ListItem>
            <ListItem title="Fullscreen capable">
              We use <strong>screenfull.js</strong> to offer a cross browser
              efficient solution.
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
