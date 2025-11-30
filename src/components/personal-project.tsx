import { ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Badge } from "./ui/badge";
import CardProject from "./examples/cards-project";
import { useEffect, useState } from "react";
import { PaginationDemo } from "./examples/pagination";

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

  const getProjects = async () => {
    const response = await fetch("/src/data/projects.json").then((res) =>
      res.json()
    );
    setProjects(response.data);
  };

  useEffect(() => {
    const load = async () => {
      getProjects();
    };

    load();
  }, [projects]);

  return (
    <section className="py-15">
      <div className="container">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
          <Badge variant={"outline"}>
            <AnimatedGradientText className="flex">
              👽 Projects
              <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
            </AnimatedGradientText>
          </Badge>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Personal Projects
            </h1>
            <p>A showcase of my work across various technologies</p>
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
            Page {currentPage + 1} of {totalPage}
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
