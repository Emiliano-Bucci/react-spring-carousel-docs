import { Button } from "atoms/Button";
import { Link } from "atoms/Link";
import { css, cx } from "linaria";
import { useEffect, useRef } from "react";
import { colors, shadows } from "src/theme";

import Arrow from "public/up-arrow.svg";

const childStyles = css`
  && {
    width: auto;
    margin-left: 3.8rem;
  }
`;

const activeStyles = css`
  color: ${colors.secondaryLight} !important;
`;

const expandedStyles = css`
  && {
    svg {
      transform: rotate(0deg);
    }
  }
`;

type Props = {
  label: string;
  isSectionTitle?: boolean;
  isActive?: boolean;
  href?: string;
  isChild?: boolean;
  isExpanded?: boolean;
};

export function SidebarNavItem({
  label,
  isSectionTitle = false,
  isActive = false,
  href = "",
  isChild = false,
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
          width: 100%;
          margin-bottom: 0.8rem;
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

  if (!href) {
    return (
      <Button
        variant="none"
        size="none"
        className={cx(
          isChild && childStyles,
          isActive && activeStyles,
          isExpanded && expandedStyles,
          css`
            && {
              width: 100%;
              display: flex;
              color: #fafafa;
              padding: 0.8rem;
              cursor: pointer;
              align-items: center;
              height: 42px;
              justify-content: flex-start;
              transition: all 280ms ease;
              border-radius: 0px;
              font-size: 1.8rem;
              border-radius: 8px;
              padding: 1.2rem;
              span {
                color: inherit;
              }
              :hover,
              :focus {
                color: #fff;
                background-color: ${colors.primary};
                box-shadow: ${shadows.medium};
              }
            }
          `
        )}
      >
        <div
          className={css`
            display: flex;
            width: 14px;
            height: 14px;
            margin-right: 0.8rem;
            margin-top: 0.4rem;
            svg {
              transition: all 320ms ease;
              fill: #fff;
              transform: rotate(180deg);
            }
          `}
        >
          <Arrow />
        </div>
        <span>{label}</span>
      </Button>
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
          height: 42px;
          cursor: pointer;
          align-items: center;
          justify-content: flex-start;
          transition: all 280ms ease;
          font-size: 1.8rem;
          border-radius: 8px;
          padding: 1.2rem;
          span {
            color: inherit;
          }
          :hover,
          :focus {
            color: #fff;
            background-color: ${colors.primary};
            box-shadow: ${shadows.medium};
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
