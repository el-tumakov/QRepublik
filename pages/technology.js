import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Technology from "../components/technology/technology";
import Layout from "../components/layout/layout";

const TechnologyPage = () => (
  <Layout>
    <Head>
      <title>Технологии QRepublik</title>
      <meta name="description" content="Технологии QRepublik" />
    </Head>
    <Breadcrumbs>
      <p>Технологии</p>
    </Breadcrumbs>
    <Technology />
  </Layout>
);

export default TechnologyPage;
