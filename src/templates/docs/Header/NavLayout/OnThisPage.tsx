import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";
import { OnThisPageItem } from "pages/_app";
import { sidebarWrapperStyles } from "./Sidebar";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { a, useSpring } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import GithubIcon from "public/github.svg";
import NpmIcon from "public/npm.svg";
import { Link } from "atoms/Link";

type Props = {
  items: OnThisPageItem[];
};

const slideCount = 48;

export function OnThisPage({ items }: Props) {
  const { asPath } = useRouter();
  const [activeItem, setActiveItem] = useState(() => {
    const hash = asPath.split("#")[1];
    const activeItemIndex = items.findIndex((i) => i.id === hash);
    return activeItemIndex >= 0 ? activeItemIndex : 0;
  });

  const styles = useSpring({
    y: activeItem * slideCount,
    config: {
      tension: 350,
    },
  });

  useLayoutEffect(() => {
    const hash = asPath.split("#")[1];
    const activeItemIndex = items.findIndex((i) => i.id === hash);
    setActiveItem(activeItemIndex >= 0 ? activeItemIndex : 0);
  }, [asPath, items]);

  return (
    <aside
      className={cx(
        sidebarWrapperStyles,
        css`
          display: flex;
          flex: 1;
          height: 100vh;
          position: sticky;
          box-shadow: ${shadows.large};
          top: 0;
          ${mediaQueries.until.tablet} {
            display: none;
          }
        `
      )}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          flex: 1;
          background-color: ${colors.primaryLight};
        `}
      >
        {items.length > 0 && (
          <span
            className={css`
              color: #fafafa;
              font-size: 2.4rem;
              padding: 3.2rem;
              box-shadow: ${shadows.large};
              background: ${colors.secondary};
              ${mediaQueries.until.desktop} {
                padding: 2.8rem 2.4rem;
                font-size: 2.2rem;
              }
              ${mediaQueries.until.tablet} {
                padding-left: 2.8rem;
              }
            `}
          >
            On this page
          </span>
        )}
        <div
          className={css`
            display: grid;
            padding: 3.2rem;
            position: relative;
            & > * {
              :not(:last-child) {
                margin-left: 1.2rem;
              }
            }
          `}
        >
          {items.map((i) => (
            <SidebarNavItem key={i.id} href={`#${i.id}`} label={i.label} />
          ))}
          <div
            className={css`
              position: absolute;
              width: 2px;
              background-color: #fff;
              bottom: 32px;
              top: 32px;
              left: 32px;
            `}
          >
            {items.length > 0 && (
              <a.div
                style={styles}
                className={css`
                  width: 8px;
                  height: 48px;
                  border-radius: 4px;
                  background-color: ${colors.secondaryLight};
                  margin-left: -3px;
                `}
              />
            )}
          </div>
        </div>
        <div
          className={css`
            display: flex;
            margin-top: auto;
            padding: 3rem 2.4rem;
            background-color: ${colors.dark60};
            justify-content: center;
            height: 120px;
            align-items: center;
          `}
        >
          <Link
            variant="secondary"
            linkProps={{
              href: "https://github.com/Emiliano-Bucci/react-spring-carousel",
            }}
            title="https://github.com/Emiliano-Bucci/react-spring-carousel"
            target="_blank"
            size="default"
            className={cx(
              css`
                margin: 0 1.2rem;
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
            linkProps={{
              href: "https://www.npmjs.com/package/react-spring-carousel",
            }}
            title="https://www.npmjs.com/package/react-spring-carousel"
            target="_blank"
            className={cx(
              css`
                margin: 0 1.2rem;
                svg {
                  width: 26px;
                  height: 26px;
                }
              `
            )}
          >
            <NpmIcon />
          </Link>
        </div>
      </div>
    </aside>
  );
}
