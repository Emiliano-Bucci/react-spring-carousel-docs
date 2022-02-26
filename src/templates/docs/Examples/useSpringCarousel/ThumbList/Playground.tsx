import { CarouselItem } from "atoms/CarouselItem";
import { CarouselThumb } from "atoms/CarouselThumb";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";

export function Playground() {
  const { carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      withThumbs: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
        renderThumb: <CarouselThumb color={i.color}>{i.title}</CarouselThumb>,
      })),
    });
  return (
    <PlaygroundWrapper
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      thumbsFragment={thumbsFragment}
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
