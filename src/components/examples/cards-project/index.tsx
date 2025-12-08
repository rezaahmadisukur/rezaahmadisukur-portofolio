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
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";

export const title = "Image Card";

interface ProjectType {
  id: number;
  title?: string;
  desc?: {
    en?: string;
    id?: string;
  };
  image?: string;
  category: string[];
  demo?: string;
  github?: string;
}

const CardProject = ({
  project,
  className
}: {
  project: ProjectType;
  className?: string;
}) => {
  const { lang } = useContext(Context);
  return (
    <Card
      className={cn("w-full max-w-md overflow-hidden relative z-50", className)}
    >
      <ShineBorder shineColor={["#3b82f6", "#a855f7", "#ec4899"]} />
      <CardHeader className="p-0 h-[166px]">
        <img
          className="h-[166px] w-full object-cover"
          alt={project.title}
          src={project.image || "/assets/icons/others/not-found.jpg"}
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
          <a href={project.github} target="_blank">
            <RainbowButton
              className="w-full cursor-pointer"
              variant={"outline"}
            >
              Github
              <Github />
            </RainbowButton>
          </a>
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
