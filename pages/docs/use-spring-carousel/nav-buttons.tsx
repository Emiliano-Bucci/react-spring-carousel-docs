import { UseSpringCarouselNavButtonsExample } from "templates/docs/Examples/useSpringCarousel/NavButtons";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>Nav buttons</h1>
      <p>
        So far so good. Now let's add some interactivity. You may wonder how to
        programmatically interact with the carousel: let me introduce you{" "}
        <strong>slideToPrevItem</strong> and <strong>slideToNextItem</strong>{" "}
        methods 🚀
      </p>
      <UseSpringCarouselNavButtonsExample />
      <p>
        As you can see, interactivity implementation is very easy, and also{" "}
        <strong>very readable</strong>. Furthermore, you have{" "}
        <strong>total</strong> control of the carousel interactivity.
      </p>

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
      title: "Styled version",
    },
  };
}
