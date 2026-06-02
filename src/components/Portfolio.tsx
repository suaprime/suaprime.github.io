import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { excludedClientLogos, featuredClientLogoClasses } from "@/lib/clients";

const logoModules = import.meta.glob("@/assets/clients/*.{png,jpg,jpeg,jfif,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const prettyNameFromPath = (filePath: string) => {
  const fileName = filePath.split("/").pop() ?? "";
  const base = fileName.replace(/\.[^/.]+$/, "");
  return base
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const clients = Object.entries(logoModules)
  .map(([filePath, logo]) => ({
    name: prettyNameFromPath(filePath),
    logo,
  }))
  .filter((client) => !excludedClientLogos.includes(client.name.toLowerCase()))
  .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-prime">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nosso Portfólio
          </span>
          <h2 className="mb-6 text-3xl font-heading font-bold text-foreground md:text-4xl">
            Empresas que <span className="text-primary">confiam</span> em nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Temos orgulho de trabalhar com empresas que buscam excelência e qualidade.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="min-w-0 flex-[0_0_40%] sm:flex-[0_0_28%] md:flex-[0_0_20%] lg:flex-[0_0_16%]"
                >
                  <div className="group aspect-square rounded-xl border border-border/50 bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-card-hover">
                    <div className="flex h-full items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`max-h-20 max-w-full object-contain opacity-75 grayscale saturate-[0.85] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 ${
                          featuredClientLogoClasses[client.name.toLowerCase().replace(/\s+/g, "")] ?? ""
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
