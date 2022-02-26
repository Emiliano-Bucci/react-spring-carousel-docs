import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseSpringCarouselThumbListExample } from "templates/docs/Examples/useSpringCarousel/ThumbList";
import { HighlightText } from "atoms/HighlightText";

export default function Page() {
  return (
    <>
      <h1>Thumb list</h1>
      <p>
        Let's go now a bit deeper in the carousel world and let's add some
        thumbnails
      </p>
      <UseSpringCarouselThumbListExample />
      <p>Again, things are easier:</p>
      <ul>
        <li>
          Add <strong>withThumbs:true</strong>
        </li>
        <li>
          Add the property <strong>renderThumb</strong> like you do with{" "}
          <strong>renderItem</strong>
        </li>
        <li>
          Destructure the thumbs fragment - <strong>thumbsFragment</strong> -
          and use it wherever you want!
        </li>
      </ul>
      <p>
        As you can see, the thumbs wrapper will automatically scroll; the logic
        applied is that it will try to put the <strong>active item</strong> in
        the center of the container. Of course, if you want to, you can manually
        scroll since the scroll behavior is the default browser one.
      </p>
      <HighlightText>
        <strong>Note:</strong> Since the library don't use any css library (the
        only styles that the library applies are inlined), if you want to hide
        the thumbs scrollBar, you'll have to do it by yourselve. To archive
        that, check the next example.
      </HighlightText>
      <PageNavigationFooter
        prevBtn={{
          label: "Nav buttons",
          href: "/docs/use-spring-carousel/nav-buttons",
        }}
        nextBtn={{
          label: "Built in classNames",
          href: "/docs/use-spring-carousel/built-in-class-names",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Thumb list example",
    },
  };
}
