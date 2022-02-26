import { Button } from "atoms/Button";
import { css } from "linaria";
import { ReactNode } from "react";
import { shadows } from "src/theme";

function CarouselNavigationButton({
  onClick,
  children,
}: {
  onClick(): void;
  children: ReactNode;
}) {
  return (
    <Button
      onClick={onClick}
      className={css`
        border-radius: 12px;
        z-index: 10;
      `}
    >
      {children}
    </Button>
  );
}

type Props = {
  children: ReactNode;
  slideToPrevItem?(): void;
  slideToNextItem?(): void;
};

export function PlaygroundWrapper({
  children,
  slideToPrevItem,
  slideToNextItem,
}: Props) {
  return (
    <div
      className={css`
        display: flex;
        border-radius: 16px;
        background-color: #fff;
        box-shadow: ${shadows.medium};
        padding: 3.2rem;
        position: relative;
        .use-spring-carousel-main-wrapper {
          overflow: hidden;
          box-shadow: ${shadows.medium};
        }
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 200px;
          cursor: grab;
          &:active {
            cursor: grabbing;
          }
        }
      `}
    >
      {children}
      {slideToPrevItem && slideToNextItem && (
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 48px;
            left: 48px;
            right: 48px;
            background-color: #fff;
            box-shadow: ${shadows.medium};
            z-index: 10;
            border-radius: 16px;
            padding: 1.6rem;
          `}
        >
          {slideToPrevItem && (
            <CarouselNavigationButton onClick={slideToPrevItem}>
              Prev item
            </CarouselNavigationButton>
          )}
          {slideToNextItem && (
            <CarouselNavigationButton onClick={slideToNextItem}>
              Next item
            </CarouselNavigationButton>
          )}
        </div>
      )}
    </div>
  );
}
