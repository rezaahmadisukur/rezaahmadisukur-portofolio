import { ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Badge } from "./ui/badge";
import CardProject from "./examples/cards-project";
import { useCallback, useContext, useEffect, useState } from "react";
import { PaginationDemo } from "./examples/pagination";
import { Context } from "@/contexts/context";

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
    const response = await fetch("/src/data/projects.json").then((res) =>
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
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
          <Badge variant={"outline"}>
            <AnimatedGradientText className="flex">
              👽 Projects
              <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
            </AnimatedGradientText>
          </Badge>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold flex items-center gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 1391 1000"
                  className="size-15"
                >
                  <path
                    fill="var(--foreground)"
                    d="M1313 218H78q9-48 27-67q16-17 31-17h4q4 1 8 1q12 0 26-4q18-6 25-29l24-72Q300 1 431 1q89 0 164 29l25 72q24 23 32.5 26t43.5 3h485q84 0 110 22q12 11 22 65zm78 164v10l-68 523q-5 35-33.5 60.5T1225 1001H167q-36 0-65.5-25.5T68 915L1 392q-1-3-1-10q0-33 22.5-54.5T78 306h1235q33 0 55.5 21.5T1391 382z"
                  />
                </svg>
              </span>
              {lang == "en" ? "Personal Projects" : "proyek pribadi"}
            </h1>
            <p>
              {lang == "en"
                ? "A showcase of my work across various technologies"
                : "Pameran karya saya di berbagai teknologi"}
            </p>
          </div>
        </div>
        {/* Content Project */}

        <div className="mt-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {/* Card */}
          {currentItems.length > 0 &&
            currentItems.map((project, index) => (
              <div key={index}>
                <CardProject project={project} />
              </div>
            ))}
        </div>
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
