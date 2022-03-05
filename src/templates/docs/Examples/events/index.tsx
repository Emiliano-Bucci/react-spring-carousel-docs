import { useSpringCarousel } from "react-spring-carousel";
import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useTransitionCarousel } from 'react-spring-carousel'

  export function Component() {
    const {
      carouselFragment,
      useListenToCustomEvent
    } = useSpringCarousel({
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
      // Triggered during drag gestures
      if (event.eventName === "onDrag") {
        // Do something...
      } 
      // Triggered when the slide is about to slide
      else if (event.eventName === "onSlideStartChange") {
        // Do something...
      } 
      // Triggered when the slide animation is completed
      else if (event.eventName === "onSlideChange") {
        // Do something...
      } 
      // Triggered on fullscreen change
      else if (event.eventName === "onFullscreenChange") {
      }
    });

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;

function Carousel() {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });

  useListenToCustomEvent((event) => {
    // Triggered during drag gestures
    if (event.eventName === "onDrag") {
      // Triggered when the slide is about to slide
    } else if (event.eventName === "onSlideStartChange") {
      alert("onSlideStartChange");
      // Triggered when the slide animation is completed
    } else if (event.eventName === "onSlideChange") {
      alert("onSlideChange");
      // Triggered on fullscreen change
    } else if (event.eventName === "onFullscreenChange") {
    }
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

export function EventsExample() {
  return (
    <PlaygroundButtonExample
      title="Events example"
      code={code}
      component={<Carousel />}
    />
  );
}
