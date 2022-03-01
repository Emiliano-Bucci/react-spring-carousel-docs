import { PropsWithChildren } from "react";
import { css, cx } from "linaria";

type Props = {
  color: string;
  className?: string;
  width?: number;
};

export function CarouselItem({
  children,
  color,
  className,
  width,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cx(
        className,
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: #fff;
          font-size: 3.2rem;
          cursor: grab;
          :active {
            cursor: grabbing;
          }
        `
      )}
      style={{
        backgroundColor: color,
        width,
      }}
    >
      {children}
    </div>
  );
}
