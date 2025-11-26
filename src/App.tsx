import { Hero1 } from "./components/hero1";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Navbar06 } from "./components/ui/shadcn-io/navbar-06";

const App = () => {
  return (
    <div>
      <Navbar06 />
      <header className="w-10/12 mx-auto">
        <Hero1 />
      </header>
      <BackgroundBeams />
    </div>
  );
};

export default App;
