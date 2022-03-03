import { HTMLAttributes, PropsWithChildren } from "react";
import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";

type Types = "default" | "warning";

export function HighlightText({
  children,
  className,
  type = "default",
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & { type?: Types }) {
  return (
    <div
      className={cx(
        className,
        type === "warning" &&
          css`
            border-color: ${colors.warning} !important;
          `,
        css`
          border-radius: 8px;
          padding: 2.4rem;
          border-left: 6px solid ${colors.secondaryLight};
          box-shadow: ${shadows.small};
          background-color: #fff;
          font-size: 1.6rem;
          strong {
            color: ${colors.secondary};
          }
        `
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
