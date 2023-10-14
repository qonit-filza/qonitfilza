import { useEffect, useRef } from "react";

export default function CardContainer({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}): React.ReactNode {
  const card = useRef(null);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const classes = [
            "-translate-x-1",
            "-translate-y-1",
            "border-4",
            "shadow-retro",
          ];
          const image = entry.target.querySelector(".card-image");
          const imageClasses = ["border-black", "grayscale-0"];

          if (entry.isIntersecting) {
            entry.target.classList.add(...classes);
            image?.classList.add(...imageClasses);
          } else {
            entry.target.classList.remove(...classes);
            image?.classList.remove(...imageClasses);
          }
        });
      },
      {
        threshold: 1,
      },
    );

    if (card.current && viewportWidth < 768) observer.observe(card.current);

    return () => {
      if (card.current && viewportWidth < 768) observer.unobserve(card.current);
    };
  }, []);

  return (
    <a
      ref={card}
      href={`/portfolio/${slug}`}
      className="porto-card shadow-transition group relative ml-2 inline-flex h-auto w-full translate-x-0 translate-y-0 flex-col border border-black bg-white transition-all md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:border-4 md:hover:shadow-retro"
      style={{ viewTransitionName: "container-" + slug }}
    >
      {children}
    </a>
  );
}
