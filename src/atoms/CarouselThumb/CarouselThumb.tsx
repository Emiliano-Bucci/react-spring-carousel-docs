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
        padding: 1.6rem 2.4rem;
        border-radius: 8px;
        box-shadow: ${shadows.small};
        color: #fff;
      `}
    >
      {children}
    </div>
  );
}
