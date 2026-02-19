import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import StepPager from "./components/StepPager";
import { SITE_TITLE } from "./data/passportSteps";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = SITE_TITLE;

    // Simulate splash screen delay
    const timer = setTimeout(() => {
      setReady(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!ready && <Splash />}
      {ready && <StepPager />}
    </>
  );
}

export default App;
