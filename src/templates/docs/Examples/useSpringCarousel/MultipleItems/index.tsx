import { CarouselItem } from "atoms/CarouselItem";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { css } from "linaria";
import { useState } from "react";
import { Button } from "atoms/Button";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 3 
      withLoop: true,
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
export const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      initialStartingPosition: 'start' | 'center' | 'end',
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
export const code3 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
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
export const code4 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      startEndGutter: 16,
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

function Carousel1() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel2() {
  const [startingPosition, setStartingPosition] = useState<
    "start" | "center" | "end"
  >("start");
  const { carouselFragment, slideToItem } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    initialStartingPosition: startingPosition,
    disableGestures: true,
    items: mockedItems.map((i, indx) => ({
      id: i.id,
      renderItem: (
        <CarouselItem
          color={i.color}
          className={
            indx > 0
              ? css`
                  filter: brightness(0.2) !important;
                `
              : undefined
          }
        >
          {i.title}
        </CarouselItem>
      ),
    })),
  });
  return (
    <Playground
      customControls={
        <div
          className={css`
            display: flex;
            justify-content: center;
            background-color: #fff;
            z-index: 10;
            padding: 1.6rem;
            button {
              border-radius: 8px;
              margin: 0 0.8rem;
            }
          `}
        >
          <Button
            onClick={() => {
              setStartingPosition("start");
              slideToItem!(0);
            }}
          >
            Start
          </Button>
          <Button
            onClick={() => {
              setStartingPosition("center");
              slideToItem!(0);
            }}
          >
            Center
          </Button>
          <Button
            onClick={() => {
              setStartingPosition("end");
              slideToItem!(0);
            }}
          >
            End
          </Button>
        </div>
      }
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel3() {
  const [gutter, setGutter] = useState(0);
  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    gutter,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });

  return (
    <Playground
      customControls={
        <div
          className={css`
            display: flex;
            justify-content: center;
            background-color: #fff;
            z-index: 10;
            padding: 1.6rem;
            button {
              border-radius: 8px;
              margin: 0 0.8rem;
            }
          `}
        >
          <Button variant="secondary" onClick={() => setGutter(0)}>
            0
          </Button>
          <Button variant="secondary" onClick={() => setGutter(8)}>
            8
          </Button>
          <Button variant="secondary" onClick={() => setGutter(16)}>
            16
          </Button>
          <Button variant="secondary" onClick={() => setGutter(24)}>
            24
          </Button>
          <Button variant="secondary" onClick={() => setGutter(32)}>
            32
          </Button>
          <Button variant="secondary" onClick={() => setGutter(40)}>
            40
          </Button>
        </div>
      }
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel4() {
  const [gutter, setGutter] = useState(0);
  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    startEndGutter: gutter,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return (
    <Playground
      customControls={
        <div
          className={css`
            display: flex;
            justify-content: center;

            background-color: #fff;
            z-index: 10;
            padding: 1.6rem;
            button {
              border-radius: 8px;
              margin: 0 0.8rem;
            }
          `}
        >
          <Button onClick={() => setGutter(0)}>0</Button>
          <Button onClick={() => setGutter(8)}>8</Button>
          <Button onClick={() => setGutter(16)}>16</Button>
          <Button onClick={() => setGutter(24)}>24</Button>
          <Button onClick={() => setGutter(32)}>32</Button>
          <Button onClick={() => setGutter(40)}>40</Button>
        </div>
      }
    >
      {carouselFragment}
    </Playground>
  );
}

function UseSpringCarouselMultipleItemsExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Multiple items example 1"
      component={<Carousel1 />}
    />
  );
}
function UseSpringCarouselMultipleItemsExample2() {
  return (
    <PlaygroundButtonExample
      code={code2}
      title="Multiple items example 2"
      component={<Carousel2 />}
    />
  );
}
function UseSpringCarouselMultipleItemsExample3() {
  return (
    <PlaygroundButtonExample
      code={code3}
      title="Multiple items example 3"
      component={<Carousel3 />}
    />
  );
}
function UseSpringCarouselMultipleItemsExample4() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Multiple items example 4"
      component={<Carousel4 />}
    />
  );
}

export {
  UseSpringCarouselMultipleItemsExample,
  UseSpringCarouselMultipleItemsExample2,
  UseSpringCarouselMultipleItemsExample3,
  UseSpringCarouselMultipleItemsExample4,
};
