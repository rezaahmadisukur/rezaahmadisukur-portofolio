import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react";

const footerLinks = [
  {
    title: "Home",
    href: "#home"
  },
  {
    title: "About",
    href: "#about"
  },
  {
    title: "Tech",
    href: "#techs"
  },
  {
    title: "Projects",
    href: "#projects"
  },
  {
    title: "Certificates",
    href: "#certificates"
  },
  {
    title: "Contact",
    href: "#contact"
  }
];

const Footer = () => {
  return (
    <div className="flex flex-col w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4  **:no-underline">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-6 lg:py-12 flex flex-col justify-start items-center">
            <ul className="flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground text-xs lg:text-lg"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground text-xs lg:text-lg">
              &copy; 2025{" "}
              <a href="/" target="_blank">
                RezaAS
              </a>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href="https://www.facebook.com/reza.ahmadi.sukur.39"
                target="_blank"
                className="cursor-pointer hover:fill-accent"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://github.com/rezaahmadisukur" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rezaahmadisukur"
                target="_blank"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/reza-ahmadi-sukur-361a7a311"
                target="_blank"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
