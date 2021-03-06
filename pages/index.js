import Head from "next/head";
import MainSlider from "../components/main-slider/main-slider";
import Features from "../components/features/features";
import Advantages from "../components/advantages/advantages";
import ChoiceId from "../components/choice-id/choide-id";
import HowItWorks from "../components/how-it-works/how-it-works";
import Braslets from "../components/braslets/braslets";
import About from "../components/about/about";
import Layout from "../components/layout/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>QRepublik</title>
      <meta name="description" content="Браслеты QRepublic" />
    </Head>
    <h1 className="visually-hidden">
      QRepublik - технологии идентификации человека
    </h1>
    <MainSlider />
    <Features />
    <Advantages />
    <ChoiceId />
    <HowItWorks />
    <Braslets />
    <About />
  </Layout>
);

export default Home;
