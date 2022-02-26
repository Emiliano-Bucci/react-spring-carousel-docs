import { useSpringCarousel } from "react-spring-carousel";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { mockedExampleItems } from "utils/mockedExampleItems";

export function Playground() {
  const { carouselFragment } = useSpringCarousel({
    items: mockedExampleItems,
  });

  return <PlaygroundWrapper>{carouselFragment}</PlaygroundWrapper>;
}
