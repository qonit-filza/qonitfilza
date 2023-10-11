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
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;

            Array.from(children).forEach((child) => {
              if (child.classList.contains("horizontal")) {
                child.classList.add("w-full");
              } else if (child.classList.contains("vertical")) {
                child.classList.add("h-full");
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      },
    );

    if (card.current) observer.observe(card.current);

    return () => {
      if (card.current) observer.unobserve(card.current);
    };
  }, []);

  return (
    <a
      ref={card}
      href={`/portfolio/${slug}`}
      className="porto-card shadow-transition group relative ml-2 inline-flex h-auto w-full translate-x-0 translate-y-0 flex-col bg-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-retro"
      style={{ viewTransitionName: "container-" + slug }}
    >
      <div className="horizontal card-border absolute z-10 h-0.5 w-0 bg-gray-300 transition-[width] delay-0 duration-200 group-hover:bg-black"></div>
      <div className="vertical card-border absolute right-0 top-0 z-10 h-0 w-0.5 bg-gray-300 transition-[height] delay-200 duration-200 group-hover:bg-black"></div>
      <div className="horizontal card-border absolute bottom-0 right-0 z-10 h-0.5 w-0 bg-gray-300 transition-[width] delay-[400ms] duration-200 group-hover:bg-black"></div>
      <div className="vertical card-border absolute bottom-0 z-10 h-0 w-0.5 bg-gray-300 transition-[height] delay-[600ms] duration-200 group-hover:bg-black"></div>
      {children}
    </a>
  );
}
