export default function Page() {
  return (
    <>
      <h2>useTransitionCarousel</h2>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringTransition",
    },
  };
}
