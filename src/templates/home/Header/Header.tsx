import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";
import GithubIcon from "public/github.svg";
import NpmIcon from "public/npm.svg";
import { Link } from "atoms/Link";
import { a, useSpring, useSprings } from "react-spring";

const text = `<Carousel />`;

const linkStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;

const springConfig = {
  frequency: 0.4,
};

export function Header() {
  const backgroundStyles = useSpring({
    delay: 120,
    from: {
      opacity: 0,
      y: -100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: {
      frequency: 0.36,
    },
  });
  const [styles] = useSprings(3, () => ({
    config: springConfig,
    delay: 220,
    from: {
      opacity: 0,
      y: 16,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  }));

  return (
    <header
      className={css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16.4rem 2.4rem;
        color: #fafafa;
        z-index: 10;
        ${mediaQueries.until.mobile} {
          padding-top: 6.4rem;
          padding-bottom: 14rem;
        }
      `}
    >
      <a.div
        style={{
          ...backgroundStyles,
          transform: backgroundStyles.y.to((v) => `translateY(${v}%)`),
        }}
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-bottom: 8px solid ${colors.secondaryLight};
          box-shadow: ${shadows.large};
          background-image: linear-gradient(
            to right,
            ${colors.primaryLight},
            ${colors.secondaryLight}
          );
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
      />
      <a.h1
        style={styles[0]}
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
      </a.h1>
      <a.span
        style={styles[1]}
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
      </a.span>
      <a.div
        style={styles[2]}
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          margin-top: 2.4rem;
        `}
      >
        <Link
          variant="secondary"
          href="https://github.com/Emiliano-Bucci/react-spring-carousel"
          title="https://github.com/Emiliano-Bucci/react-spring-carousel"
          target="_blank"
          size="default"
          className={cx(
            linkStyles,
            css`
              svg {
                width: 24px;
                height: 24px;
              }
            `
          )}
        >
          <GithubIcon />
        </Link>
        <Link
          variant="secondary"
          size="default"
          href="https://www.npmjs.com/package/react-spring-carousel"
          title="https://www.npmjs.com/package/react-spring-carousel"
          target="_blank"
          className={cx(
            linkStyles,
            css`
              svg {
                width: 26px;
                height: 26px;
              }
            `
          )}
        >
          <NpmIcon />
        </Link>
      </a.div>
    </header>
  );
}
