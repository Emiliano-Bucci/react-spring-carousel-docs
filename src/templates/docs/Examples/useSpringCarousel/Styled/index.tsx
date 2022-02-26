import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { Playground } from "./Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem,
      slideToNextItem 
    } = useSpringCarousel({
      items: [
        /** ...items */
      ]
    })

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;
export function UseSpringCarouselStyledExample() {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 4rem;
      `}
    >
      <SyntaxHiglight showLineNumbers={false} code={code} />
      <Playground />
    </div>
  );
}
