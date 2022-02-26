import { css } from "linaria";
import { PropsWithChildren } from "react";
import { shadows } from "src/theme";

type Props = {
  color: string;
};

export function CarouselThumb({ color, children }: PropsWithChildren<Props>) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={css`
        padding: 4rem;
        min-width: 240px;
        border-radius: 16px;
        box-shadow: ${shadows.small};
        color: #fff;
        text-align: center;
        font-size: 1.8rem;
      `}
    >
      {children}
    </div>
  );
}