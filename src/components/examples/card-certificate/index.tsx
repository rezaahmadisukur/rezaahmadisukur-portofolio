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

  const plugin = React.useRef(Autoplay({ delay: 3000 }));

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
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {certificates.length > 0 &&
          certificates.map((certificate: { img: string }, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full max-w-3xl mx-auto">
                <img
                  src={certificate.img}
                  alt=""
                  className=" transition-all duration-300 hover:shadow-2xl hover:shadow-foreground border rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
