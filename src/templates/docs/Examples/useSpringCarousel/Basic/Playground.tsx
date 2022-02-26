import { useSpringCarousel } from "react-spring-carousel";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";

export function Playground() {
  const { carouselFragment } = useSpringCarousel({
    items: [
      {
        id: "item-1",
        renderItem: <div className="item">Item 1</div>,
      },
      {
        id: "item-2",
        renderItem: <div className="item">Item 2</div>,
      },
    ],
  });

  return <PlaygroundWrapper>{carouselFragment}</PlaygroundWrapper>;
}
