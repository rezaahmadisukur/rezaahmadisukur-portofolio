import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "./ui/border-beam";
import { TypingAnimation } from "./ui/typing-animation";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { ShinyButton } from "./ui/shiny-button";
import { useContext } from "react";
import { Context } from "@/contexts/context";

interface Hero1Props {
  badge?: string;
  heading?: string;
  description?: {
    en?: string;
    id?: string;
  };
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
  description = {
    en: "A passionate developer with expertise in React, Tailwind CSS, and Javascript technologies . Currently pursuing a Master's in Information System at Bina Sarana Informatika University.",
    id: "Seorang pengembang yang bersemangat dengan keahlian dalam teknologi React, Tailwind CSS, dan JavaScript. Saat ini sedang menempuh program Sarjana Sistem Informasi di Universitas Bina Sarana Informatika."
  },
  buttons = {
    primary: {
      text: "Download CV",
      url: ""
    },
    secondary: {
      text: "Hire Me",
      url: "#contact"
    }
  },
  image = {
    src: "/public/assets/images/chibi.webp",
    alt: "Chibi Profile"
  }
}: Hero1Props) => {
  const { lang } = useContext(Context);
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
              {badge && (
                <Badge variant={"outline"}>
                  <AnimatedGradientText className="flex">
                    {badge}
                    <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
                  </AnimatedGradientText>
                </Badge>
              )}
              <div className="my-6 text-4xl font-bold xl:text-6xl text-center xl:text-start">
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
                    className="text-primary xl:text-4xl"
                  />
                </p>
              </div>
              <p className="text-muted-foreground mb-8 max-w-xl xl:text-xl">
                {lang == "en" ? description.en : description.id}
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row xl:justify-start">
                {buttons.primary && (
                  <Button asChild className="w-full sm:w-auto">
                    <a href={buttons.primary.url}>
                      {lang == "en" ? buttons.primary.text : "Unduh CV"}
                      <Download />
                    </a>
                  </Button>
                )}
                {buttons.secondary && (
                  <a href={buttons.secondary.url}>
                    <ShinyButton>
                      <span className="flex items-center gap-1 capitalize">
                        {lang == "en" ? buttons.secondary.text : "Rekrut Saya"}
                        <ArrowRight className="size-4" />
                      </span>
                    </ShinyButton>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center xl:col-span-1">
            <div className="flex justify-center items-center border rounded-full overflow-hidden relative w-full md:w-1/2 lg:w-1/2 xl:w-full bg-accent">
              <div className="w-full flex justify-center backdrop-blur-xl h-96">
                <img src={image.src} alt={image.alt} />
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
