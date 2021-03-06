import { HighlightText } from "atoms/HighlightText";
import {
  UseSpringCarouselSlideTypesExample,
  UseSpringCarouselSlideTypesExample2,
  UseSpringCarouselSlideTypesExample3,
  UseSpringCarouselSlideTypesExample4,
  UseSpringCarouselSlideTypesExample5,
} from "templates/docs/Examples/useSpringCarousel/SlideTypes";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1 id="slide-types">Slide types</h1>
      <p>
        So far we've been scratching the surface of the possibilities offered by{" "}
        <strong>React Spring Carousel</strong>, covering all the basics. The
        library, though, tries to go beyond that, and that's when things start
        to become interesting. By default, the{" "}
        <strong>useSpringCarousel</strong> hook uses a <strong>fixed</strong>{" "}
        sliding type. This means that the hook will calculate the number of
        items the user wants to display in the <strong>viewport</strong> of the
        carousel (<strong>itemsPerSlide</strong> which defaults to 1), and N
        items will fit in the entire viewport.
      </p>
      <h2 id="fluidity">Fluidity</h2>
      <p>
        By specifying <strong>slideType: fluid</strong>, the philosophy of the
        carousel completely changes and the concept of{" "}
        <strong>current active item</strong> disappears. This means that the{" "}
        <strong>scrolling type</strong> will be fluid and the items will be
        disposed occupying their intrinsic width space.
      </p>
      <UseSpringCarouselSlideTypesExample />
      <p>
        You may find that things start to beautifully work together; you can,
        for example, combine <strong>slideType: fluid</strong> and{" "}
        <strong>withLoop: true</strong> properties! 👉
      </p>
      <UseSpringCarouselSlideTypesExample2 />
      <h2 id="custom-slide-value">Custom slide value</h2>
      <p>
        By default, the library will pick the width of the first item and will
        use that value to decide the quantity of px the carousel will slide.
        Eventually, you can specify a custom value 😌
      </p>
      <HighlightText type="warning">
        <strong>Note:</strong> Keep in mind that the custom value must be equal
        or greater than the items width.
      </HighlightText>
      <UseSpringCarouselSlideTypesExample3 />
      <h2 id="free-scroll">Free scroll</h2>
      <p>
        You can also enable the <strong>free scroll</strong> modality, which
        basically enables the default browser scroll (it enables the mouse -
        trackpad scroll behavior), powered by <strong>react-spring</strong>{" "}
        animations!
      </p>
      <UseSpringCarouselSlideTypesExample4 />
      <p>
        and, if you want to, you can also combine default browser scroll + react
        spring carousel programmatically animations and dragging sliding! 🔥
      </p>
      <UseSpringCarouselSlideTypesExample5 />
      <HighlightText>
        You may find, though, that <strong>some</strong> properties cannot be
        combined together; you'll find more about it later 😇
      </HighlightText>
      <PageNavigationFooter
        prevBtn={{
          label: "Multiple items",
          href: "/docs/use-spring-carousel/multiple-items",
        }}
        nextBtn={{
          label: "Drag",
          href: "/docs/use-spring-carousel/drag",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel docs - Slide types examples",
      onThisPageItems: [
        { id: "slide-types", label: "Slide types" },
        { id: "fluidity", label: "Fluidity" },
        { id: "custom-slide-value", label: "Custom slide value" },
        { id: "free-scroll", label: "Free scroll" },
      ],
    },
  };
}
