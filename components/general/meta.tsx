import Head from "next/head";

export default function Meta() {
  return (
    <>
      <Head>
        <title>Lynk Page</title>
        <meta
          name="description"
          content="A simple and clean 'link in my bio' page"
        />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
    </>
  );
}
