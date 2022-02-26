import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import {
  UseSpringCarouselThumbListExample,
  UseSpringCarouselThumbListExample2,
  UseSpringCarouselThumbListExample3,
} from "templates/docs/Examples/useSpringCarousel/ThumbList";
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
      <h2>Slide to item</h2>
      <p>
        I know, let me guess: if you click on a thumb nothing happen, right?
        Yeah, that goes against the common pattern, that <strong>should</strong>{" "}
        slide the carousel to the clicked item. But as you may already know, i
        don't like to force people to act in a particular way; instead, i give
        total freedom to the developer who will, if is the case, replicate that
        pattern. But how? Check the next example 😏
      </p>
      <UseSpringCarouselThumbListExample2 />
      <h2>prepareThumbsData</h2>
      <p>
        Let's say you want to display a beautiful high quality images carousel;
        maybe you'll need to show images in bucket of 10 and, eventually, if the
        user want to, load more and more images. If that's the case, well,{" "}
        <strong>React Spring Carousel</strong> makes it easy for you.{" "}
      </p>
      <p>
        The <strong>useSpringCarousel</strong> hook has a property,{" "}
        <strong>prepareThumbsData</strong>, a function that receive the list of
        thumbs as the only argument, and it <strong>must</strong> return a list
        of thumbs as well. If the quantity of items change, and the new items
        are less than the previous one (it means that we remove some items), the
        carousel will set as active the last item. Pretty cool uh? 😎
      </p>
      <UseSpringCarouselThumbListExample3 />
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
