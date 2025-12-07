import { CodeXml, Github, User } from "lucide-react";
import { GradientText } from "./animate-ui/primitives/texts/gradient";
import { LettersPullUp } from "./ui/letter-pull-up";
import { TextFade } from "./ui/text-fade";
import { Dots } from "./ui/dots";
import { motion } from "motion/react";

const icons = [<CodeXml />, <User />, <Github />];

const SplashScreen = () => {
  return (
    // Container full screen dengan background
    <motion.div
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen w-screen items-center justify-center bg-background text-white"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ y: -30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: index * 0.3
                }
              }}
              className="w-10 h-10 xl:w-12 xl:h-12 grid place-content-center rounded-full shadow-md shadow-foreground inset-shadow-sm inset-shadow-foreground"
            >
              {icon}
            </motion.div>
          ))}
        </div>
        {/* Kamu bisa ganti ini dengan Logo atau Nama kamu */}
        <LettersPullUp
          text="Welcome to my"
          className="text-3xl xl:text-5xl font-extrabold animate-pulse"
        />
        <TextFade direction="up">
          <GradientText
            text="Portofolio Website"
            className="text-3xl xl:text-5xl font-extrabold"
          />
        </TextFade>

        {/* Opsional: Loading Spinner sederhana */}
        <Dots />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
