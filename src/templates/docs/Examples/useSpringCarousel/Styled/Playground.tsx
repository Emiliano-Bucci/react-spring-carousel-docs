import { useSpringCarousel } from "react-spring-carousel";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export function Playground() {
  const { carouselFragment } = useSpringCarousel({
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });

  return <PlaygroundWrapper>{carouselFragment}</PlaygroundWrapper>;
}
