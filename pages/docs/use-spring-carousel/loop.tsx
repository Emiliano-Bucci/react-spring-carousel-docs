import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseSpringCarouselLoopExample } from "templates/docs/Examples/useSpringCarousel/Loop";
export default function Page() {
  return (
    <>
      <h1>Loop</h1>
      <p>
        Being able to loop through the items of your carousel is a very common
        funcionality; <strong>React Spring Carousel</strong> makes it even
        easier to use 😃
      </p>
      <UseSpringCarouselLoopExample />
      <PageNavigationFooter
        prevBtn={{
          label: "Nav buttons",
          href: "/docs/use-spring-carousel/nav-buttons",
        }}
        nextBtn={{
          label: "Thumb list",
          href: "/docs/use-spring-carousel/thumb-list",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Loop example",
    },
  };
}
