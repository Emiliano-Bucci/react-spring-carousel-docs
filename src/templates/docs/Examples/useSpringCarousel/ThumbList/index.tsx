import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { Playground } from "./Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      thumbsFragment,
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
        renderThumb: (
          <CarouselThumb color={i.color}>
            {i.title}
          </CarouselThumb>
        )
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;

export function UseSpringCarouselThumbListExample() {
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
