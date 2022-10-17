import { Button } from "atoms/Button";
import { Link } from "atoms/Link";
import { css, cx } from "linaria";
import { useEffect, useRef } from "react";
import { colors } from "src/theme";

import Arrow from "public/up-arrow.svg";
import { Props as LinkProps } from "../Link/Link";

const childStyles = css`
  && {
    width: auto;
    margin-left: 3.8rem;
  }
`;

const activeStyles = css`
  && {
    background-color: ${colors.warm};
    color: ${colors.secondaryDarker} !important;
    border: 1px solid ${colors.warmDarker};
    :focus,
    :hover {
      background-color: ${colors.warm};
      color: ${colors.secondaryDarker} !important;
      border: 1px solid ${colors.warmDarker};
    }
  }
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
  onClick?: LinkProps["onClick"];
};

export function SidebarNavItem({
  label,
  isSectionTitle = false,
  isActive = false,
  href = "",
  isChild = false,
  isExpanded = false,
  onClick,
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
          font-size: 1.8rem;
          width: 100%;
          margin-bottom: 0.8rem;
          span {
            width: 100%;
            color: ${colors.secondaryDarker};
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
              color: ${colors.secondary};
              padding: 0.64rem 0.8rem;
              cursor: pointer;
              align-items: center;
              height: 44px;
              justify-content: flex-start;
              transition: all 220ms ease;
              border-radius: 0px;
              border-radius: 6px;
              padding: 1.2rem;
              border: 1px solid transparent;
              span {
                color: inherit;
              }
              :hover,
              :focus {
                background-color: #efefef;
              }
            }
          `
        )}
      >
        <div
          className={css`
            display: flex;
            width: 12px;
            height: 12px;
            margin-right: 0.8rem;
            margin-top: 0.4rem;
            svg {
              transition: all 320ms ease;
              fill: currentColor;
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
      onClick={onClick}
      className={cx(
        isChild && childStyles,
        isActive && activeStyles,
        css`
          width: 100%;
          display: flex;
          color: ${colors.secondary};
          padding: 0.64rem 0.8rem;
          height: 44px;
          cursor: pointer;
          align-items: center;
          justify-content: flex-start;
          transition: all 280ms ease;
          border-radius: 6px;
          padding: 1.2rem;
          border: 1px solid transparent;
          span {
            color: inherit;
          }
          :hover,
          :focus {
            background-color: #efefef;
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
