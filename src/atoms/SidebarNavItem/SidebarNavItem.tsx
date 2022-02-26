import { Link } from "atoms/Link";
import { css, cx } from "linaria";
import { useEffect, useRef } from "react";
import { colors } from "src/theme";
import { Dot } from "./Dot";
import { Line } from "./Line";
import { Plus } from "./Plus";

const childStyles = css`
  margin-left: 1.2rem;
`;

const activeStyles = css`
  color: ${colors.secondaryLight} !important;
`;

type Props = {
  label: string;
  isSectionTitle?: boolean;
  isActive?: boolean;
  href?: string;
  isChild?: boolean;
  isChildParent?: boolean;
  isExpanded?: boolean;
};

export function SidebarNavItem({
  label,
  isSectionTitle = false,
  isActive = false,
  href = "",
  isChild = false,
  isChildParent = false,
  isExpanded = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (isExpanded && !isActive && ref.current) {
      ref.current.blur();
    }
  }, [isActive, isExpanded, label]);

  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.focus();
    }
  }, [isActive, label]);

  if (isSectionTitle) {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
          font-size: 2rem;
          span {
            color: #bebed3;
          }
        `}
      >
        <span>{label}</span>
      </div>
    );
  }

  return (
    <Link
      variant="none"
      size="none"
      ref={ref}
      className={cx(
        isChild && childStyles,
        isActive && activeStyles,
        css`
          display: flex;
          color: #d8d8e4;
          padding: 0.4rem 0.8rem;
          cursor: pointer;
          align-items: center;
          justify-content: flex-start;
          transition: color 280ms ease;
          font-size: 1.8rem;
          span {
            color: inherit;
          }
          :hover,
          :focus {
            color: ${colors.secondaryLight};
          }
        `
      )}
      linkProps={{
        href,
      }}
    >
      {isChild ? (
        <Line isActive={isActive} />
      ) : isChildParent ? (
        <Plus isActive={isExpanded} />
      ) : (
        <Dot isActive={isActive} />
      )}
      <span>{label}</span>
    </Link>
  );
}
