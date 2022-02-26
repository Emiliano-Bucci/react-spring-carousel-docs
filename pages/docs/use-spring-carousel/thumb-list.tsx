import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseSpringCarouselThumbListExample } from "templates/docs/Examples/useSpringCarousel/ThumbList";

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
      title: "Thumb list example",
    },
  };
}
