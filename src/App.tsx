import ContactSections03 from "./components/blocks/contact/contact-sections-03";
import Footer from "./components/footer";
import { Hero1 } from "./components/hero1";
import SplashCursor from "./components/SplashCursor";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Navbar06 } from "./components/ui/shadcn-io/navbar-06";
import Certificates from "./components/certificates";
import About from "./components/about";
import TechStack from "./components/tech-stack";
import PersonalProject from "./components/personal-project";
import { useEffect, useState } from "react";
import SplashScreen from "./components/splash-screen";
import LazySection from "./components/lazy-section";

const App = () => {
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoadingScreen) {
    return <SplashScreen />;
  }

  return (
    <div className="select-none">
      <Navbar06 />
      <header className="w-10/12 mx-auto" id="home">
        <Hero1 />
      </header>

      <main className="w-10/12 mx-auto">
        <LazySection id="about">
          <About />
        </LazySection>
        <LazySection id="techs">
          <TechStack />
        </LazySection>
        <LazySection id="projects">
          <PersonalProject />
        </LazySection>
        <LazySection id="certificates">
          <Certificates />
        </LazySection>
        <LazySection id="contact">
          <ContactSections03 />
        </LazySection>
      </main>

      <footer>
        <Footer />
      </footer>

      <SplashCursor />
      <BackgroundBeams />
    </div>
  );
};

export default App;
