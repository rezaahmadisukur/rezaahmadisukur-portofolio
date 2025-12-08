import CardProject from "./examples/cards-project";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { PaginationDemo } from "./examples/pagination";
import { Context } from "@/contexts/context";
import { AnimatePresence, motion, useInView } from "motion/react";
import { GradientText } from "./animate-ui/primitives/texts/gradient";
import { AnimatedGradientTextDemo } from "./examples/gradient-text";

interface ProjectType {
  title?: string;
  desc?: {
    en: string;
    id: string;
  };
  image?: string;
  category: string[];
}

const PersonalProject = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const itemPerPage = 3;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPage = Math.ceil(projects.length / itemPerPage);
  const { lang } = useContext(Context);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentItems = projects.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % itemPerPage);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + itemPerPage) % itemPerPage);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getProjects = useCallback(async () => {
    const response = await fetch("/data/projects.json").then((res) =>
      res.json()
    );
    setProjects(response.data);
  }, []);

  useEffect(() => {
    const load = async () => {
      getProjects();
    };

    load();
  }, [getProjects]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center lg:items-start gap-5 lg:text-start">
          <AnimatedGradientTextDemo>Projects</AnimatedGradientTextDemo>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold flex items-center gap-3 justify-center">
              <GradientText
                text={lang == "en" ? "Personal Projects" : "proyek pribadi"}
              />
            </h1>
            <p>
              {lang == "en"
                ? "A showcase of my work across various technologies"
                : "Pameran karya saya di berbagai teknologi"}
            </p>
          </div>
        </div>
        {/* Content Project */}

        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "
        >
          {currentItems.length > 0 &&
            currentItems.map((project, index) => (
              <div
                key={index}
                className="relative group  block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/80 block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut"
                        }
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut"
                        }
                      }}
                    />
                  )}
                </AnimatePresence>
                <CardProject
                  project={project}
                  className="rounded-2xl h-full border border-transparent dark:border-white/20 group-hover:border-slate-700 relative z-20"
                />
              </div>
            ))}
        </motion.div>
        <div className="flex justify-between items-center mt-5">
          <p className="text-xs">
            {lang == "en" ? "Page" : "Halaman"} {currentPage + 1} of {totalPage}
          </p>
          <div>
            <PaginationDemo
              totalPage={totalPage}
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
              goToPage={goToPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProject;
