import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Id from "../../components/id/id";
import Layout from "../../components/layout/layout";

const IdPage = () => (
  <Layout>
    <Head>
      <title>QRepublik ID</title>
      <meta name="description" content="QRepublik ID" />
    </Head>
    <Breadcrumbs>
      <Link href="/technology">
        <a>Технологии</a>
      </Link>
      <a>QRepublik ID</a>
    </Breadcrumbs>
    <Id />
  </Layout>
);

export default IdPage;
