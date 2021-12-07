import { css } from "linaria";
import { colors } from "src/theme";
import { Link } from "atoms/Link/Link";
import { Img } from "atoms/Img";

const badges = [
  {
    src: "https://img.shields.io/bundlephobia/minzip/react-spring-carousel-js",
    title: "Shield bundlefobia minzip",
    alt: "Shield bundlefobia minzip",
  },
  {
    src: "https://img.shields.io/bundlephobia/minzip/react-spring-carousel-js",
    title: "Shield npm version",
    alt: "Shield npm version",
  },
  {
    src: "https://img.shields.io/npm/dm/react-spring-carousel-js",
    title: "Shields month downloads",
    alt: "Shields month downloads",
  },
  {
    src: "https://img.shields.io/npm/l/react-spring-carousel-js",
    title: "Shields license",
    alt: "Shields license",
  },
];

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
        border-top: 4px solid ${colors.secondary};
      `}
    >
      <div
        className={css`
          display: flex;
          & > *:not(:last-of-type) {
            margin-right: 1.2rem;
          }
        `}
      >
        {badges.map((i) => (
          <Img key={i.src} {...i} />
        ))}
      </div>
      <span
        className={css`
          display: inline-block;
          margin-top: 2.4rem;
          font-size: 1.4rem;
          a {
            display: inline-block;
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
          size="none"
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
