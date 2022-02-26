import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useAccordionProvider } from "molecoles/Accordion";

type Props = {
  label: string;
  href: string;
  id: string;
};
export function ParentSidebarNavItem({ label, href, id }: Props) {
  const { getIsExpanded } = useAccordionProvider();
  return (
    <SidebarNavItem
      label={label}
      href={href}
      isChildParent
      isExpanded={getIsExpanded(id)}
    />
  );
}
