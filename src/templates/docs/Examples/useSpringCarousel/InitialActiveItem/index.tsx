import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { CarouselItem } from "atoms/CarouselItem";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { useState } from "react";
import { css } from "linaria";
import { Button } from "atoms/Button";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      initialActiveItem: 2,
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
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
      </div>
    );
  }
`;

function Carousel() {
  const [initialActiveItem, setInitialActiveItem] = useState(2);
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      initialActiveItem,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      customControls={
        <div
          className={css`
            display: flex;
            justify-content: center;
            background-color: #fff;
            border-radius: 8px;
            z-index: 10;
            padding: 1.6rem;
            button {
              border-radius: 8px;
              margin: 0 0.8rem;
            }
          `}
        >
          <Button onClick={() => setInitialActiveItem(0)}>0</Button>
          <Button onClick={() => setInitialActiveItem(1)}>1</Button>
          <Button onClick={() => setInitialActiveItem(2)}>2</Button>
          <Button onClick={() => setInitialActiveItem(3)}>3</Button>
        </div>
      }
    >
      {carouselFragment}
    </Playground>
  );
}

export function UseSpringCarouselInitialActiveItemExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Initial active item example"
      component={<Carousel />}
    />
  );
}
