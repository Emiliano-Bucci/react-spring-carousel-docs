import { CarouselItem } from "atoms/CarouselItem";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";

function Playground() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel<"fluid">({
      itemsPerSlide: "fluid",
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
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground2() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel<"fluid">({
      itemsPerSlide: "fluid",
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
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground3() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel<"fluid">({
      itemsPerSlide: "fluid",
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
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground4() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel<"fluid">({
      itemsPerSlide: "fluid",
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
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
function Playground5() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel<"fluid">({
      itemsPerSlide: "fluid",
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
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}

export { Playground, Playground2, Playground3, Playground4, Playground5 };
