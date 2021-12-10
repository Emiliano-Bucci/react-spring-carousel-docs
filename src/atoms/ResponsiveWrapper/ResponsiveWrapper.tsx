import { PropsWithChildren } from "react";
import { css, cx } from "linaria";

export function ResponsiveWrapper({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cx(
        className,
        css`
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: 100%;
          flex: 1;
          padding: 0 2.4rem;
        `
      )}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          flex: 1;
          max-width: 1326px;
          padding: 4rem 0rem;
        `}
      >
        {children}
      </div>
    </div>
  );
}
