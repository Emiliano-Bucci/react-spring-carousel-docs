import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseSpringCarouselStyledExample } from "templates/docs/Examples/useSpringCarousel/Styled";

export default function Page() {
  return (
    <>
      <h1>Styled version</h1>
      <p>Here's a styled version of the previous example:</p>
      <UseSpringCarouselStyledExample />
      <PageNavigationFooter
        prevBtn={{
          label: "Basic",
          href: "/docs/use-spring-carousel/basic",
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
      title: "Styled example",
    },
  };
}
