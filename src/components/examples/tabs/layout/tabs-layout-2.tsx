import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsBadge from "../../tabs-badge";

export const title = "Full Width Tabs";

const TabsLayout = () => {
  return (
    <Tabs className="w-full max-w-full mx-auto mt-10" defaultValue="language">
      <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto bg-secondary">
        <TabsTrigger value="language">Languages & Tools</TabsTrigger>
        <TabsTrigger value="backend">Backend & APIs</TabsTrigger>
        <TabsTrigger value="library">Frameworks & Libraries</TabsTrigger>
        <TabsTrigger value="databases">Databases & Clouds</TabsTrigger>
      </TabsList>
      <TabsContent value="language">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex gap-5 flex-wrap">
          {Langs.map((item, index) => (
            <div key={index}>
              <TabsBadge Lang={item} />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="backend">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex gap-5 flex-wrap">
          {backends.map((item, index) => (
            <div key={index}>
              <TabsBadge Lang={item} />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="library">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex gap-5 flex-wrap">
          {frameworks.map((item, index) => (
            <div key={index}>
              <TabsBadge Lang={item} />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="databases">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex gap-5 flex-wrap">
          {databases.map((item, index) => (
            <div key={index}>
              <TabsBadge Lang={item} />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsLayout;

const Langs = [
  {
    label: "HTML",
    icon: "/public/assets/icons/tech-stack/languages//html.svg"
  },
  {
    label: "CSS",
    icon: "/public/assets/icons/tech-stack/languages/css.svg"
  },
  {
    label: "JavaScript",
    icon: "/public/assets/icons/tech-stack/languages/js.svg"
  },
  {
    label: "TypeScript",
    icon: "/public/assets/icons/tech-stack/languages/ts.svg"
  },
  {
    label: "Git",
    icon: "/public/assets/icons/tech-stack/languages/git.svg"
  },
  {
    label: "Vercel",
    icon: "/public/assets/icons/tech-stack/languages/vercel.svg"
  },
  {
    label: "API Dogs",
    icon: "/public/assets/icons/tech-stack/languages/apidog.svg"
  },
  {
    label: "Visual Studio Code",
    icon: "/public/assets/icons/tech-stack/languages/vscode.svg"
  },
  {
    label: "Windows",
    icon: "/public/assets/icons/tech-stack/languages/windows.svg"
  }
];

const backends = [
  {
    label: "Node JS",
    icon: "/public/assets/icons/tech-stack/backends/nodejs.svg"
  },
  {
    label: "Express JS",
    icon: "/public/assets/icons/tech-stack/backends/expressjs.svg"
  },
  {
    label: "PHP",
    icon: "/public/assets/icons/tech-stack/backends/php.svg"
  }
];

const frameworks = [
  {
    label: "React JS",
    icon: "/public/assets/icons/tech-stack/frameworks/reactjs.svg"
  },
  {
    label: "Redux",
    icon: "/public/assets/icons/tech-stack/frameworks/redux.svg"
  },
  {
    label: "Vite",
    icon: "/public/assets/icons/tech-stack/frameworks/vite.svg"
  },
  {
    label: "Laravel",
    icon: "/public/assets/icons/tech-stack/frameworks/laravel.svg"
  },
  {
    label: "Livewire",
    icon: "/public/assets/icons/tech-stack/frameworks/livewire.svg"
  },
  {
    label: "Bootstrap",
    icon: "/public/assets/icons/tech-stack/frameworks/bootstrap.svg"
  },
  {
    label: "Tailwind CSS",
    icon: "/public/assets/icons/tech-stack/frameworks/tailwind.svg"
  }
];

const databases = [
  {
    label: "MySQL",
    icon: "/public/assets/icons/tech-stack/databases/mysql.svg"
  },
  {
    label: "Mongodb",
    icon: "/public/assets/icons/tech-stack/databases/mongodb.svg"
  }
];
