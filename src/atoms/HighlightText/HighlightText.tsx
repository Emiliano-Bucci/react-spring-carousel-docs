import { HTMLAttributes, PropsWithChildren } from "react";
import { css, cx } from "linaria";
import { colors, shadows } from "src/theme";

export function HighlightText({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cx(
        className,
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
