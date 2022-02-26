import { PropsWithChildren } from "react";
import { css, cx } from "linaria";

type Props = {
  color: string;
};

export function CarouselExampleItem({
  children,
  color,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cx(
        "item",
        css`
          && {
            color: #fff;
            height: 364px;
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
