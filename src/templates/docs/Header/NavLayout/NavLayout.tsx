import { ResponsiveWrapper } from "atoms/ResponsiveWrapper";
import { css } from "linaria";
import { Accordion, AccordionRow } from "molecoles/Accordion";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useRouter } from "next/dist/client/router";
import { PropsWithChildren } from "react";
import { colors, shadows } from "src/theme";

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
          ul {
            list-style: initial;
            padding-left: 2.4rem;
          }
          strong {
            color: ${colors.secondary};
          }
          h2 {
            font-size: 3.4rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: ${colors.secondary};
            position: relative;
            padding-left: 1.2rem;
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
            &:not(:first-of-type) {
              margin-top: 2.4rem;
            }
          }
          p {
            &:not(:last-child) {
              margin-bottom: 2.4rem;
            }

            + ul {
              margin-top: -1.2rem;
            }
          }
        `}
      >
        <nav
          className={css`
            width: 100%;
            max-width: 200px;
            & > * {
              position: sticky;
              top: calc(88px + 40px);
              border: 2px solid ${colors.secondaryLight};
              padding: 1.6rem;
              border-radius: 8px;
              box-shadow: ${shadows.small};
              transition: all 280ms ease;
              :hover {
                box-shadow: ${shadows.large};
              }
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
