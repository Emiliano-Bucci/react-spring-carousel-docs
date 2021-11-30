import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { css } from "linaria";
import { colors } from "src/theme";
type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const styles = css`
  border: none;
  font-family: inherit;
  -webkit-appearance: none;
  font-size: inherit;
  cursor: pointer;
  background: none;
  background-color: ${colors.secondary};
  color: #fff;
  transition: all 280ms ease;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  letter-spacing: inherit;
  box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
    0px 6px 15px rgba(0, 0, 0, 0.06);
  :hover {
    background-color: ${colors.secondaryLight};
    box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
      0px 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export function Button({ children, type = "button", ...rest }: Props) {
  return (
    <button className={styles} type={type} {...rest}>
      {children}
    </button>
  );
}
