import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { css, cx } from "linaria";
import { colors } from "src/theme";

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
  box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
    0px 6px 15px rgba(0, 0, 0, 0.06);
  :hover,
  :focus {
    background-color: ${colors.secondaryLight};
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 12px 30px rgba(0, 0, 0, 0.12);
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
