import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Key from "../../components/key/key";
import Layout from "../../components/layout/layout";

const KeyPage = () => (
  <Layout>
    <Head>
      <title>QRepublik Key</title>
      <meta name="description" content="QRepublik Key" />
    </Head>
    <Breadcrumbs>
      <Link href="/technology">
        <a>Технологии</a>
      </Link>
      <a>QRepublik Key</a>
    </Breadcrumbs>
    <Key />
  </Layout>
);

export default KeyPage;
