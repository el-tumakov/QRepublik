import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import PrivacyPolice from "../components/privacy-police/privacy-police";
import Layout from "../components/layout/layout";

const PrivacyPolicePage = () => (
  <Layout>
    <Head>
      <title>Политика конфеденциальности</title>
      <meta name="description" content="Политика конфеденциальности" />
    </Head>
    <Breadcrumbs>
      <a>Политика конфеденциальности</a>
    </Breadcrumbs>
    <PrivacyPolice />
  </Layout>
);

export default PrivacyPolicePage;
