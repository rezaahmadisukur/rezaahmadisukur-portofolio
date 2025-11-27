import { ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Badge } from "./ui/badge";
import { PixelImage } from "./ui/pixel-image";

const About = () => {
  return (
    <section className="py-15">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-3 ">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Badge variant={"outline"}>
                <AnimatedGradientText className="flex">
                  👾 About Me
                  <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
                </AnimatedGradientText>
              </Badge>
              <div className="mt-10">
                <PixelImage
                  src="/public/assets/images/profile.jpg"
                  customGrid={{ rows: 10, cols: 10 }}
                  grayscaleAnimation
                  maxAnimationDelay={3000}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-span-2">
            {/* <div>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                <span className="flex gap-3">
                  {heading}
                  <img
                    src="/public/assets/gifs/wave.gif"
                    alt="..."
                    width={50}
                  />
                </span>
                <p>
                  <TypingAnimation
                    words={["Junior Programmer", "Web Developer"]}
                    typeSpeed={100}
                    deleteSpeed={150}
                    pauseDelay={2000}
                    loop
                    className="text-primary lg:text-4xl"
                  />
                </p>
              </h1>
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
