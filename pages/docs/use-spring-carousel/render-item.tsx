import { UseSpringCarouselRenderItemExample } from "templates/docs/Examples/useSpringCarousel/RenderItem";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
export default function Page() {
  return (
    <>
      <h1>Render item</h1>
      <p>
        If you want to, you could instead pass a function to render the items;
        this way you will have access to some useful methods that you could use
        to interact with the carousel inside your items.
      </p>
      <UseSpringCarouselRenderItemExample />
      <PageNavigationFooter
        prevBtn={{
          label: "Styled",
          href: "/docs/use-spring-carousel/styled",
        }}
        nextBtn={{
          label: "Nav buttons",
          href: "/docs/use-spring-carousel/nav-buttons",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel docs - Render item example",
    },
  };
}
