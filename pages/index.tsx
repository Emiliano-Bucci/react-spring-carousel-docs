import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";
import { colors } from "../src/theme";

const text = `<Carousel />`;

export default function Home() {
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
          padding: 164px 24px;
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
            font-size: 56px;
            font-weight: bold;
            margin-bottom: 16px;
            text-shadow: 0 2px 20px ${colors.primaryLight};
          `}
        >
          React Spring Carousel
        </h1>
        <span
          className={css`
            font-size: 24px;
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
            max-width: 800px;
            width: 100%;
            margin-top: -80px;
          `}
        ></div>
      </div>
    </div>
  );
}
