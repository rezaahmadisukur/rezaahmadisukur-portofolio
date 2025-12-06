import * as React from "react";
import { useEffect, useState, useRef, useId } from "react";
import {
  HomeIcon,
  LayersIcon,
  UsersIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  ChevronsLeftRightEllipsisIcon,
  AwardIcon,
  Contact
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "../../navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import { cn } from "../../../../lib/utils";
import { Button } from "../../button";
import { useTheme } from "@/components/theme-provider";
import { AnimatedThemeToggler } from "../../animated-theme-toggler";
import { Context } from "@/contexts/context";

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 324 323"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="88.1023"
        y="144.792"
        width="151.802"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 88.1023 144.792)"
        fill="currentColor"
      />
      <rect
        x="85.3459"
        y="244.537"
        width="151.802"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 85.3459 244.537)"
        fill="currentColor"
      />
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
    />
  </svg>
);

// Theme Toggle Component
const ThemeToggle = ({
  onThemeChange
}: {
  onThemeChange?: (isDarkMode: "light" | "dark") => void;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = isDarkMode === "light" ? "dark" : "light";
    setIsDarkMode(newTheme);
    if (onThemeChange) onThemeChange(newTheme);
  };

  const { setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={() => {
        toggleTheme();
        setTheme(isDarkMode);
      }}
    >
      {isDarkMode === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

// User Menu Component
const UserMenu = ({
  userName = "John Doe",
  userEmail = "john@example.com",
  userAvatar,
  onItemClick
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="h-8 px-2 py-0 hover:bg-accent hover:text-accent-foreground"
      >
        <Avatar className="h-6 w-6">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className="text-xs">
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="h-3 w-3 ml-1" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {userEmail}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("profile")}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("settings")}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("billing")}>
        Billing
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("logout")}>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Types
export interface Navbar06NavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  active?: boolean;
}

export interface Navbar06Language {
  value: string;
  label: string;
  flag?: string;
}

export interface Navbar06Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar06NavItem[];
  languages?: Navbar06Language[];
  defaultLanguage?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onLanguageChange?: (language: string) => void;
  onThemeChange?: (theme: "light" | "dark") => void;
  onUserItemClick?: (item: string) => void;
}

// Default language options
const defaultLanguages: Navbar06Language[] = [
  { value: "en", label: "En", flag: "/public/assets/icons/flags/en.svg" },
  { value: "id", label: "Id", flag: "/public/assets/icons/flags/id.svg" }
];

export const Navbar06 = React.forwardRef<HTMLElement, Navbar06Props>(
  (
    { className, logo = <Logo />, languages = defaultLanguages, ...props },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const selectId = useId();
    const { lang, setLang } = React.useContext(Context);
    const [navLinks, setNavLinks] = useState<Navbar06NavItem[]>([
      { href: "#home", label: "Home", icon: HomeIcon, active: true },
      { href: "#about", label: "About Me", icon: UsersIcon, active: false },
      { href: "#techs", label: "Tech Stack", icon: LayersIcon, active: false },
      {
        href: "#projects",
        label: "Personal Projects",
        icon: ChevronsLeftRightEllipsisIcon,
        active: false
      },
      {
        href: "#certificates",
        label: "Certificates",
        icon: AwardIcon,
        active: false
      },
      { href: "#contact", label: "Contact", icon: Contact, active: false }
    ]);

    const handleSetActive = (href: string) => {
      setNavLinks((prevLink) =>
        prevLink.map((link) => ({ ...link, active: link.href === href }))
      );
    };

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    // Tambahkan useEffect baru untuk IntersectionObserver:
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) {
              handleSetActive(`#${sectionId}`);
            }
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      // Observe semua sections
      const sections = document.querySelectorAll("[id]");
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);

    // Tambahkan handler untuk scroll smooth ke section saat nav diklik:
    // const handleNavItemClick = (href: string) => {
    //   const sectionId = href.replace("#", "");
    //   const section = document.getElementById(sectionId);

    //   if (section) {
    //     section.scrollIntoView({ behavior: "smooth" });
    //     handleSetActive(href);
    //   }

    //   if (onNavItemClick) {
    //     onNavItemClick(href);
    //   }
    // };

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 md:px-6 **:no-underline",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 w-10/12">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <NavigationMenuItem key={index} className="w-full">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                document
                                  .querySelector(link.href as string)
                                  ?.scrollIntoView({ behavior: "smooth" });
                              }}
                              className={cn(
                                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline",
                                link.active &&
                                  "bg-accent text-accent-foreground"
                              )}
                            >
                              <Icon
                                size={16}
                                className="text-muted-foreground"
                                aria-hidden={true}
                              />
                              <span>{link.label}</span>
                            </button>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-2xl">{logo}</div>
                <span className="hidden font-bold text-xl sm:inline-block">
                  Reza Ahmadi Sukur
                </span>
              </button>
              {/* Desktop navigation - icon only */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-2">
                    <TooltipProvider>
                      {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <NavigationMenuItem key={link.label}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href={link.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSetActive(link.href as string);
                                    document
                                      .querySelector(link.href as string)
                                      ?.scrollIntoView({ behavior: "smooth" });
                                  }}
                                  className={cn(
                                    "flex flex-row items-center justify-center p-1.5 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer text-xs gap-2",
                                    link.active &&
                                      "bg-accent text-accent-foreground"
                                  )}
                                >
                                  <Icon size={15} aria-hidden={true} />
                                  {link.active && (
                                    <span className="">{link.label}</span>
                                  )}
                                </a>
                              </TooltipTrigger>
                              <TooltipContent
                                side="bottom"
                                className="px-2 py-1 text-xs"
                              >
                                <p>{link.label}</p>
                              </TooltipContent>
                            </Tooltip>
                          </NavigationMenuItem>
                        );
                      })}
                    </TooltipProvider>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Toogle DarkMode */}
            <AnimatedThemeToggler className="text-popover-foreground/50 cursor-pointer w-7  flex justify-center items-center p-1 rounded" />
            {/* Language selector */}
            <Select defaultValue={lang} onValueChange={setLang}>
              <SelectTrigger
                id={`language-${selectId}`}
                className="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none [&>svg]:shrink-0"
                aria-label="Select language"
              >
                <SelectValue className="hidden sm:inline-flex" />
              </SelectTrigger>
              <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
                {languages.map((lang, index) => (
                  <SelectItem key={index} value={lang.value}>
                    <span className="flex items-center gap-2">
                      <p className="flex gap-3">
                        <img src={lang.flag} alt={lang.label} width={20} />
                        <span className="truncate">{lang.label}</span>
                      </p>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>
    );
  }
);

Navbar06.displayName = "Navbar06";

export { Logo, HamburgerIcon, ThemeToggle, UserMenu };
