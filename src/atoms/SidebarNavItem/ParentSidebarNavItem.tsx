import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useAccordionProvider } from "molecoles/Accordion";

type Props = {
  label: string;
  id: string;
};
export function ParentSidebarNavItem({ label, id }: Props) {
  const { getIsExpanded } = useAccordionProvider();
  return <SidebarNavItem label={label} isExpanded={getIsExpanded(id)} />;
}
