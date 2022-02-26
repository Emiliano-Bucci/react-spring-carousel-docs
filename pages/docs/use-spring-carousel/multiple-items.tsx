import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseSpringCarouselMultipleItemsExample } from "templates/docs/Examples/useSpringCarousel/MultipleItems";

export default function Page() {
  return (
    <>
      <h1>Multiple items</h1>
      <p>
        Things can become hard to manage when you need to display more than one
        item, but not for <strong>React Spring Carousel</strong> 🦾
      </p>
      <UseSpringCarouselMultipleItemsExample />
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
