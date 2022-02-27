import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { Playground } from "./Playground";

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
export function UseSpringCarouselStyledExample() {
  return (
    <Playground code={<SyntaxHiglight showLineNumbers={false} code={code} />} />
  );
}
