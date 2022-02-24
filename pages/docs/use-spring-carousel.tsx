export default function Page() {
  return (
    <>
      <h2>useSpringCarousel</h2>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel",
    },
  };
}
