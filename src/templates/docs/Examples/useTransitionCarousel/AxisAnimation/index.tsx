import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useTransitionCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useTransitionCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem,
      slideToNextItem
    } = useTransitionCarousel({
      items: (
        <CarouselItem color={i.color}>
          {i.title}
        </CarouselItem>
      ),
      toPrevItemSpringProps: {
        initial: {
          transform: 'translateX(0%)',
          position: 'absolute',
        },
        from: {
          transform: 'translateX(-100%)',
          position: 'absolute',
        },
        enter: {
          transform: 'translateX(0%)',
          position: 'absolute',
        },
        leave: {
          transform: 'translateX(100%)',
          position: 'absolute',
        },
      },
      toNextItemSpringProps: {
        initial: {
          transform: 'translateX(0%)',
          position: 'absolute',
        },
        from: {
          transform: 'translateX(100%)',
          position: 'absolute',
        },
        enter: {
          transform: 'translateX(0%)',
          position: 'absolute',
        },
        leave: {
          transform: 'translateX(-100%)',
          position: 'absolute',
        },
      },
    });

    return (
      <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
      <button onClick={slideToNextItem}>Next item</button>
    );
  }
`;

function Carousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useTransitionCarousel({
      toPrevItemSpringProps: {
        initial: {
          transform: "translateX(0%)",
          position: "absolute",
        },
        from: {
          transform: "translateX(-100%)",
          position: "absolute",
        },
        enter: {
          transform: "translateX(0%)",
          position: "absolute",
        },
        leave: {
          transform: "translateX(100%)",
          position: "absolute",
        },
      },
      toNextItemSpringProps: {
        initial: {
          transform: "translateX(0%)",
          position: "absolute",
        },
        from: {
          transform: "translateX(100%)",
          position: "absolute",
        },
        enter: {
          transform: "translateX(0%)",
          position: "absolute",
        },
        leave: {
          transform: "translateX(-100%)",
          position: "absolute",
        },
      },
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

export function UseTransitionCarouselAxisAnimationExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Axis animation example"
      component={<Carousel />}
    />
  );
}
