import { css, cx } from "linaria";
import { colors } from "src/theme";
import GithubIcon from "public/github.svg";
import NpmIcon from "public/npm.svg";
import { Link } from "atoms/Link";

export function Header() {
  return (
    <header
      className={css`
        display: flex;
        justify-content: center;
        padding: 2.4rem;
        position: sticky;
        top: 0;
        background-image: linear-gradient(
          to right,
          ${colors.primaryLight},
          ${colors.secondaryLight}
        );
        box-shadow: 0px 0.9px 2px rgba(0, 0, 0, 0.009),
          0px 2.9px 6.7px rgba(97, 66, 66, 0.016),
          0px 6px 12px rgba(0, 0, 0, 0.12);
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
        `}
      >
        <h1
          className={css`
            font-weight: bold;
            font-size: 2.4rem;
            color: #fff;
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
                svg {
                  width: 20px;
                  height: 20px;
                }
              `
            )}
          >
            <GithubIcon />
          </Link>
          <Link
            variant="secondary"
            size="icon"
            linkProps={{
              href: "https://www.npmjs.com/package/react-spring-carousel",
            }}
            title="https://www.npmjs.com/package/react-spring-carousel"
            target="_blank"
            className={cx(
              css`
                svg {
                  width: 20px;
                  height: 20px;
                }
              `
            )}
          >
            <NpmIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
