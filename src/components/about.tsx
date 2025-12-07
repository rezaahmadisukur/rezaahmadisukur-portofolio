import { PixelImage } from "./ui/pixel-image";
import { useContext, useRef } from "react";
import { useInView, motion } from "motion/react";
import { Context } from "@/contexts/context";
import { GradientText } from "./animate-ui/primitives/texts/gradient";
import { AnimatedGradientTextDemo } from "./examples/gradient-text";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { lang } = useContext(Context);

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          className="grid items-center xl:grid-cols-3 gap-15 xl:gap-50"
        >
          <div className="xl:col-span-1">
            <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
              <AnimatedGradientTextDemo>About</AnimatedGradientTextDemo>
              <div ref={ref} className="relative mt-10">
                {isInView && (
                  <PixelImage
                    src="/assets/images/profile.jpg"
                    customGrid={{ rows: 6, cols: 6 }}
                    grayscaleAnimation
                    maxAnimationDelay={3000}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Content About Me */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="xl:col-span-2"
          >
            <div className="flex flex-col gap-10 xl:items-start items-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                <h1 className="flex flex-col gap-3 w-full xl:items-start items-center">
                  <span className="flex gap-3 w-fit items-center">
                    {lang == "en" ? "Hi there !" : "Halo !"}
                    <img
                      src="/assets/gifs/wave.gif"
                      alt="..."
                      className="xl:w-[50px] w-[30px]"
                    />
                  </span>
                  <div className="flex gap-2 text-2xl lg:text-4xl xl:text-5xl">
                    {lang == "en" ? "I'm" : "Saya"}
                    <GradientText text="Reza Ahmadi Sukur" />
                  </div>
                </h1>
              </div>
              {lang == "en" ? (
                <div className="flex flex-col gap-10 items-center xl:items-start text-center xl:text-start">
                  <p className="leading-normal">
                    An aspiring Web Developer focused on building functional and
                    user-friendly websites. I enjoy the process of turning code
                    into beautiful interfaces using React and Tailwind. For me,
                    every line of code is an opportunity to learn something new.
                    In this portfolio, you can explore my dedication through
                    various open-source projects and personal experiments I've
                    built from scratch.
                  </p>
                  <p className="leading-normal">
                    With expertise in React, and Javascript technologies, I
                    enjoy building scalable and user-friendly applications that
                    solve real-world problems. My background in computer science
                    has given me a strong foundation in algorithms, data
                    structures, and system design, which I apply to create
                    efficient and maintainable code.
                  </p>
                  <p className="leading-normal">
                    I am always looking for opportunities to apply my knowledge
                    and skills in developing groundbreaking software, bringing
                    bring high value to society. I am passionate about creating
                    great products and meeting user needs. I am always ready to
                    contribute to interesting and exciting projects, and look
                    forward to continuing to grow and expand my capabilities in
                    the field of software development
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-10 items-center xl:items-start text-center xl:text-start">
                  <p className="leading-normal">
                    Seorang calon pengembang web yang berfokus pada pembuatan
                    situs web yang fungsional dan ramah pengguna. Saya menikmati
                    proses mengubah kode menjadi antarmuka yang indah
                    menggunakan React dan Tailwind. Bagi saya, setiap baris kode
                    adalah kesempatan untuk belajar hal baru. Dalam portofolio
                    ini, Anda dapat melihat dedikasi saya melalui berbagai
                    proyek open-source dan eksperimen pribadi yang telah saya
                    bangun dari nol.
                  </p>
                  <p className="leading-normal">
                    Dengan keahlian dalam React dan teknologi JavaScript, saya
                    menikmati membangun aplikasi yang skalabel dan ramah
                    pengguna yang memecahkan masalah dunia nyata. Latar belakang
                    saya dalam ilmu komputer telah memberikan dasar yang kuat
                    dalam algoritma, struktur data, dan desain sistem, yang saya
                    terapkan untuk menciptakan kode yang efisien dan mudah
                    dipelihara.
                  </p>
                  <p className="leading-normal">
                    Saya selalu mencari kesempatan untuk menerapkan pengetahuan
                    dan keterampilan saya dalam mengembangkan perangkat lunak
                    inovatif, yang memberikan nilai tambah yang tinggi bagi
                    masyarakat. Saya sangat antusias dalam menciptakan produk
                    yang hebat dan memenuhi kebutuhan pengguna. Saya selalu siap
                    berkontribusi pada proyek-proyek menarik dan menantang, dan
                    menantikan kesempatan untuk terus berkembang dan memperluas
                    kemampuan saya di bidang pengembangan perangkat lunak.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
