import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";
import { OnThisPageItem } from "pages/_app";
import { sidebarWrapperStyles } from "./Sidebar";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { a, useSpring } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  items: OnThisPageItem[];
};

const slideCount = 44;

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

  console.log(items);

  return (
    <aside
      className={cx(
        sidebarWrapperStyles,
        css`
          display: flex;
          align-items: flex-start;
          flex: 1;
          height: calc(100vh - 70px);
          align-self: start;
          position: sticky;
          top: 70px;
          padding: 3.2rem;
          background-color: ${colors.warmLight};
          ${mediaQueries.until.tablet} {
            display: none;
          }
        `
      )}
    >
      <div
        className={cx(
          items.length === 0 &&
            css`
              display: none !important;
            `,
          css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex: 1;
            background-color: #fff;
            border-radius: 12px;
            box-shadow: ${shadows.small};
          `
        )}
      >
        {items.length > 0 && (
          <span
            className={css`
              font-size: 2rem;
              padding: 2.4rem;
              padding-bottom: 0;
              padding-left: 2rem;
              color: ${colors.secondaryDarker};
            `}
          >
            On this page
          </span>
        )}
        <div
          className={css`
            display: grid;
            padding: 3.2rem;
            padding-top: 1.6rem;
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
              background-color: ${colors.dark60};
              bottom: 32px;
              top: 16px;
              left: 24px;
            `}
          >
            {items.length > 0 && (
              <a.div
                style={styles}
                className={css`
                  width: 8px;
                  height: 44px;
                  border-radius: 4px;
                  background-color: ${colors.secondaryLight};
                  margin-left: -3px;
                `}
              />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
