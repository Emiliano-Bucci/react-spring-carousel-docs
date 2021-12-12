import NextLink, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import { css, cx } from "linaria";
import { colors } from "src/theme";

type Props = PropsWithChildren<{
  linkProps: LinkProps;
  variant?: "primary" | "secondary" | "none";
  size?: "default" | "small" | "icon" | "none";
}> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const styles = css`
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
  border: 2px solid transparent;

  &[data-size="default"] {
    padding: 1.2rem 1.6rem;
  }
  &[data-size="small"] {
    padding: 0.8rem 1.2rem;
  }
  &[data-size="icon"] {
    padding: 0.8rem 0.8rem;
  }
  &[data-size="none"] {
    padding: 0;
  }

  &[data-variant="primary"] {
    background-color: ${colors.primaryLight};
    color: #fff;
    border-radius: 8px;
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 6px 15px rgba(0, 0, 0, 0.06);
    :hover,
    :focus {
      background-color: ${colors.secondaryLight};
      box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
        0px 12px 30px rgba(0, 0, 0, 0.12);
      border-color: ${colors.secondaryDarker};
    }
  }
  &[data-variant="secondary"] {
    background-color: ${colors.secondaryLight};
    color: #fff;
    border-radius: 8px;
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 6px 15px rgba(0, 0, 0, 0.06);
    :hover,
    :focus {
      background-color: ${colors.primaryLight};
      box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
        0px 12px 30px rgba(0, 0, 0, 0.12);
      border-color: ${colors.primary};
    }
  }
`;

export function Link({
  children,
  linkProps,
  className = "",
  variant = "primary",
  size = "default",
  ...rest
}: Props) {
  return (
    <NextLink {...linkProps}>
      <a
        {...rest}
        data-variant={variant}
        data-size={size}
        className={cx(styles, className)}
      >
        {children}
      </a>
    </NextLink>
  );
}
