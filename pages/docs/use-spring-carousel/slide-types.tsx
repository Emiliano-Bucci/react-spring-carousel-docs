import { HighlightText } from "atoms/HighlightText";
import {
  UseSpringCarouselSlideTypesExample,
  UseSpringCarouselSlideTypesExample2,
  UseSpringCarouselSlideTypesExample3,
} from "templates/docs/Examples/useSpringCarousel/SlideTypes";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>Slide types</h1>
      <p>
        So far we've been scratching the surface of the possibilities offered by{" "}
        <strong>React Spring Carousel</strong>, covering all the basics. The
        library, though, tries to go beyond that.
      </p>
      <h2>Fluidity</h2>
      <p>
        Now things starts to become interesting; by specifying{" "}
        <strong>itemsPerSlide: fluid</strong>, the philosofy of the carousel
        completely change and the concept of{" "}
        <strong>current active item</strong> totally dissappear. This means that
        the <strong>scrolling type</strong> will be fluid (aka, the items won't
        fit anymore in the entire carousel viewport, but will normally occupy
        all the available space, depending on the single item width).
      </p>
      <UseSpringCarouselSlideTypesExample />
      <p>
        You may find that things start to beautifully work together; you can,
        for example, combine <strong>itemsPerSlide: fluid</strong> and{" "}
        <strong>withLoop: true</strong> properties! 👉
      </p>
      <UseSpringCarouselSlideTypesExample2 />
      <h2>Custom slide value</h2>
      <p>
        By default, the library will pick the width of the first item and will
        use that value to decide the quantity of px the carousel will slide.
        Eventually, you can specify a custom value 😌
      </p>
      <HighlightText>
        <strong>Note:</strong> Keep in mind that the custom value must be equal
        or greater than the items width.
      </HighlightText>
      <UseSpringCarouselSlideTypesExample3 />
      <PageNavigationFooter
        prevBtn={{
          label: "Multiple items",
          href: "/docs/use-spring-carousel/multiple-items",
        }}
        nextBtn={{
          label: "Initial active item",
          href: "/docs/use-spring-carousel/initial-active-item",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Slide types examples",
    },
  };
}
