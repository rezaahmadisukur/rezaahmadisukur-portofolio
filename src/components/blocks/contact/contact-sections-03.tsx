"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  SendHorizontal
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { useContext } from "react";
import { Context } from "@/contexts/context";

const sosmeds = [
  {
    img: "/public/assets/icons/sosmed/facebook.svg",
    alt: "Facebook",
    link: "https://www.facebook.com/reza.ahmadi.sukur.39"
  },
  {
    img: "/public/assets/icons/sosmed/github.svg",
    alt: "Github",
    link: "https://github.com/rezaahmadisukur"
  },
  {
    img: "/public/assets/icons/sosmed/instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/rezaahmadisukur"
  },
  {
    img: "/public/assets/icons/sosmed/linkedin.svg",
    alt: "Linked In",
    link: "https://www.linkedin.com/in/reza-ahmadi-sukur-361a7a311"
  }
];

const DATA = [
  {
    icon: Phone,
    info: "+62 896 7136 3364"
  },
  {
    icon: Mail,
    info: "rezaahmadisukur1309@gmail.com"
  },
  {
    icon: MapPin,
    info: "West Java, Indonesia"
  }
];

export const title = "Contact Form with Dark Card";

export default function ContactSections03() {
  const { lang } = useContext(Context);
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
          <Badge variant={"outline"}>
            <AnimatedGradientText className="flex">
              👽 Contact
              <ArrowUpRight className="ml-2 size-4 text-accent-foreground" />
            </AnimatedGradientText>
          </Badge>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold">
              {lang == "en" ? "Contact Me" : "Hubungi Saya"}
            </h1>
            <p>
              {lang == "en"
                ? "Any questions or remarks? Just write us a message!"
                : "Ada pertanyaan atau komentar? Silakan kirim pesan kepada kami!"}
            </p>
          </div>
        </div>
        <Card className="grid grid-cols-1 items-center gap-10 rounded-2xl p-8 shadow-xl lg:grid-cols-2 lg:p-10 mt-10">
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-base">
                  {lang == "en" ? "First Name" : "Nama Depan"}
                </Label>
                <Input id="first-name" placeholder="John" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-base">
                  {lang == "en" ? "Last Name" : "Nama Belakang"}
                </Label>
                <Input id="last-name" placeholder="Doe" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                {lang == "en" ? "Email Address" : "Alamat Email"}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="someone@example.com"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                {lang == "en" ? "Message" : "Pesan"}
              </Label>
              <Textarea
                id="message"
                placeholder="Something about your request."
                rows={5}
                cols={40}
                className="resize-none"
              />
            </div>
            <Button
              className="w-full sm:w-auto sm:min-w-[150px] flex gap-1"
              size="lg"
            >
              {lang == "en" ? "Send Message" : "Kirim Pesan"}
              <SendHorizontal />
            </Button>
          </form>
          <div className="flex flex-col justify-between rounded-xl bg-linear-to-br from-gray-900 to-black p-8 lg:p-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {lang == "en" ? "Contact Information" : "Informasi Kontak"}
              </h3>
              <p className="mb-12 max-w-lg text-gray-300">
                {lang == "en"
                  ? "Fill up the form and our Team will get back to you within 24 hours."
                  : "Isi formulir ini dan tim kami akan menghubungi Anda dalam waktu 24 jam."}
              </p>
              <div className="space-y-6">
                {DATA.map(({ icon: Icon, info }, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center lg:items-start xl:flex-row gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-200 text-sm lg:text-lg">
                      {info}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center lg:items-start mt-10">
              <p className="text-xl font-bold text-primary underline">
                {lang == "en" ? "Connect with me" : "Terhubung dengan saya"}
              </p>
              <div className="flex gap-3">
                {sosmeds.map((sosmed, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger
                      className="w-10 p-1 rounded-md hover:-translate-y-1 cursor-pointer  transition-all duration-300"
                      asChild
                    >
                      <a href={sosmed.link} target="_blank">
                        <img src={sosmed.img} alt={sosmed.alt} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="px-2 py-1 text-xs">
                      <p>{sosmed.alt}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
