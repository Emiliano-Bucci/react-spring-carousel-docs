import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { carouselFragment } = useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
      })),
    });

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;

function Carousel() {
  const { carouselFragment } = useSpringCarousel({
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return <Playground>{carouselFragment}</Playground>;
}
export function UseSpringCarouselStyledExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Styled example"
      component={<Carousel />}
    />
  );
}
