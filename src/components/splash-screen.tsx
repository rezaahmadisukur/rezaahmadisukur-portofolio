import { CodeXml, Github, User } from "lucide-react";
import { GradientText } from "./animate-ui/primitives/texts/gradient";
import { LettersPullUp } from "./ui/letter-pull-up";
import { TextFade } from "./ui/text-fade";
import { Dots } from "./ui/dots";

const icons = [<CodeXml />, <User />, <Github />];

const SplashScreen = () => {
  return (
    // Container full screen dengan background
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {icons.map((icon, index) => (
            <TextFade direction="down">
              <div
                key={index}
                className="w-12 h-12 grid place-content-center rounded-full shadow-md shadow-foreground inset-shadow-sm inset-shadow-foreground"
              >
                {icon}
              </div>
            </TextFade>
          ))}
        </div>
        {/* Kamu bisa ganti ini dengan Logo atau Nama kamu */}
        <LettersPullUp
          text="Welcome to my"
          className="text-5xl font-extrabold animate-pulse"
        />
        <TextFade direction="up">
          <GradientText
            text="Portofolio Website"
            className="text-5xl font-extrabold "
          />
        </TextFade>

        {/* Opsional: Loading Spinner sederhana */}
        <Dots />
      </div>
    </div>
  );
};

export default SplashScreen;
