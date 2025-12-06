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
          <div className="py-12 flex flex-col justify-start items-center">
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
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
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <a href="/" target="_blank">
                Copyright Reza Ahmadi Sukur
              </a>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href="#"
                target="_blank"
                className="cursor-pointer hover:fill-accent"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" target="_blank">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" target="_blank">
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
