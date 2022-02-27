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
        "item",
        className,
        css`
          &&&& {
            color: #fff;
            height: 440px;
            font-size: 3.2rem;
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
