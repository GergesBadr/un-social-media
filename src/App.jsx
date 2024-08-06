import { MotionConfig } from "framer-motion";
import Header from "./components/layout/Header";
import Landing from "./components/landing/Landing";
import StatisticsList from "./components/statistics/StatisticsList";
import ScrollAnimationContainer from "./components/scroll-effect/ScrollAnimationContainer";
import ProblemsList from "./components/problems/ProblemsList";
import Footer from "./components/layout/Footer";
import Platforms from "./components/platforms/Platforms";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Solutions from "./components/solutions/Solutions";
import Resources from "./components/resources/Resources";
import Outro from "./components/outro/Outro";
import Quotes from "./components/quotes/Quotes";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />

      <main>
        <Landing />
        <StatisticsList />
        <ScrollAnimationContainer />
        <ProblemsList />
        <Platforms />
        <HowItWorks />
        <Quotes />
        <Solutions />
        <Resources />
        <Outro />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
