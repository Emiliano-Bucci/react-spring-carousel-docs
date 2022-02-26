import { css, cx } from "linaria";
import { PropsWithChildren } from "react";
import { shadows } from "src/theme";

type Props = {
  color: string;
  onClick?(): void;
};

export function CarouselThumb({
  color,
  children,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={cx(
        onClick &&
          css`
            cursor: pointer;
          `,
        css`
          padding: 4rem;
          min-width: 240px;
          border-radius: 16px;
          box-shadow: ${shadows.small};
          color: #fff;
          text-align: center;
          font-size: 1.8rem;
        `
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
