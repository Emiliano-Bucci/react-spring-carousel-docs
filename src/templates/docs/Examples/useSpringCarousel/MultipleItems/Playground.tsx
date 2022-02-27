import { Button } from "atoms/Button";
import { CarouselItem } from "atoms/CarouselItem";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { css } from "linaria";
import { useState, ReactNode } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { shadows } from "src/theme";
import { mockedItems } from "utils/mockedItems";

type Props = {
  code: ReactNode;
};

function Playground({ code }: Props) {
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
      code={code}
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground2({ code }: Props) {
  const [startingPosition, setStartingPosition] = useState<
    "start" | "center" | "end"
  >("start");
  const { carouselFragment, slideToItem } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    initialStartingPosition: startingPosition,
    items: mockedItems.map((i, indx) => ({
      id: i.id,
      renderItem: (
        <CarouselItem
          color={i.color}
          className={
            indx > 0
              ? css`
                  filter: brightness(0.2) !important;
                `
              : undefined
          }
        >
          {i.title}
        </CarouselItem>
      ),
    })),
  });
  return (
    <PlaygroundWrapper code={code}>
      <div
        className={css`
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
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
function Playground3({ code }: Props) {
  const [gutter, setGutter] = useState(0);
  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    gutter,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return (
    <PlaygroundWrapper code={code}>
      <div
        className={css`
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
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
        <Button onClick={() => setGutter(0)}>0</Button>
        <Button onClick={() => setGutter(8)}>8</Button>
        <Button onClick={() => setGutter(16)}>16</Button>
        <Button onClick={() => setGutter(24)}>24</Button>
        <Button onClick={() => setGutter(32)}>32</Button>
        <Button onClick={() => setGutter(40)}>40</Button>
      </div>
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground4({ code }: Props) {
  const [gutter, setGutter] = useState(0);
  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    startEndGutter: gutter,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return (
    <PlaygroundWrapper code={code}>
      <div
        className={css`
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
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
        <Button onClick={() => setGutter(0)}>0</Button>
        <Button onClick={() => setGutter(8)}>8</Button>
        <Button onClick={() => setGutter(16)}>16</Button>
        <Button onClick={() => setGutter(24)}>24</Button>
        <Button onClick={() => setGutter(32)}>32</Button>
        <Button onClick={() => setGutter(40)}>40</Button>
      </div>
      {carouselFragment}
    </PlaygroundWrapper>
  );
}

export { Playground, Playground2, Playground3, Playground4 };
