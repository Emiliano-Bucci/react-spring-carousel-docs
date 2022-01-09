import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

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
  border-radius: 8px;
  letter-spacing: inherit;
  outline: none;
  line-height: inherit;
  box-shadow: ${shadows.small};
  :hover,
  :focus {
    background-color: ${colors.secondaryLight};
    box-shadow: ${shadows.medium};
  }
`;

export function Button({
  children,
  type = "button",
  className = "",
  ...rest
}: Props) {
  return (
    <button {...rest} className={cx(styles, className)} type={type}>
      {children}
    </button>
  );
}
