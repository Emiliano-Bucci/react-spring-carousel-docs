import { ReactNode } from "react";
import { css } from "linaria";
import { colors } from "theme";

type Props = {
  children: ReactNode;
  label: string;
  id: string;
};

export function BaseOption({ children, id, label }: Props) {
  return (
    <label
      id={id}
      className={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <span
        className={css`
          background-color: ${colors.secondaryDarker};
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 1.48rem;
        `}
      >
        {" "}
        {label}
      </span>
      {children}
    </label>
  );
}
