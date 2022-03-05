import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseTransitionCarouselAxisAnimationExample } from "templates/docs/Examples/useTransitionCarousel/AxisAnimation";

const code = `
  useTranstion(item, {
    from: {
      transform: 'translateX(-100%)';
    },
    enter: {
      transform: 'translateX(-0%)';
    },
    leave: {
      transform: 'translateX(100%)';
    }
  })
`;
const code2 = `
  const carousel = useTransitionCarousel({
    springAnimationProps: {
      initial: {
        transform: 'translateX(0%)',
        position: 'absolute',
      },
      from: {
        transform: 'translateX(100%)',
        position: 'absolute',
      },
      enter: {
        transform: 'translateX(0%)',
        position: 'absolute',
      },
      leave: {
        transform: 'translateX(-100%)',
        position: 'absolute',
      },
    },
  })
`;

export default function Page() {
  return (
    <>
      <h1>Axis animation</h1>
      <p>
        If you've already look into the{" "}
        <strong>react-spring useTransition</strong> docs, probably you've
        already found that, if you want to create a slideshow with translate
        animations, you need to pass something like this:
      </p>
      <SyntaxHiglight code={code} showLineNumbers={false} />
      <p>which translated into the library config, it means this:</p>
      <SyntaxHiglight code={code2} showLineNumbers={false} />
      <p>
        This could be just fine if you need a slideshow that goes only in one
        direction, but how to do it if you want to slide on both directions?
        Well, <strong>Reaect Spring Carousel</strong> is here to help you!
      </p>
      <UseTransitionCarouselAxisAnimationExample />
      <PageNavigationFooter
        prevBtn={{
          label: "Loop",
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
      title: "useTransitionCarousel docs - Axis animation example",
    },
  };
}
