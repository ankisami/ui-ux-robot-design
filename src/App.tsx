import ButtonGradient from "./assets/svg/ButtonGradient";
import { Benefits, Collaboration, Header, Hero, Services } from "./components";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"></div>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <ButtonGradient />
      <Services />
    </>
  );
};

export default App;
