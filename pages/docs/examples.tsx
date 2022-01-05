export default function Page() {
  return (
    <>
      <h2>Examples</h2>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Examples",
    },
  };
}
