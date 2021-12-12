import { ResponsiveWrapper } from "atoms/ResponsiveWrapper";
import { css } from "linaria";
import { Accordion, AccordionRow } from "molecoles/Accordion";
import { SidebarNavItem } from "atoms/SidebarNavItem";

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

const sidebarItems: AccordionRow[] = [
  {
    id: "about",
    renderItem: <SidebarNavItem label="About" isSectionTitle />,
    shouldBeInteractive: false,
    children: [
      {
        id: "introduction",
        renderItem: <SidebarNavItem label="Introduction" />,
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
        renderItem: <SidebarNavItem label="Install" />,
      },
      {
        id: "examples",
        renderItem: <SidebarNavItem label="Examples" />,
      },
    ],
    ...sectionProps,
  },
  {
    id: "references",
    renderItem: <SidebarNavItem label="References" isSectionTitle />,
  },
];

export default function Page() {
  return (
    <ResponsiveWrapper>
      <div
        className={css`
          display: flex;
        `}
      >
        <aside
          className={css`
            width: 100%;
            max-width: 200px;
          `}
        >
          <Accordion data={sidebarItems} />
        </aside>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
          `}
        >
          content
        </div>
      </div>
    </ResponsiveWrapper>
  );
}
