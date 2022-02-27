import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { Playground } from "./Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      withLoop: true, // -> make me loop!
      items: (
        <CarouselItem color={i.color}>
          {i.title}
        </CarouselItem>
      ),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
      </div>
    );
  }
`;

export function UseSpringCarouselLoopExample() {
  return (
    <Playground code={<SyntaxHiglight showLineNumbers={false} code={code} />} />
  );
}
