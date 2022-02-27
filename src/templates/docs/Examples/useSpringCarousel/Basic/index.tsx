import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { Playground } from "./Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { carouselFragment } = useSpringCarousel({
      items: [
        {
          id: 'item-1',
          renderItem: (
            <div>Item 1</div>
          )
        },
        {
          id: 'item-2',
          renderItem: (
            <div>Item 2</div>
          )
        }
      ]
    })

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;

export function UseSpringCarouselBasicExample() {
  return (
    <Playground code={<SyntaxHiglight showLineNumbers={false} code={code} />} />
  );
}
