import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Press from "../components/press/press";
import Layout from "../components/layout/layout";

const PressPage = () => (
  <Layout>
    <Head>
      <title>Пресса о QRepublik</title>
      <meta name="description" content="Пресса о QRepublik" />
    </Head>
    <Breadcrumbs>
      <a>О нас пишут</a>
    </Breadcrumbs>
    <Press />
  </Layout>
);

export default PressPage;
