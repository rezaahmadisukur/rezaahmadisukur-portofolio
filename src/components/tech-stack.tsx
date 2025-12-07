import TabsLayout from "./examples/tabs/layout/tabs-layout-2";
import { useContext, useRef } from "react";
import { Context } from "@/contexts/context";
import { useInView, motion } from "motion/react";
import { GradientText } from "./animate-ui/primitives/texts/gradient";
import { AnimatedGradientTextDemo } from "./examples/gradient-text";

const TechStack = () => {
  const { lang } = useContext(Context);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5">
          <AnimatedGradientTextDemo>Tech Stack</AnimatedGradientTextDemo>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <GradientText
                text={lang == "en" ? "Technical Skills" : "Keterampilan Teknis"}
              />
            </h1>
            <p>
              {lang == "en"
                ? "My expertise across various technologies and tools"
                : "Keahlian saya dalam berbagai teknologi dan alat"}
            </p>
          </div>
        </div>
        {/* Content Tech Skills */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex "
        >
          <TabsLayout />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
