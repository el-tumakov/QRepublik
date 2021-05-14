import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Cooperation from "../components/cooperation/cooperation";
import Layout from "../components/layout/layout";

const CooperationPage = () => (
  <Layout>
    <Head>
      <title>Сотрудничество с QRepublik</title>
      <meta name="description" content="Сотрудничество с QRepublik" />
    </Head>
    <Breadcrumbs>
      <a>Сотрудничество</a>
    </Breadcrumbs>
    <Cooperation />
  </Layout>
);

export default CooperationPage;
