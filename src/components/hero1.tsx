import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "./ui/border-beam";
import { TypingAnimation } from "./ui/typing-animation";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

interface Hero1Props {
  badge?: string;
  // greet?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "✨ My Portofolio",
  heading = "Portofolio",
  description = "A passionate developer with expertise in React, Tailwind CSS, and Javascript technologies . Currently pursuing a Master's in Information System at Bina Sarana Informatika University.",
  buttons = {
    primary: {
      text: "Download CV",
      url: ""
    },
    secondary: {
      text: "Hire Me",
      url: ""
    }
  },
  image = {
    src: "/public/assets/images/chibi.png",
    alt: "Chibi Profile"
  }
}: Hero1Props) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {badge && (
                <Badge variant={"outline"}>
                  <AnimatedGradientText className="flex">
                    {badge}
                    <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
                  </AnimatedGradientText>
                </Badge>
              )}
              <div className="my-6 text-4xl font-bold lg:text-6xl text-center lg:text-start">
                <h1 className="">
                  <span className="uppercase">{heading}</span>
                </h1>
                <p>
                  <TypingAnimation
                    words={["Junior Programmer", "Junior Web Developer"]}
                    typeSpeed={100}
                    deleteSpeed={150}
                    pauseDelay={2000}
                    loop
                    className="text-primary lg:text-4xl"
                  />
                </p>
              </div>
              <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                {description}
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {buttons.primary && (
                  <Button asChild className="w-full sm:w-auto">
                    <a href={buttons.primary.url}>
                      {buttons.primary.text}
                      <Download />
                    </a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-span-1">
            <div className="flex justify-center items-center border rounded-full overflow-hidden relative w-1/2 lg:w-full bg-accent shadow-xl sm:w-2/3 xs:w-full">
              <div className="w-full flex justify-center backdrop-blur-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-96 rounded-md"
                />
              </div>
              <BorderBeam duration={8} size={300} borderWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
