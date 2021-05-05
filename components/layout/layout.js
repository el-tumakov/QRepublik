import Head from "next/head";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = (props) => {
  const {children} = props;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>QRepublik</title>
        <link
          rel="preload"
          href="./fonts/roboto-regular.woff2"
          as="font"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="./fonts/roboto-medium.woff2"
          as="font"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="./fonts/roboto-bold.woff2"
          as="font"
          crossOrigin="true"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
