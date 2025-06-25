import Advantages from "./components/Advantages";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logos from "./components/Logos";
import NewApp from "./components/NewApp";
import Opportunities from "./components/Opportunities";
import Quote from "./components/Quote";
import Responsive from "./components/Responsive";
import Screenshot from "./components/Screenshot";
import WeDid from "./components/WeDid";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <NewApp />
        <Quote />
        <Screenshot />
        <Features />
        <Opportunities />
        <Advantages />
        <Responsive />
        <WeDid />
        <Logos />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
export default App;