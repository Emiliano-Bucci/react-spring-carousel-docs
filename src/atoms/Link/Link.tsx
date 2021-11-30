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
}> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const styles = css`
  border: none;
  font-family: inherit;
  -webkit-appearance: none;
  font-size: 1.6rem;
  cursor: pointer;
  background: none;
  background-color: ${colors.secondary};
  color: #fff;
  transition: all 280ms ease;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  letter-spacing: inherit;
  outline: none;
  text-decoration: none;
  line-height: inherit;
  box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
    0px 6px 15px rgba(0, 0, 0, 0.06);
  :hover,
  :focus {
    background-color: ${colors.secondaryLight};
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export function Link({ children, linkProps, className = "", ...rest }: Props) {
  return (
    <NextLink {...linkProps}>
      <a {...rest} className={cx(styles, className)}>
        {children}
      </a>
    </NextLink>
  );
}
