import NextLink, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  PropsWithChildren,
} from "react";
import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";

export type Props = PropsWithChildren<{
  linkProps: LinkProps;
  variant?: "primary" | "secondary" | "none" | "default-link";
  size?: "default" | "small" | "icon" | "none";
}> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: inherit;
  -webkit-appearance: none;
  font-size: 1.6rem;
  cursor: pointer;
  background: none;
  letter-spacing: inherit;
  outline: none;
  text-decoration: none;
  line-height: inherit;
  color: inherit;
  transition: all 280ms ease;

  &&[data-size="default"] {
    padding: 1.2rem 1.6rem;
  }
  &&[data-size="small"] {
    padding: 0.8rem 1.2rem;
  }
  &&[data-size="icon"] {
    padding: 0.8rem 0.8rem;
    width: 38px;
    height: 38px;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  &&[data-variant="default-link"] {
    display: inline-flex;
    justify-content: flex-start;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 3px;
    :hover,
    :focus {
      color: ${colors.secondaryLight};
    }
  }
  &[data-variant="primary"] {
    background-color: ${colors.primaryLight};
    color: #fff;
    border-radius: 8px;
    box-shadow: ${shadows.medium};
    :hover,
    :focus {
      background-color: ${colors.primary};
      box-shadow: ${shadows.medium};
    }
  }
  &[data-variant="secondary"] {
    &[data-isActive="true"] {
      background-color: ${colors.secondaryDarker} !important;
    }
    background-color: ${colors.secondaryLight};
    color: #fff;
    border-radius: 8px;
    box-shadow: ${shadows.medium};
    :hover,
    :focus {
      background-color: ${colors.secondary};
      box-shadow: ${shadows.medium};
    }
  }
`;

export const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      children,
      linkProps,
      className = "",
      variant = "primary",
      size = "default",
      type = "default",
      ...rest
    },
    ref
  ) => {
    return (
      <NextLink {...linkProps}>
        <a
          {...rest}
          ref={ref}
          data-variant={variant}
          data-size={size}
          data-type={type}
          className={cx(styles, className)}
        >
          {children}
        </a>
      </NextLink>
    );
  }
);
