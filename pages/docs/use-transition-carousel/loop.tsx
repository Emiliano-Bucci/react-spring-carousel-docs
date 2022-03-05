import { UseTransitionCarouselLoopExample } from "templates/docs/Examples/useTransitionCarousel/Loop";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>Loop</h1>
      <p>
        Being able to loop through the items of your carousel is a very common
        functionality; <strong>React Spring Carousel</strong> makes it even
        easier to implement 😃
      </p>
      <UseTransitionCarouselLoopExample />
      <PageNavigationFooter
        prevBtn={{
          label: "Basic",
          href: "/docs/use-transition-carousel/loop",
        }}
        nextBtn={{
          label: "Swipe",
          href: "/docs/use-transition-carousel/swipe",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useTransitionCarousel docs - Loop example",
    },
  };
}
