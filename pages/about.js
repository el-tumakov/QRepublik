import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import AboutFull from "../components/about-full/about-full";
import Layout from "../components/layout/layout";

const AboutPage = () => (
  <Layout>
    <Head>
      <title>Информация о QRepublik</title>
      <meta name="description" content="Информация о QRepublik" />
    </Head>
    <Breadcrumbs>
      <a>О нас</a>
    </Breadcrumbs>
    <AboutFull />
  </Layout>
);

export default AboutPage;
