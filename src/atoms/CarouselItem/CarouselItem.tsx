import { PropsWithChildren } from "react";
import { css, cx } from "linaria";

type Props = {
  color: string;
};

export function CarouselItem({ children, color }: PropsWithChildren<Props>) {
  return (
    <div
      className={cx(
        "item",
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
      }}
    >
      {children}
    </div>
  );
}
