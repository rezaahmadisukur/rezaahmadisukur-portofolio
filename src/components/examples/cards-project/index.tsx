import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../ui/card";

export const title = "Image Card";

interface ProjectType {
  title?: string;
  desc?: {
    en: string;
    id: string;
  };
  image?: string;
  category: string[];
}

const CardProject = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="w-full max-w-md overflow-hidden hover:ring-2 hover:ring-foreground transition-all duration-300">
      <CardHeader className="p-0">
        {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
        <img
          alt=""
          height={1380}
          src={project.image || "/public/assets/icons/others/not-found.jpg"}
          width={2070}
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-5">
          {project.desc?.en}
        </CardDescription>
      </CardContent>
      <div className="ms-5 flex gap-1 flex-wrap">
        {project.category.map((tag, index) => (
          <Badge key={index} variant={"secondary"} className="rounded-md">
            {tag}
          </Badge>
        ))}
      </div>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardProject;
