import { css } from "linaria";
import { colors } from "src/theme";
import { Link } from "atoms/Link/Link";
import { Img } from "atoms/Img";
export function Footer() {
  return (
    <footer
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 16rem;
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
      <span
        className={css`
          display: inline-block;
          margin-top: 2.4rem;
          font-size: 1.4rem;
          a {
            font-size: inherit;
            :hover,
            :focus {
              text-decoration: underline;
            }
          }
        `}
      >
        Made by{" "}
        <Link
          variant="none"
          title="https://cv.emilianobucci.com/"
          linkProps={{
            href: "https://cv.emilianobucci.com/",
          }}
        >
          Emiliano Bucci
        </Link>
      </span>
    </footer>
  );
}
