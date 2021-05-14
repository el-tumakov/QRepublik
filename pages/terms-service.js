import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import TermsService from "../components/terms-service/terms-service";
import Layout from "../components/layout/layout";

const TermsServicePage = () => (
  <Layout>
    <Head>
      <title>Условия предоставления услуг</title>
      <meta name="description" content="Условия предоставления услуг" />
    </Head>
    <Breadcrumbs>
      <a>Условия предоставления услуг</a>
    </Breadcrumbs>
    <TermsService />
  </Layout>
);

export default TermsServicePage;
