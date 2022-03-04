import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseTransitionCarouselSwipeExample } from "templates/docs/Examples/useTransitionCarousel/Swipe";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { carouselFragment } = useTransitionCarousel({
      disableGestures: true,
    });

    // render stuff...
  }
`;
export default function Page() {
  return (
    <>
      <h1>Swipe</h1>
      <p>
        By default, the <strong>useTransitionCarousel</strong> allows you to
        swipe to trigger the carousel navigation.
      </p>
      <UseTransitionCarouselSwipeExample />
      <p>
        You can, eventually, disable it by passing{" "}
        <strong>disableGestures:true</strong>
      </p>
      <SyntaxHiglight code={code} />
      <PageNavigationFooter
        prevBtn={{
          label: "Loop",
          href: "/docs/use-transition-carousel/loop",
        }}
        nextBtn={{
          label: "Axis animation",
          href: "/docs/use-transition-carousel/axis-animation",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useTransitionCarousel - Loop example",
    },
  };
}
