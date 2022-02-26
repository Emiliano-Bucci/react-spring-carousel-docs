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
          border-radius: 16px;
          padding: 2.4rem;
          border-left: 6px solid ${colors.secondaryLight};
          box-shadow: ${shadows.small};
          background-color: #fff;
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
