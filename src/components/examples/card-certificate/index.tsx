import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface CetificateDataType {
  img?: string;
  title?: string;
  date?: string;
}

export function CardCertificate() {
  const [certificates, setSertificates] = React.useState<CetificateDataType[]>(
    []
  );

  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  // const getCertificates = async () => {
  //   const response = await fetch("/public/data/certificates.json").then((res) =>
  //     res.json()
  //   );
  //   setSertificates(response);
  // };

  React.useEffect(() => {
    setSertificates(data);
  }, []);

  return (
    <Carousel plugins={[plugin.current]} className="mt-10 w-full">
      <CarouselContent>
        {certificates.length > 0 &&
          certificates.map((certificate, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full max-w-3xl mx-auto ">
                <img
                  src={certificate.img}
                  alt={certificate.title}
                  className=" transition-all duration-300 hover:shadow-md hover:shadow-foreground rounded-xl"
                />
                <div className="flex justify-center items-center flex-col mt-5 font-bold">
                  <p className="text-foreground text-sm lg:text-lg text-center lg:text-start">
                    {certificate.title}
                  </p>
                  <p className="text-neutral-500 font-medium text-xs mt-2 lg:text-lg">
                    {certificate.date}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      {window.innerWidth >= 768 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}

const data = [
  {
    img: "/assets/certificates/C1.jpg",
    title: "Web Developer Series 4.0 - Frontend - Dibimbing.com",
    date: "Jul 26, 2024"
  },
  {
    img: "/assets/certificates/C2.jpg",
    title: "Fundamental Frontend Web I - Coding Studio",
    date: "April 27, 2025"
  },
  {
    img: "/assets/certificates/C3.jpg",
    title: "Fundamental Frontend Web II - Coding Studio",
    date: "April 30, 2025"
  },
  {
    img: "/assets/certificates/C4.jpg",
    title: "Learn HTTP for Beginners - Programmer Zaman Now",
    date: "Mei 14, 2025"
  },
  {
    img: "/assets/certificates/C5.jpg",
    title: "Workshop UI/UX Design - Universitas BSI Cikampek",
    date: "Mei 21, 2025"
  },
  {
    img: "/assets/certificates/C6.jpg",
    title: "Database Competency Test - PT Jidoka and Universitas BSI",
    date: "July 01, 2025"
  }
];
