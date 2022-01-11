import { css, cx } from "linaria";
import GithubIcon from "public/github.svg";
import NpmIcon from "public/npm.svg";
import { Link } from "atoms/Link";
import { colors, shadows } from "src/theme";

export function Header() {
  return (
    <header
      className={css`
        display: flex;
        justify-content: center;
        padding: 1.6rem 2.4rem;
        position: sticky;
        top: 0;
        backdrop-filter: blur(2px);
        z-index: 100;
        box-shadow: ${shadows.small};
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex: 1;
          max-width: 1326px;
          z-index: 100;
        `}
      >
        <h1
          className={css`
            font-weight: bold;
            font-size: 2.4rem;
            color: ${colors.secondary};
          `}
        >
          React Spring Carousel
        </h1>
        <div
          className={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link
            variant="secondary"
            size="icon"
            linkProps={{
              href: "https://github.com/Emiliano-Bucci/react-spring-carousel",
            }}
            title="https://github.com/Emiliano-Bucci/react-spring-carousel"
            target="_blank"
            className={cx(
              css`
                margin-right: 1.2rem;
              `
            )}
          >
            <GithubIcon />
          </Link>
          <Link
            variant="secondary"
            size="icon"
            title="https://www.npmjs.com/package/react-spring-carousel"
            target="_blank"
            linkProps={{
              href: "https://www.npmjs.com/package/react-spring-carousel",
            }}
          >
            <NpmIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
