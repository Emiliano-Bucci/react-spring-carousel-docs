import { PropsWithChildren } from "react";
import { css } from "linaria";
import { colors } from "src/theme";

export function HighlightText({ children }: PropsWithChildren<{}>) {
  return (
    <div
      className={css`
        border-radius: 12px;
        padding: 1.6rem;
        border-left: 6px solid ${colors.primaryLight};
        background-color: ${colors.primaryLighter};
        box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
          0px 6px 15px rgba(0, 0, 0, 0.06);
      `}
    >
      {children}
    </div>
  );
}
