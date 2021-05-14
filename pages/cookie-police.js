import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import CookiePolice from "../components/cookie-police/cookie-police";
import Layout from "../components/layout/layout";

const CookiePolicePage = () => (
  <Layout>
    <Head>
      <title>Политика файлов Cookie</title>
      <meta name="description" content="Политика файлов Cookie" />
    </Head>
    <Breadcrumbs>
      <a>Политика файлов Cookie</a>
    </Breadcrumbs>
    <CookiePolice />
  </Layout>
);

export default CookiePolicePage;
