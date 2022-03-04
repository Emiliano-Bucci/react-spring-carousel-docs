import { css, cx } from "linaria";
import { Accordion, AccordionRow } from "molecoles/Accordion";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useMemo } from "react";
import { colors, shadows } from "src/theme";
import { ParentSidebarNavItem } from "atoms/SidebarNavItem/ParentSidebarNavItem";
import { GlobalPlayground } from "./GlobalPlayground";

const sectionItemStyles = css`
  &:not(:last-of-type) {
    margin-bottom: 2.4rem;
  }
`;

const sectionProps = {
  props: {
    className: sectionItemStyles,
  },
};

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: flex;

        .page-wrapper {
          background-color: #fdfdfc;
          ul {
            list-style: initial;
            padding-left: 2.4rem;
            li:not(:last-of-type) {
              margin-bottom: 1.2rem;
            }
          }
          strong {
            color: ${colors.secondary};
          }
          h1 {
            font-size: 4rem;
          }
          h2 {
            font-size: 3.2rem;
            &:not(:first-child) {
              margin-top: 2.4rem;
            }
          }
          h1,
          h2 {
            font-weight: bold;
            margin-bottom: 3.2rem;
            color: ${colors.secondary};
            position: relative;
            padding-left: 2.4rem;
            padding-bottom: 0.8rem;
            &:not(:first-of-type) {
              margin-top: 2.4rem;
            }
            ::before {
              content: "";
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              height: 4px;
              border-radius: 20px;
              background-image: linear-gradient(
                to right,
                ${colors.primaryLight},
                ${colors.secondaryLight}
              );
            }
          }
          p {
            + ul {
              margin-top: -2rem;
            }
          }
          & > * {
            :not(:last-child) {
              margin-bottom: 3.2rem;
            }
          }
        }
      `}
    >
      {children}
    </div>
  );
}

type Props = {
  pageContent: ReactNode;
  footerFragment: ReactNode;
};

export function NavLayout({ pageContent, footerFragment }: Props) {
  const { pathname } = useRouter();
  const sidebarItems = useMemo(() => {
    return [
      {
        id: "start",
        renderItem: <SidebarNavItem label="Start" isSectionTitle />,
        shouldBeInteractive: false,
        children: [
          {
            id: "introduction",
            renderItem: (
              <SidebarNavItem
                label="Introduction"
                href="/docs"
                isActive={pathname === "/docs"}
              />
            ),
          },
          {
            id: "install",
            renderItem: (
              <SidebarNavItem
                label="Install"
                isActive={pathname === "/docs/install"}
                href="/docs/install"
              />
            ),
          },
          {
            id: "premise",
            renderItem: (
              <SidebarNavItem
                label="Premise"
                href="/docs/premise"
                isActive={pathname === "/docs/premise"}
              />
            ),
          },
        ],
        ...sectionProps,
      },
      {
        id: "docs",
        renderItem: <SidebarNavItem label="Docs" isSectionTitle />,
        shouldBeInteractive: false,
        children: [
          {
            id: "use-spring-carousel",
            isInitiallyExpanded: pathname.includes("/docs/use-spring-carousel"),
            renderItem: (
              <ParentSidebarNavItem
                label="useSpringCarousel"
                href="/docs/use-spring-carousel/basic"
                id="use-spring-carousel"
              />
            ),
            children: [
              {
                id: "basic",
                renderItem: (
                  <SidebarNavItem
                    label="Basic"
                    isActive={pathname === "/docs/use-spring-carousel/basic"}
                    href="/docs/use-spring-carousel/basic"
                    isChild
                  />
                ),
              },
              {
                id: "styled",
                renderItem: (
                  <SidebarNavItem
                    label="Styled"
                    isActive={pathname === "/docs/use-spring-carousel/styled"}
                    href="/docs/use-spring-carousel/styled"
                    isChild
                  />
                ),
              },
              {
                id: "nav-buttons",
                renderItem: (
                  <SidebarNavItem
                    label="Nav buttons"
                    isChild
                    href="/docs/use-spring-carousel/nav-buttons"
                    isActive={
                      pathname === "/docs/use-spring-carousel/nav-buttons"
                    }
                  />
                ),
              },
              {
                id: "loop",
                renderItem: (
                  <SidebarNavItem
                    label="Loop"
                    isChild
                    href="/docs/use-spring-carousel/loop"
                    isActive={pathname === "/docs/use-spring-carousel/loop"}
                  />
                ),
              },
              {
                id: "thumb-list",
                renderItem: (
                  <SidebarNavItem
                    label="Thumb list"
                    isChild
                    href="/docs/use-spring-carousel/thumb-list"
                    isActive={
                      pathname === "/docs/use-spring-carousel/thumb-list"
                    }
                  />
                ),
              },
              {
                id: "initial-active-item",
                renderItem: (
                  <SidebarNavItem
                    label="Initial active item"
                    isChild
                    href="/docs/use-spring-carousel/initial-active-item"
                    isActive={
                      pathname ===
                      "/docs/use-spring-carousel/initial-active-item"
                    }
                  />
                ),
              },
              {
                id: "multiple-items",
                renderItem: (
                  <SidebarNavItem
                    label="Multiple items"
                    isChild
                    href="/docs/use-spring-carousel/multiple-items"
                    isActive={
                      pathname === "/docs/use-spring-carousel/multiple-items"
                    }
                  />
                ),
              },
              {
                id: "slide-type",
                renderItem: (
                  <SidebarNavItem
                    label="Slide types"
                    isChild
                    href="/docs/use-spring-carousel/slide-types"
                    isActive={
                      pathname === "/docs/use-spring-carousel/slide-types"
                    }
                  />
                ),
              },
              {
                id: "drag",
                renderItem: (
                  <SidebarNavItem
                    label="Drag"
                    isChild
                    href="/docs/use-spring-carousel/drag"
                    isActive={pathname === "/docs/use-spring-carousel/drag"}
                  />
                ),
              },
              {
                id: "slide-axis",
                renderItem: (
                  <SidebarNavItem
                    label="Slide axis"
                    isChild
                    href="/docs/use-spring-carousel/slide-axis"
                    isActive={
                      pathname === "/docs/use-spring-carousel/slide-axis"
                    }
                  />
                ),
              },
              {
                id: "built-in-class-names",
                renderItem: (
                  <SidebarNavItem
                    label="Built in classNames"
                    isChild
                    href="/docs/use-spring-carousel/built-in-class-names"
                    isActive={
                      pathname ===
                      "/docs/use-spring-carousel/built-in-class-names"
                    }
                  />
                ),
              },
            ],
          },
          {
            id: "use-transition-carousel",
            renderItem: (
              <ParentSidebarNavItem
                label="useTransitionCarousel"
                href="/docs/use-transition-carousel"
                id="use-transition-carousel"
              />
            ),
          },
        ],
        ...sectionProps,
      },
      {
        id: "references",
        renderItem: <SidebarNavItem label="References" isSectionTitle />,
      },
    ] as AccordionRow[];
  }, [pathname]);

  return (
    <Wrapper>
      <div
        className={css`
          width: 100%;
          height: 100vh;
          position: sticky;
          top: 0;
          max-width: 400px;
          background-color: ${colors.primaryLight};
          box-shadow: ${shadows.small};
        `}
      >
        <h1
          className={css`
            color: #fafafa;
            font-size: 2.4rem;
            padding: 4rem;
            background: ${colors.primary};
          `}
        >
          React Spring Carousel
        </h1>
        <nav
          className={css`
            padding-top: 1.6rem;
          `}
        >
          <Accordion data={sidebarItems} />
        </nav>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          background-color: #fff;
        `}
      >
        <div
          className={cx(
            "page-wrapper",
            css`
              flex: 1;
              display: flex;
              flex-direction: column;
              width: 100%;
              padding: 8rem 12rem;
              margin: 0 auto;
              max-width: 1240px;
              border-left: 1px solid ${colors.warm};
              border-right: 1px solid ${colors.warm};
            `
          )}
        >
          {pageContent}
        </div>
        {footerFragment}
      </div>
      <GlobalPlayground />
    </Wrapper>
  );
}
