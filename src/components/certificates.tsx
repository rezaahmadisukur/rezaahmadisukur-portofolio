import { ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Badge } from "./ui/badge";
import { CardCertificate } from "./examples/card-certificate";
import { useContext, useRef } from "react";
import { Context } from "@/contexts/context";
import { motion, useInView } from "motion/react";

const Certificates = () => {
  const { lang } = useContext(Context);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20" ref={ref}>
      <div className="container">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
          <Badge variant={"outline"}>
            <AnimatedGradientText className="flex">
              👻 Certificates
              <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
            </AnimatedGradientText>
          </Badge>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 512 512"
                  className="size-15"
                >
                  <path
                    fill="var(--foreground)"
                    d="m305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574l-22.055 14.87l-1.847 26.571l-25.81 6.425l-10.803 24.314l-26.46-2.795l-18.475 19.087L256 285.403l-23.902 11.677l-18.475-19.15l-26.46 2.795l-10.803-24.313l-25.81-6.363l-1.847-26.534l-22.118-14.92l7.348-25.573l-15.594-21.544l15.644-21.52l-7.398-25.523l22.068-14.87L150.5 73.03l25.86-6.362l10.803-24.313l26.46 2.794L232.098 26L256 37.677L279.902 26l18.475 19.149l26.46-2.794l10.803 24.313l25.81 6.425l1.847 26.534l22.055 14.87l-7.347 25.574l15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242a72.355 72.355 0 0 0 72.242-72.242zm-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283a52.395 52.395 0 0 0-52.282-52.245z"
                  />
                </svg>
              </span>
              {lang == "en" ? "Certificates" : "Sertifikat"}
            </h1>
          </div>
        </div>
        {/* Content Certivicates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CardCertificate />
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
