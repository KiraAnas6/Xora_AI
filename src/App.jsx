import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testemonials from "./sections/Testemonials";
import Download from "./sections/Download";
import Footer from "./sections/Footer";
const App = function () {
  return <div className="overflow-hidden">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Faq />
    <Testemonials />
    <Download />
    <Footer />
  </div>
}

export default App;