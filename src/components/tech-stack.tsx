import { ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Badge } from "./ui/badge";
import TabsLayout from "./examples/tabs/layout/tabs-layout-2";

const TechStack = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
          <Badge variant={"outline"}>
            <AnimatedGradientText className="flex">
              🤖 Techs
              <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
            </AnimatedGradientText>
          </Badge>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold">Technical Skills</h1>
            <p>My expertise across various technologies and tools</p>
          </div>
        </div>
        {/* Content Tech Skills */}
        <div className="flex ">
          <TabsLayout />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
