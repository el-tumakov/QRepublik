import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Layout from "../components/layout/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>Сотрудничество с Qrepublic</title>
      <meta name="description" content="Сотрудничество с QRepublic" />
    </Head>
    <h1 className="visually-hidden">Сотрудничество с Qrepublic</h1>
    <Breadcrumbs>
      <p>Сотрудничество</p>
    </Breadcrumbs>
  </Layout>
);

export default Home;
