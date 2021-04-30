import Head from "next/head";
import Layout from "../components/layout/layout";
import MainSlider from "../components/main-slider/main-slider";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>QRepublik</title>
        <meta name="description" content="Браслеты QRepublic" />
      </Head>
      <h1 className="visually-hidden">
        QRepublik - технологии идентификации человека
      </h1>
      <MainSlider />
    </Layout>
  );
}
