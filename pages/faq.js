import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Faq from "../components/faq/faq";
import Layout from "../components/layout/layout";

const FaqPage = () => (
  <Layout>
    <Head>
      <title>Частые вопросы</title>
      <meta name="description" content="Частые вопросы" />
    </Head>
    <Breadcrumbs>
      <a>Частые вопросы</a>
    </Breadcrumbs>
    <Faq />
  </Layout>
);

export default FaqPage;
