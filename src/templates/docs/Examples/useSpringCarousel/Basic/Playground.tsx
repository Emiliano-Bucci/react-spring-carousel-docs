import { useSpringCarousel } from "react-spring-carousel";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { ReactNode } from "react";

type Props = {
  code: ReactNode;
};

export function Playground({ code }: Props) {
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

  return <PlaygroundWrapper code={code}>{carouselFragment}</PlaygroundWrapper>;
}
