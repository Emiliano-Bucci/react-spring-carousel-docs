import { UseSpringCarouselNavButtonsExample } from "templates/docs/Examples/useSpringCarousel/NavButtons";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>Nav buttons</h1>
      <p>
        So far so good. Now let's add some interactivity. You may wonder how to
        programmatically interact with the carousel: let me introduce you the{" "}
        <strong>slideToPrevItem</strong> and <strong>slideToNextItem</strong>{" "}
        methods 🚀
      </p>
      <UseSpringCarouselNavButtonsExample />
      <p>
        As you can see, interactivity implementation is very easy, and also{" "}
        <strong>very readable</strong>. Furthermore, you have{" "}
        <strong>total</strong> control about <strong>who</strong> will trigger
        the carousel slide.
      </p>
      <PageNavigationFooter
        prevBtn={{
          label: "Styled",
          href: "/docs/use-spring-carousel/styled",
        }}
        nextBtn={{
          label: "Loop",
          href: "/docs/use-spring-carousel/loop",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel docs - Nav buttons example",
    },
  };
}
