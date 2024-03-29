import { HighlightText } from "atoms/HighlightText";
import { Link } from "atoms/Link";
import { TipsExample1, TipsExample2 } from "templates/docs/Examples/tips";

export default function Page() {
  return (
    <>
      <h1>Tips</h1>
      <p>
        While the library is easy to use, it's also easy to use it in the{" "}
        <strong>react</strong> way which can lead us to not use all the
        potential and the power of the library.
      </p>
      <HighlightText>
        The following tips are a <strong>strong</strong> reccomendation on how
        to structure your Carousels but of course, if you prefer to, you can
        ignore them.
      </HighlightText>
      <p>
        The first and most important thing when building a Carousel is the
        concept of <strong>state colocation</strong>. If you're not familiar
        with the concept, i suggest you to read{" "}
        <Link
          variant="default-link"
          size="none"
          target="_blank"
          href="https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster"
        >
          this
        </Link>{" "}
        great article. In short,{" "}
        <strong>
          always colocate the state close to where it's relevant and, in case of
          our library, far away from the hook call
        </strong>
        . This affermation, though, it's not totally correct. The important
        thing to keep in mind is,{" "}
        <strong>do not update state while the carousel is animating</strong>.
      </p>
      <p>
        I understand that this is very limitating, because many times our
        carousel needs to interact with other parts of our application and we
        need to update the UI while the carousel changes active slide, for
        example. So how to do it in the correct way? Well, here's where the
        concept of <strong>colocating state</strong> comes in our help.
      </p>
      <p>
        Let's start with a very basic example; here we have a our carousel and
        we need to display the count of the active item.
      </p>
      <TipsExample1 />
      <p>
        This is how many of us would do it, in a simple but common{" "}
        <strong>react</strong> way. On paper, and on modern devices, this is
        just fine. But imagine a real situation where heavy stuff is updated
        continuously and you're making calculations at runtime (specially on
        mobile), well this can lead pretty quick to a really not usable app.
      </p>
      <p>
        So how can we rewrite this by colocating the state? Pretty simple i'll
        say:
      </p>
      <TipsExample2 />
      <p>
        By doing this we've colocated the state <strong>only</strong> where it
        was needed; of course this is a pattern that we should always follow,
        regardless this library, but in this case it's very important, because
        by not making any rerender we ensure to always have smooth animations
        without any kind of interferences.
      </p>
      <HighlightText type="warning">
        So to sum up, the important thing to keep in mind is:{" "}
        <strong>don't update state (avoid rerenders) while animating.</strong>
      </HighlightText>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      title: "React Spring Carousel docs - Tips",
    },
  };
}
