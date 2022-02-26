import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseSpringCarouselInitialActiveItemExample } from "templates/docs/Examples/useSpringCarousel/InitialActiveItem";

export default function Page() {
  return (
    <>
      <h1>Initial active item</h1>
      <p>
        If you want to, you can set a different initial active item (default is
        0):
      </p>
      <UseSpringCarouselInitialActiveItemExample />
      <PageNavigationFooter
        prevBtn={{
          label: "Built in classNames",
          href: "/docs/use-spring-carousel/built-in-class-names",
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
      title: "Initial active item example",
    },
  };
}
