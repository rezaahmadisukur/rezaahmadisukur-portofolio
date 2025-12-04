import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export function CardCertificate() {
  const [certificates, setSertificates] = React.useState<[]>([]);

  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  const getCertificates = async () => {
    const response = await fetch("/src/data/certificates.json").then((res) =>
      res.json()
    );
    setSertificates(response);
  };

  React.useEffect(() => {
    getCertificates();
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mt-10 border border-transparent"
    >
      <CarouselContent>
        {certificates.length > 0 &&
          certificates.map(
            (
              certificate: { img: string; title: string; date: string },
              index
            ) => (
              <CarouselItem key={index}>
                <div className="p-1 w-full max-w-3xl mx-auto">
                  <img
                    src={certificate.img}
                    alt={certificate.title}
                    className=" transition-all duration-300 hover:shadow-md hover:shadow-foreground border rounded-xl"
                  />
                  <div className="flex justify-center items-center flex-col mt-5 font-bold">
                    <p className="text-foreground text-lg">
                      {certificate.title}
                    </p>
                    <p className="text-neutral-500 font-medium">
                      {certificate.date}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            )
          )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
