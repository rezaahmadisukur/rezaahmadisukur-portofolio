"use client";

import { Mail, MapPin, Phone, SendHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { useContext, useEffect, useRef } from "react";
import { Context } from "@/contexts/context";
import { motion, useInView } from "motion/react";
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";
import { AnimatedGradientTextDemo } from "@/components/examples/gradient-text";
import { useForm, ValidationError } from "@formspree/react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const sosmeds = [
  {
    img: "/assets/icons/sosmed/facebook.svg",
    alt: "Facebook",
    link: "https://www.facebook.com/reza.ahmadi.sukur.39"
  },
  {
    img: "/assets/icons/sosmed/github.svg",
    alt: "Github",
    link: "https://github.com/rezaahmadisukur"
  },
  {
    img: "/assets/icons/sosmed/instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/rezaahmadisukur"
  },
  {
    img: "/assets/icons/sosmed/linkedin.svg",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [state, handleSubmit] = useForm("mnnebjvk");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast("Successfully Send Message", {
        position: "top-center",
        duration: 5000,
        action: {
          label: <X />,
          onClick: () => {}
        }
      });
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5">
          <AnimatedGradientTextDemo>Contact</AnimatedGradientTextDemo>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <GradientText
                text={lang == "en" ? "Contact Me" : "Hubungi Saya"}
              />
            </h1>
            <p>
              {lang == "en"
                ? "Any questions or remarks? Just write us a message!"
                : "Ada pertanyaan atau komentar? Silakan kirim pesan kepada kami!"}
            </p>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="grid grid-cols-1 items-center gap-10 rounded-2xl p-8 shadow-xl lg:grid-cols-2 lg:p-10 mt-10">
            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base">
                    {lang == "en" ? "First Name" : "Nama Depan"}
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="h-11 placeholder:text-sm lg:placeholder:text-lg"
                  />
                  <ValidationError
                    prefix="First Name"
                    field="firstName"
                    errors={state.errors}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base">
                    {lang == "en" ? "Last Name" : "Nama Belakang"}
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="h-11 placeholder:text-sm lg:placeholder:text-lg"
                  />
                  <ValidationError
                    prefix="Last Name"
                    field="lastName"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  {lang == "en" ? "Email Address" : "Alamat Email"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="someone@example.com"
                  className="h-11 placeholder:text-sm lg:placeholder:text-lg"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                  {lang == "en" ? "Message" : "Pesan"}
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Something about your request."
                  rows={5}
                  cols={40}
                  className="resize-none placeholder:text-sm lg:placeholder:text-lg"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full flex gap-1 cursor-pointer"
                size="lg"
              >
                {state.submitting && <Spinner className="font-bold stroke-3" />}
                {lang == "en" ? "Send Message" : "Kirim Pesan"}
                <SendHorizontal />
              </Button>
            </form>
            <div className="flex flex-col justify-between rounded-xl bg-linear-to-br from-gray-900 to-black p-8 lg:p-12">
              <div>
                <h3 className="mb-4 text-lg lg:text-2xl font-bold text-white text-center lg:text-start">
                  {lang == "en" ? "Contact Information" : "Informasi Kontak"}
                </h3>
                <p className="mb-12 max-w-full text-gray-300 text-sm text-center lg:text-lg lg:text-start">
                  {lang == "en"
                    ? "Fill up the form and our Team will get back to you within 24 hours."
                    : "Isi formulir ini dan tim kami akan menghubungi Anda dalam waktu 24 jam."}
                </p>
                <div className="space-y-6">
                  {DATA.map(({ icon: Icon, info }, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center lg:items-start lg:flex-row gap-4"
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
                      <TooltipContent
                        side="bottom"
                        className="px-2 py-1 text-xs"
                      >
                        <p>{sosmed.alt}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
