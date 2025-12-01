import About from "./components/about";
import ContactSections03 from "./components/blocks/contact/contact-sections-03";
import Certificates from "./components/certificates";
import { Hero1 } from "./components/hero1";
import PersonalProject from "./components/personal-project";
import TechStack from "./components/tech-stack";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Navbar06 } from "./components/ui/shadcn-io/navbar-06";

const App = () => {
  return (
    <div>
      <Navbar06 />
      <header className="w-10/12 mx-auto">
        <Hero1 />
      </header>

      <main className="w-10/12 mx-auto">
        <section>
          <About />
        </section>
        <section>
          <TechStack />
        </section>
        <section>
          <PersonalProject />
        </section>
        <section>
          <Certificates />
        </section>
        <section>
          <ContactSections03 />
        </section>
      </main>
      <BackgroundBeams />
    </div>
  );
};

export default App;
