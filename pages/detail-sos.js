import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import DetailSos from "../components/detail-sos/detail-sos";
import Layout from "../components/layout/layout";

const DetailSosPage = () => (
  <Layout>
    <Head>
      <title>Подробнее о кнопке помощи</title>
      <meta name="description" content="Подробнее о кнопке помощи" />
    </Head>
    <Breadcrumbs>
      <a>Подробнее</a>
    </Breadcrumbs>
    <DetailSos />
  </Layout>
);

export default DetailSosPage;
