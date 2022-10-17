import { CarouselItem } from "atoms/CarouselItem";
import { css } from "linaria";
import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { useState } from "react";
import {
  useSpringCarousel,
  UseListenToCustomEvent,
} from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";

export const code = `
  import { useState } from 'react'
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const [activeItem, setActiveItem] = useState(0)
    const {
      carouselFragment,
      useListenToCustomEvent,
      slideToPrevItem,
      slideToNextItem
    } = useSpringCarousel({
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

    useListenToCustomEvent((event) => {
      if (event.eventName === "onSlideStartChange") {
        setActiveItem(event.nextItem.index)
      } 
    });

    return (
      <div>
        <div>{activeItem + 1} / {mockedItems.length}</div>
        <div>
          {carouselFragment}
        </div>
      </div>
    );
  }
`;
export const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  function ComponentHeader({ useListenToCustomEvent }){
    const [activeItem, setActiveItem] = useState(0)

    useListenToCustomEvent((event) => {
      if (event.eventName === "onSlideStartChange") {
        setActiveItem(event.nextItem.index)
      } 
    });

    return <div>{activeItem + 1} / {mockedItems.length}</div>
  }

  export function Component() {
    const {
      carouselFragment,
      useListenToCustomEvent,
      slideToPrevItem,
      slideToNextItem
    } = useSpringCarousel({
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
        <ComponentHeader useListenToCustomEvent={useListenToCustomEvent} />
        <div>
          {carouselFragment}
        </div>
      </div>
    );
  }
`;

function Carousel() {
  const [activeItem, setActiveItem] = useState(0);
  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    withLoop: true,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.index);
    }
  });

  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            padding: 1.6rem;
          `}
        >
          {activeItem + 1} / {mockedItems.length}
        </div>
        <div
          className={css`
            flex: 1;
          `}
        >
          {carouselFragment}
        </div>
      </div>
    </Playground>
  );
}
function Carousel2Header({
  useListenToCustomEvent,
}: {
  useListenToCustomEvent: UseListenToCustomEvent<"use-spring">["useListenToCustomEvent"];
}) {
  const [activeItem, setActiveItem] = useState(0);

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.index);
    }
  });

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        padding: 1.6rem;
      `}
    >
      {activeItem + 1} / {mockedItems.length}
    </div>
  );
}
function Carousel2() {
  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
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
      <div
        className={css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `}
      >
        <Carousel2Header useListenToCustomEvent={useListenToCustomEvent} />
        <div
          className={css`
            flex: 1;
          `}
        >
          {carouselFragment}
        </div>
      </div>
    </Playground>
  );
}

function TipsExample1() {
  return (
    <PlaygroundButtonExample
      title="Tips example 1"
      code={code}
      component={<Carousel />}
    />
  );
}
function TipsExample2() {
  return (
    <PlaygroundButtonExample
      title="Tips example 2"
      code={code2}
      component={<Carousel2 />}
    />
  );
}

export { TipsExample1, TipsExample2 };
