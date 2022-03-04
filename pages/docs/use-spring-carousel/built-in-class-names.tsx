// import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
export default function Page() {
  return (
    <>
      <h1>Built in classNames</h1>
      <p>
        Even if the library tries to do it's best to be defined as a{" "}
        <strong>headless UI library</strong>, there might be some cases where we{" "}
        <strong>need</strong> to apply some custom styles to the{" "}
        <strong>hidden</strong> part of the Carousel. Here's the list of the
        classNames that the library apply to the html elements the library needs
        to render to make the Carousel work in the proper way:
      </p>
      <ul>
        <li>use-spring-carousel-main-wrapper</li>
        <li>use-spring-carousel-track-wrapper</li>
        <li>use-spring-carousel-item</li>
        <li>use-spring-carousel-thumbs-wrapper</li>
        <li>thumb-item</li>
      </ul>
      <p>
        You can use the browser inspector to better check where those classNames
        are applied.
      </p>
      {/* <PageNavigationFooter
        prevBtn={{
          label: "Thumb list",
          href: "/docs/use-spring-carousel/thumb-list",
        }}
        nextBtn={{
          label: "Initial active item",
          href: "/docs/use-spring-carousel/initial-active-item",
        }}
      /> */}
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel - Built in classNames example",
    },
  };
}
