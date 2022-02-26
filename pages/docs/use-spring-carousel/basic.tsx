export default function Page() {
  return (
    <>
      <h2>Basic</h2>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Basic",
    },
  };
}
