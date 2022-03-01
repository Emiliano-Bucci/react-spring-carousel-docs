import { CarouselItem } from "atoms/CarouselItem";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { ReactNode, useState } from "react";
import { Button } from "atoms/Button";
import { css } from "linaria";
import { shadows } from "src/theme";

type Props = {
  code: ReactNode;
};

export function Playground({ code }: Props) {
  const [initialActiveItem, setInitialActiveItem] = useState(2);
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      initialActiveItem,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
  return (
    <PlaygroundWrapper
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      code={code}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          position: absolute;
          top: 24px;
          left: 24px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: ${shadows.medium};
          z-index: 10;
          padding: 1.6rem;
          button {
            border-radius: 8px;
            margin: 0 0.8rem;
          }
        `}
      >
        <Button onClick={() => setInitialActiveItem(0)}>0</Button>
        <Button onClick={() => setInitialActiveItem(1)}>1</Button>
        <Button onClick={() => setInitialActiveItem(2)}>2</Button>
        <Button onClick={() => setInitialActiveItem(3)}>3</Button>
      </div>
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
