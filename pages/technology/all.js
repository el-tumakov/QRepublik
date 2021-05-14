import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import All from "../../components/all/all";
import Layout from "../../components/layout/layout";

const AllPage = () => (
  <Layout>
    <Head>
      <title>QRepublik All</title>
      <meta name="description" content="QRepublik All" />
    </Head>
    <Breadcrumbs>
      <Link href="/technology">
        <a>Технологии</a>
      </Link>
      <a>QRepublik All</a>
    </Breadcrumbs>
    <All />
  </Layout>
);

export default AllPage;
