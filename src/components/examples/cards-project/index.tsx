import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useContext } from "react";
import { Context } from "@/contexts/context";

export const title = "Image Card";

interface ProjectType {
  title?: string;
  desc?: {
    en: string;
    id: string;
  };
  image?: string;
  category?: string[];
  github?: string;
  demo?: string;
}

const CardProject = ({ project }: { project: ProjectType }) => {
  const { lang } = useContext(Context);
  return (
    <Card className="w-full max-w-md overflow-hidden hover:ring-2 hover:ring-foreground transition-all duration-300">
      <CardHeader className="p-0 h-[166px]">
        <img
          className="h-[166px] w-full object-cover"
          alt={project.title}
          src={project.image || "/public/assets/icons/others/not-found.jpg"}
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-5">
          {lang == "en" ? project.desc?.en : project.desc?.id}
        </CardDescription>
      </CardContent>
      <div className="ms-5 flex gap-1 flex-wrap">
        {project.category?.map((tag, index) => (
          <Badge key={index} variant={"secondary"} className="rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
      <CardFooter className="flex gap-5">
        <div className="w-full">
          <Button className="w-full cursor-pointer" variant={"outline"}>
            <a href={project.github} target="_blank">
              Github
            </a>
            <Github />
          </Button>
        </div>
        <div className="w-full">
          <Button className="w-full cursor-pointer">
            <a href={project.demo} target="_blank">
              Live Demo
            </a>
            <ExternalLink />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
