import { useInView } from "motion/react";
import { useRef } from "react";

const LazySection = ({
  id,
  children
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id={id} ref={ref}>
      {isInView ? children : <div className="h-screen" />}
    </section>
  );
};

export default LazySection;
