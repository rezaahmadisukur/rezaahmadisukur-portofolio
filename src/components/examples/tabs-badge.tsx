import { Badge } from "../ui/badge";

interface TypeLang {
  Lang: {
    icon: string;
    label: string;
  };
}

const TabsBadge = ({ Lang }: TypeLang) => {
  return (
    <Badge className="bg-secondary text-foreground py-2 px-5 rounded-md border border-accent flex gap-2">
      <img src={Lang.icon} alt="" width={20} />
      <span className="font-bold text-md">{Lang.label}</span>
    </Badge>
  );
};

export default TabsBadge;
