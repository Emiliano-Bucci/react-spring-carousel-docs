import {
  AccordionRow,
  useAccordionProvider,
  Accordion,
} from "molecoles/Accordion";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useEffect, useMemo, useRef, useState } from "react";
import { ParentSidebarNavItem } from "atoms/SidebarNavItem/ParentSidebarNavItem";
import { useRouter } from "next/dist/client/router";
import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";
import { a, useSpring } from "react-spring";
import { breakpoints, mediaQueries } from "src/mediaQueries";
import Router from "next/router";
import { MobileSidebarButton } from "./MobileSidebarButton";
import { Link } from "atoms/Link";

export const sidebarWrapperStyles = css`
  max-width: 300px;
`;

const heightValue = 44;

function ParentDecorator({ id }: { id: string }) {
  const { getActiveItems } = useAccordionProvider();
  const activeItems = getActiveItems();
  const currentSlidedValue = useRef(0);

  const parentItem = activeItems.find((p) => p.id === id);
  const parentIsActive = parentItem?.isActive;
  const currentActiveItem = activeItems.find(
    (p) => p.isActive && !p.isExpanded
  );

  function getYvalue() {
    if (
      !parentItem?.isExpanded &&
      currentActiveItem?.parentId !== parentItem?.id
    ) {
      return 0;
    }
    if (parentIsActive && currentActiveItem) {
      return heightValue * currentActiveItem.index;
    }
    return currentSlidedValue.current;
  }

  const trackStyles = useSpring({
    y: getYvalue(),
    opacity: parentIsActive ? 1 : 0,
    immediate:
      !parentItem?.isExpanded && currentActiveItem?.parentId !== parentItem?.id,
    config: {
      tension: 350,
    },
    onChange: ({ value }) => {
      currentSlidedValue.current = value.y;
    },
  });
  return (
    <div
      className={css`
        position: absolute;
        top: 0px;
        left: 18px;
        width: 2px;
        bottom: 0px;
        background-color: ${colors.dark60};
        transform-origin: top;
      `}
    >
      <a.div
        style={trackStyles}
        className={css`
          width: 8px;
          height: 44px;
          border-radius: 20px;
          background-color: ${colors.secondaryLight};
          margin-left: -3px;
          transform-origin: top;
          box-shadow: ${shadows.large};
        `}
      />
    </div>
  );
}

const sectionItemStyles = css`
  &:not(:last-of-type) {
    margin-bottom: 2.4rem;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${colors.light};
  }
`;

const sectionProps = {
  props: {
    className: sectionItemStyles,
  },
};

export function Sidebar() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const { pathname, replace } = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const [sidebarStyles, setSidebarStyles] = useSpring(() => ({
    opacity: 1,
    x: 0,
    config: {
      frequency: 0.32,
    },
  }));
  const sidebarItems = useMemo(() => {
    return [
      {
        id: "start",
        renderItem: <SidebarNavItem label="Start" isSectionTitle />,
        shouldBeInteractive: false,
        children: [
          {
            id: "introduction",
            isInitiallyExpanded: pathname === "/docs",
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
            isInitiallyExpanded: pathname === "/docs/install",
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
            isInitiallyExpanded: pathname === "/docs/premise",
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
            onItemShouldExpand({ isExpanded, toggle }) {
              if (
                isExpanded &&
                !pathname.includes("/docs/use-spring-carousel")
              ) {
                replace("/docs/use-spring-carousel/basic");
              } else {
                toggle();
              }
            },
            extraChildrenSlot: <ParentDecorator id="use-spring-carousel" />,
            renderItem: (
              <ParentSidebarNavItem
                label="useSpringCarousel"
                id="use-spring-carousel"
              />
            ),
            children: [
              {
                id: "/docs/use-spring-carousel/basic",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/basic",
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
                id: "/docs/use-spring-carousel/styled",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/styled",
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
                id: "/docs/use-spring-carousel/render-item",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/render-item",
                renderItem: (
                  <SidebarNavItem
                    label="Render item"
                    isActive={
                      pathname === "/docs/use-spring-carousel/render-item"
                    }
                    href="/docs/use-spring-carousel/render-item"
                    isChild
                  />
                ),
              },
              {
                id: "/docs/use-spring-carousel/nav-buttons",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/nav-buttons",
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
                id: "/docs/use-spring-carousel/loop",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/loop",
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
                id: "/docs/use-spring-carousel/thumb-list",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/thumb-list",
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
                id: "/docs/use-spring-carousel/initial-active-item",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/initial-active-item",
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
                id: "/docs/use-spring-carousel/multiple-items",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/multiple-items",
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
                id: "/docs/use-spring-carousel/slide-types",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/slide-types",
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
                id: "/docs/use-spring-carousel/drag",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/drag",
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
                id: "/docs/use-spring-carousel/slide-axis",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/slide-axis",
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
                id: "/docs/use-spring-carousel/fullscreen",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/fullscreen",
                renderItem: (
                  <SidebarNavItem
                    label="Fullscreen"
                    isChild
                    href="/docs/use-spring-carousel/fullscreen"
                    isActive={
                      pathname === "/docs/use-spring-carousel/fullscreen"
                    }
                  />
                ),
              },
              {
                id: "/docs/use-spring-carousel/extra",
                isInitiallyExpanded:
                  pathname === "/docs/use-spring-carousel/extra",
                renderItem: (
                  <SidebarNavItem
                    label="Extra"
                    isChild
                    href="/docs/use-spring-carousel/extra"
                    isActive={pathname === "/docs/use-spring-carousel/extra"}
                  />
                ),
              },
            ],
          },
          {
            id: "use-transition-carousel",
            isInitiallyExpanded: pathname.includes(
              "/docs/use-transition-carousel"
            ),
            extraChildrenSlot: <ParentDecorator id="use-transition-carousel" />,
            onItemShouldExpand({ isExpanded, toggle }) {
              if (
                isExpanded &&
                !pathname.includes("/docs/use-transition-carousel")
              ) {
                replace("/docs/use-transition-carousel/basic");
              } else {
                toggle();
              }
            },
            renderItem: (
              <ParentSidebarNavItem
                label="useTransitionCarousel"
                id="use-transition-carousel"
              />
            ),
            children: [
              {
                id: "/docs/use-transition-carousel/basic",
                isInitiallyExpanded:
                  pathname === "/docs/use-transition-carousel/basic",
                renderItem: (
                  <SidebarNavItem
                    label="Basic"
                    href="/docs/use-transition-carousel/basic"
                    isChild
                    isActive={
                      pathname === "/docs/use-transition-carousel/basic"
                    }
                  />
                ),
              },
              {
                id: "/docs/use-transition-carousel/loop",
                isInitiallyExpanded:
                  pathname === "/docs/use-transition-carousel/loop",
                renderItem: (
                  <SidebarNavItem
                    label="Loop"
                    href="/docs/use-transition-carousel/loop"
                    isChild
                    isActive={pathname === "/docs/use-transition-carousel/loop"}
                  />
                ),
              },
              {
                id: "/docs/use-transition-carousel/swipe",
                isInitiallyExpanded:
                  pathname === "/docs/use-transition-carousel/swipe",
                renderItem: (
                  <SidebarNavItem
                    label="Swipe"
                    href="/docs/use-transition-carousel/swipe"
                    isChild
                    isActive={
                      pathname === "/docs/use-transition-carousel/swipe"
                    }
                  />
                ),
              },
              {
                id: "/docs/use-transition-carousel/axis-animation",
                isInitiallyExpanded:
                  pathname === "/docs/use-transition-carousel/axis-animation",
                renderItem: (
                  <SidebarNavItem
                    label="Axis animation"
                    href="/docs/use-transition-carousel/axis-animation"
                    isChild
                    isActive={
                      pathname ===
                      "/docs/use-transition-carousel/axis-animation"
                    }
                  />
                ),
              },
              {
                id: "/docs/use-transition-carousel/slideshow",
                isInitiallyExpanded:
                  pathname === "/docs/use-transition-carousel/slideshow",
                renderItem: (
                  <SidebarNavItem
                    label="Slideshow"
                    href="/docs/use-transition-carousel/slideshow"
                    isChild
                    isActive={
                      pathname ===
                      "/docs/use-transition-carousel/axis-animation"
                    }
                  />
                ),
              },
            ],
          },
        ],
        ...sectionProps,
      },
      {
        id: "more",
        shouldBeInteractive: false,
        renderItem: <SidebarNavItem label="More" isSectionTitle />,
        ...sectionProps,
        children: [
          {
            id: "tips",
            isInitiallyExpanded: pathname === "/docs/tips",
            renderItem: (
              <SidebarNavItem
                label="Tips"
                href="/docs/tips"
                isActive={pathname === "/docs/tips"}
              />
            ),
          },
          {
            id: "events",
            isInitiallyExpanded: pathname === "/docs/events",
            renderItem: (
              <SidebarNavItem
                label="Events"
                href="/docs/events"
                isActive={pathname === "/docs/events"}
              />
            ),
          },
          {
            id: "context",
            isInitiallyExpanded: pathname === "/docs/context",
            renderItem: (
              <SidebarNavItem
                label="Context"
                href="/docs/context"
                isActive={pathname === "/docs/context"}
              />
            ),
          },
          {
            id: "types",
            isInitiallyExpanded: pathname === "/docs/types",
            renderItem: (
              <SidebarNavItem
                label="Types"
                href="/docs/types"
                isActive={pathname === "/docs/types"}
              />
            ),
          },
        ],
      },
    ] as AccordionRow[];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    function showSidebar(_ref: HTMLDivElement) {
      _ref.style.display = "flex";
      _ref.style.pointerEvents = "auto";
      document.body.style.overflow = "hidden";
      setSidebarStyles({
        from: {
          opacity: 0,
          x: -96,
        },
        to: {
          opacity: 1,
          x: 0,
        },
      });
    }
    function hideSidebar(_ref: HTMLDivElement) {
      document.body.style.overflow = "unset";
      _ref.style.pointerEvents = "none";
      setSidebarStyles({
        opacity: 0,
        x: -96,
      });
    }
    function handleSidebarTabletLogic() {
      if (showMobileSidebar && ref.current) {
        showSidebar(ref.current);
      }
      if (!showMobileSidebar && ref.current) {
        hideSidebar(ref.current);
      }
    }
    function handleListener(ev: MediaQueryListEvent) {
      if (ev.matches) {
        setShowMobileSidebar(false);
      } else {
        setShowMobileSidebar(true);
        showSidebar(ref.current!);
        document.body.style.overflow = "unset";
      }
    }

    const isTabletM = window.matchMedia(
      `(max-width: ${breakpoints.tabletM}px)`
    );

    if (isTabletM.matches) {
      handleSidebarTabletLogic();
    }

    isTabletM.addListener(handleListener);
    return () => {
      isTabletM.removeListener(handleListener);
    };
  }, [setSidebarStyles, showMobileSidebar]);
  useEffect(() => {
    const isTabletM = window.matchMedia(
      `(max-width: ${breakpoints.tabletM}px)`
    );
    function handleRouteChange() {
      if (isTabletM.matches) {
        setShowMobileSidebar(false);
      }
    }
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <a.div
        ref={ref}
        style={sidebarStyles}
        className={cx(
          sidebarWrapperStyles,
          css`
            display: flex;
            border-right: 1px solid ${colors.light};
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 70px);
            position: sticky;
            top: 70px;
            flex-shrink: 0;
            background-color: #fff;
            ${mediaQueries.until.tabletM} {
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 100;
              max-width: 100%;
              overflow: hidden;
            }
          `
        )}
      >
        <nav
          className={css`
            flex: 1;
            overflow-y: auto;
            padding: 2.4rem;
            ${mediaQueries.until.mobile} {
              padding: 2rem;
            }
          `}
        >
          <Accordion shouldExpandOnlyOneItem data={sidebarItems} />
        </nav>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            padding: 2.4rem;
            border-top: 1px solid ${colors.light};
            position: sticky;
            bottom: 0;
            background-color: #fff;
            ${mediaQueries.until.mobile} {
              padding: 2rem;
            }
          `}
        >
          <Link
            variant="default-link"
            title="Author web site"
            size="none"
            linkProps={{
              href: "https://emilianobucci.com",
            }}
          >
            Emiliano Bucci
          </Link>
          <img src="https://img.shields.io/npm/v/react-spring-carousel" />
        </div>
      </a.div>
      <MobileSidebarButton
        isActive={showMobileSidebar}
        onClick={() => setShowMobileSidebar((p) => !p)}
      />
    </>
  );
}
