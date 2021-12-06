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
  size?: "default" | "small" | "icon";
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

  &[data-size="default"] {
    padding: 1.2rem 1.6rem;
  }
  &[data-size="small"] {
    padding: 0.8rem 1.2rem;
  }
  &[data-size="icon"] {
    padding: 0.8rem 0.8rem;
  }

  &[data-variant="primary"] {
    background-color: ${colors.secondary};
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 6px 15px rgba(0, 0, 0, 0.06);
    :hover,
    :focus {
      background-color: ${colors.secondaryLight};
      box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
        0px 12px 30px rgba(0, 0, 0, 0.12);
    }
  }
  &[data-variant="secondary"] {
    background-color: ${colors.secondaryLight};
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 6px 15px rgba(0, 0, 0, 0.06);
    :hover,
    :focus {
      background-color: ${colors.secondary};
      box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
        0px 12px 30px rgba(0, 0, 0, 0.12);
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
