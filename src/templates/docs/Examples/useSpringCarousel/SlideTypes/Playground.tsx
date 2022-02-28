import { CarouselItem } from "atoms/CarouselItem";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { ReactNode } from "react";

type Props = {
  code: ReactNode;
};

function Playground({ code }: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
            {i.title}
          </CarouselItem>
        ),
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
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
      withLoop: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
            {i.title}
          </CarouselItem>
        ),
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
function Playground3({ code }: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
      slideAmount: 375,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
            {i.title}
          </CarouselItem>
        ),
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
function Playground4({ code }: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
      slideAmount: 375,
      freeScroll: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
            {i.title}
          </CarouselItem>
        ),
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
function Playground5({ code }: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
      slideAmount: 375,
      freeScroll: true,
      enableFreeScrollDrag: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
            {i.title}
          </CarouselItem>
        ),
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

export { Playground, Playground2, Playground3, Playground4, Playground5 };
