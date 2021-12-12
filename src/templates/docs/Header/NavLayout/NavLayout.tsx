import { ResponsiveWrapper } from "atoms/ResponsiveWrapper";
import { css } from "linaria";
import { Accordion, AccordionRow } from "molecoles/Accordion";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useRouter } from "next/dist/client/router";
import { PropsWithChildren } from "react";

const sectionItemStyles = css`
  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;

const sectionProps = {
  props: {
    className: sectionItemStyles,
  },
};

export function NavLayout({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const { pathname } = useRouter();
  const sidebarItems: AccordionRow[] = [
    {
      id: "about",
      renderItem: <SidebarNavItem label="About" isSectionTitle />,
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
      ],
      ...sectionProps,
    },
    {
      id: "docs",
      renderItem: <SidebarNavItem label="Docs" isSectionTitle />,
      shouldBeInteractive: false,
      children: [
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
          id: "examples",
          renderItem: (
            <SidebarNavItem
              label="Examples"
              isActive={pathname === "/docs/examples"}
              href="/docs/examples"
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
  ];
  return (
    <ResponsiveWrapper>
      <div
        className={css`
          display: flex;
        `}
      >
        <nav
          className={css`
            width: 100%;
            max-width: 200px;
            & > * {
              position: sticky;
              top: calc(88px + 40px);
            }
          `}
        >
          <Accordion data={sidebarItems} />
        </nav>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
          `}
        >
          {children}
        </div>
      </div>
    </ResponsiveWrapper>
  );
}
