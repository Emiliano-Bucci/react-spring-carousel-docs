import { ReactNode } from "react";
import { css } from "linaria";
import { colors } from "theme";

type Props = {
  children: ReactNode;
  label: string;
  id: string;
  isDisabled?: boolean;
};

export function BaseOption({ children, id, label, isDisabled = false }: Props) {
  return (
    <label
      data-disabled={isDisabled}
      id={id}
      className={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: opacity 240ms ease;
        &[data-disabled="true"] {
          opacity: 0.32;
          cursor: not-allowed;
        }
        &[data-disabled="true"] > * {
          pointer-events: none;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
        `}
      >
        <span
          className={css`
            background-color: ${colors.primary};
            color: #fff;
            padding: 0.4rem 0.8rem;
            border-radius: 8px;
            font-size: 1.48rem;
          `}
        >
          {" "}
          {label}
        </span>
        {children}
      </div>
    </label>
  );
}
