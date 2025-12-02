import { ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Badge } from "./ui/badge";
import { PixelImage } from "./ui/pixel-image";
import { useRef } from "react";
import { useInView } from "motion/react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center xl:grid-cols-3 gap-15 xl:gap-50">
          <div className="xl:col-span-1">
            <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
              <Badge variant={"outline"}>
                <AnimatedGradientText className="flex">
                  👾 About
                  <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
                </AnimatedGradientText>
              </Badge>
              <div ref={ref} className="relative mt-10">
                {isInView && (
                  <PixelImage
                    src="/public/assets/images/profile.jpg"
                    customGrid={{ rows: 10, cols: 10 }}
                    grayscaleAnimation
                    maxAnimationDelay={3000}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Content About Me */}
          <div className="xl:col-span-2">
            <div className="flex flex-col gap-10 xl:items-start items-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                <h1 className="flex flex-col gap-3 w-full xl:items-start items-center">
                  <span className="flex gap-3">
                    Hi there !
                    <img
                      src="/public/assets/gifs/wave.gif"
                      alt="..."
                      width={50}
                    />
                  </span>
                  <div className="flex gap-2">
                    I'm{" "}
                    <span className="text-primary underline">
                      Reza Ahmadi Sukur
                    </span>
                  </div>
                </h1>
              </div>
              <div className="flex flex-col gap-10 items-center xl:items-start text-center xl:text-start">
                <p>
                  An aspiring Web Developer focused on building functional and
                  user-friendly websites. I enjoy the process of turning code
                  into beautiful interfaces using React and Tailwind. For me,
                  every line of code is an opportunity to learn something new.
                  In this portfolio, you can explore my dedication through
                  various open-source projects and personal experiments I've
                  built from scratch.
                </p>
                <p>
                  With expertise in React, and Javascript technologies, I enjoy
                  building scalable and user-friendly applications that solve
                  real-world problems. My background in computer science has
                  given me a strong foundation in algorithms, data structures,
                  and system design, which I apply to create efficient and
                  maintainable code.
                </p>
                <p>
                  I'm particularly interested in the intersection of web
                  development and mobile development, where I've developed
                  several projects that leverage the power of decentralized
                  systems to create secure and transparent applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
