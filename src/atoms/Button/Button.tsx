import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { css, cx } from "linaria";
import { styles } from "../Link/Link";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "none" | "default-link";
  size?: "default" | "small" | "icon" | "none";
  isActive?: boolean;
};

const baseButtonStyles = css`
  border: none;
  font-family: inherit;
  -webkit-appearance: none;
  font-size: 1.6rem;
  cursor: pointer;
  background: none;
  transition: all 280ms ease;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  letter-spacing: inherit;
  outline: none;
  line-height: inherit;
`;

export function Button({
  children,
  type = "button",
  className = "",
  variant = "primary",
  size = "default",
  isActive = false,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      data-variant={variant}
      data-size={size}
      data-active={isActive}
      type={type}
      className={cx(baseButtonStyles, styles, className)}
    >
      {children}
    </button>
  );
}
