import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import IndicationsForWearing from "../components/indications-for-wearing/indications-for-wearing";
import Layout from "../components/layout/layout";

const IndicationsForWearingPage = () => (
  <Layout>
    <Head>
      <title>Показания для ношения медицинского удостоверения</title>
      <meta
        name="description"
        content="Показания для ношения медицинского удостоверения"
      />
    </Head>
    <Breadcrumbs>
      <a>Показания для ношения Медицинского удостоверения</a>
    </Breadcrumbs>
    <IndicationsForWearing />
  </Layout>
);

export default IndicationsForWearingPage;
