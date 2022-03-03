import { Link } from "atoms/Link";
import { css, cx } from "linaria";
import { useEffect, useRef } from "react";
import { colors } from "src/theme";

const childStyles = css`
  && {
    padding-left: 6.4rem;
  }
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
          font-size: 2rem;
          padding: 1.6rem 2.4rem;
          padding-bottom: 1.2rem;
          padding-left: 4rem;
          width: 100%;
          span {
            width: 100%;
            color: #fafafa;
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
          width: 100%;
          display: flex;
          color: #fafafa;
          padding: 0.8rem;
          padding-left: 2.4rem;
          cursor: pointer;
          align-items: center;
          justify-content: flex-start;
          transition: all 280ms ease;
          padding-left: 4.8rem;
          font-size: 1.8rem;
          span {
            color: inherit;
          }
          :hover,
          :focus {
            color: #fff;
            background-color: ${colors.primary};
          }
        `
      )}
      linkProps={{
        href,
      }}
    >
      <span>{label}</span>
    </Link>
  );
}
