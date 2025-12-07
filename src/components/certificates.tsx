import { CardCertificate } from "./examples/card-certificate";
import { useContext, useRef } from "react";
import { Context } from "@/contexts/context";
import { motion, useInView } from "motion/react";
import { GradientText } from "./animate-ui/primitives/texts/gradient";
import { AnimatedGradientTextDemo } from "./examples/gradient-text";

const Certificates = () => {
  const { lang } = useContext(Context);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20" ref={ref}>
      <div className="container">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5">
          <AnimatedGradientTextDemo>Certificates</AnimatedGradientTextDemo>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold flex items-center">
              <GradientText
                text={lang == "en" ? "Certificates" : "Sertifikat"}
              />
            </h1>
          </div>
        </div>
        {/* Content Certivicates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex justify-center items-center"
        >
          <CardCertificate />
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
