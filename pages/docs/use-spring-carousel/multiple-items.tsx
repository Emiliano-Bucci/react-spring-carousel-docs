import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import {
  UseSpringCarouselMultipleItemsExample,
  UseSpringCarouselMultipleItemsExample2,
  UseSpringCarouselMultipleItemsExample3,
  UseSpringCarouselMultipleItemsExample4,
} from "templates/docs/Examples/useSpringCarousel/MultipleItems";
import { HighlightText } from "atoms/HighlightText";

export default function Page() {
  return (
    <>
      <h1>Multiple items</h1>
      <p>
        Things can become hard to manage when you need to display more than one
        item, but not for <strong>React Spring Carousel</strong> 🦾
      </p>
      <UseSpringCarouselMultipleItemsExample />
      <h2>Starting position</h2>
      <p>
        If you want to, you can also change the starting position of the{" "}
        <strong>initial</strong> active item; the accepted values are:
      </p>
      <ul>
        <li>start - the default one</li>
        <li>center</li>
        <li>end</li>
      </ul>
      <HighlightText type="warning">
        <strong>Note:</strong> <strong>initialStartingPosition</strong> only
        work if <strong>withLoop: true</strong>;
      </HighlightText>
      <UseSpringCarouselMultipleItemsExample2 />
      <h2>Gutter</h2>
      <p>You can also easily add some space between the items:</p>
      <UseSpringCarouselMultipleItemsExample3 />
      <h2>Gutter on sides</h2>
      <p>
        You can also add gutter on the <strong>sides</strong> of the{" "}
        <strong>visible</strong> items:
      </p>
      <UseSpringCarouselMultipleItemsExample4 />
      <PageNavigationFooter
        prevBtn={{
          label: "Initial active item",
          href: "/docs/use-spring-carousel/initial-active-item",
        }}
        nextBtn={{
          label: "Slide types",
          href: "/docs/use-spring-carousel/slide-types",
        }}
      />
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      title: "Multiple items example",
    },
  };
}
