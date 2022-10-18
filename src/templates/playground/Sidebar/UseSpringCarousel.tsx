import { Button } from "atoms/Button";
import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";
import { colors, shadows } from "theme";
import { mockedItems } from "../../../../pages/playground";

type Props = {
  withLoop: boolean;
  itemsPerSlide: number;
};

export function UseSpringCarousel({ itemsPerSlide, withLoop }: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: mockedItems,
      itemsPerSlide,
      withLoop,
    });
  return (
    <div
      className={css`
        display: flex;
        flex: 1;
        overflow: hidden;
        position: relative;
      `}
    >
      {carouselFragment}
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          padding: 1.6rem;
          background-color: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          box-shadow: ${shadows.large};
        `}
      >
        <Button onClick={slideToPrevItem}>Prev item</Button>
        <Button onClick={slideToNextItem}>Next item</Button>
      </div>
    </div>
  );
}
