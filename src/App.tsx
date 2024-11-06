import ButtonGradient from "./assets/svg/ButtonGradient";
import {
  Benefits,
  Collaboration,
  Footer,
  Header,
  Hero,
  Pricing,
  RoadMap,
  Services,
} from "./components";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
