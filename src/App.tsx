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

const App = () => {
  return (
    <div className="select-none">
      <Navbar06 />
      <header className="w-10/12 mx-auto" id="home">
        <Hero1 />
      </header>

      <main className="w-10/12 mx-auto">
        <section id="about">
          <About />
        </section>
        <section id="techs">
          <TechStack />
        </section>
        <section id="projects">
          <PersonalProject />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact">
          <ContactSections03 />
        </section>
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
