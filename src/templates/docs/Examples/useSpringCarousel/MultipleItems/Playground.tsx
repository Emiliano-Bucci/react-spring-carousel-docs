import { Button } from "atoms/Button";
import { CarouselItem } from "atoms/CarouselItem";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { css } from "linaria";
import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { shadows } from "src/theme";
import { mockedItems } from "utils/mockedItems";

function Playground() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
  return (
    <PlaygroundWrapper
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground2() {
  const [startingPosition, setStartingPosition] = useState<
    "start" | "center" | "end"
  >("start");
  const { carouselFragment, slideToItem } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    initialStartingPosition: startingPosition,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return (
    <PlaygroundWrapper>
      <div
        className={css`
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background-color: #fff;
          border-radius: 16px;
          box-shadow: ${shadows.medium};
          z-index: 10;
          padding: 1.6rem;
          button {
            border-radius: 12px;
            margin: 0 0.8rem;
          }
        `}
      >
        <Button
          onClick={() => {
            setStartingPosition("start");
            slideToItem(0);
          }}
        >
          Start
        </Button>
        <Button
          onClick={() => {
            setStartingPosition("center");
            slideToItem(0);
          }}
        >
          Center
        </Button>
        <Button
          onClick={() => {
            setStartingPosition("end");
            slideToItem(0);
          }}
        >
          End
        </Button>
      </div>
      {carouselFragment}
    </PlaygroundWrapper>
  );
}

export { Playground, Playground2 };
