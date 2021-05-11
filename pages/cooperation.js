import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Cooperation from "../components/cooperation/cooperation";
import Layout from "../components/layout/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>Сотрудничество с Qrepublic</title>
      <meta name="description" content="Сотрудничество с QRepublic" />
    </Head>
    <Breadcrumbs>
      <p>Сотрудничество</p>
    </Breadcrumbs>
    <Cooperation />
  </Layout>
);

export default Home;
