import { HTMLAttributes, PropsWithChildren } from "react";
import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";

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
          border-radius: 12px;
          padding: 2.4rem;
          border-left: 6px solid ${colors.secondaryLight};
          box-shadow: ${shadows.small};
          background-color: #fff;
          font-size: 1.6rem;
          strong {
            color: ${colors.secondaryDarker};
          }
          ${mediaQueries.until.mobile} {
            padding: 2rem;
          }
        `
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
