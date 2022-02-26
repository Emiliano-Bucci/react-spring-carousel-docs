import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import {
  UseSpringCarouselMultipleItemsExample,
  UseSpringCarouselMultipleItemsExample2,
} from "templates/docs/Examples/useSpringCarousel/MultipleItems";

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
        If you want to, you can also change the starting position of the
        <strong>initial</strong> active item; the accepted values are:
      </p>
      <ul>
        <li>start - the default one</li>
        <li>center</li>
        <li>end</li>
      </ul>
      <UseSpringCarouselMultipleItemsExample2 />
      <PageNavigationFooter
        prevBtn={{
          label: "Initial active item",
          href: "/docs/use-spring-carousel/initial-active-item",
        }}
        nextBtn={{
          label: "Multiple items",
          href: "/docs/use-spring-carousel/multiple-items",
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
