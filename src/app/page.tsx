import Achievements from "./components/Achievements";
import Cards from "./components/Cards";
import Client from "./components/Client";
import Customers from "./components/Customers";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearnMore from "./components/LearnMore";
import LearnMore2 from "./components/LearnMore2";
import Navbar from "./components/Navbar";
import ReadMore from "./components/ReadMore";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Client />
      <Cards />
      <LearnMore />
      <Achievements />
      <LearnMore2 />
      <Customers />
      <ReadMore />
      <Demo />
      <Footer />
    </main>
  );
}
