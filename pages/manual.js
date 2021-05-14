import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Manual from "../components/manual/manual";
import Layout from "../components/layout/layout";

const ManualPage = () => (
  <Layout>
    <Head>
      <title>Инструкция</title>
      <meta name="description" content="Инструкция" />
    </Head>
    <Breadcrumbs>
      <p>Инструкция</p>
    </Breadcrumbs>
    <Manual />
  </Layout>
);

export default ManualPage;
