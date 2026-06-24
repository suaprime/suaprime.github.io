import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero/capa-sem-texto.jpg";
import heroSlide2 from "@/assets/hero/slide-2.jpg";
import heroSlide3 from "@/assets/hero/slide-3.jpg";
import { goToHomeSection, goToRouteTop } from "@/lib/navigation";

const slides = [
  {
    image: heroSlide1,
    title: "Prime Consultoria",
    eyebrow: "Seu sucesso é nossa prioridade!",
    subtitle:
      "Consultoria industrial especializada em alimentos e bebidas.",
    cta: { text: "Fale conosco", section: "contato" },
    split: true,
    centered: true,
  },
  {
    image: heroSlide2,
    title: "Prime Alimentos e Bebidas",
    subtitle:
      "Consultoria especializada na indústria de alimentos e bebidas com foco em qualidade e regulamentação.",
    cta: { text: "Saiba mais", route: "/servicos/alimentos" },
    centered: false,
  },
  {
    image: heroSlide3,
    title: "Prime Produção e Qualidade",
    subtitle:
      "Implementação de ferramentas técnicas para padronização e eficiência industrial.",
    cta: { text: "Saiba mais", route: "/servicos/producao" },
    centered: false,
  },
];

const highlights = [
  "Consultoria especializada",
  "Clientes satisfeitos em 8 estados brasileiros",
  "Especialistas em regularização",
];

const stats = [
  { value: "+9", label: "Anos de experiência" },
  { value: "+8", label: "Estados atendidos e EUA" },
  { value: "+150", label: "Empresas atendidas" },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const renderSlideCta = (
    slide: (typeof slides)[number],
    variant: "prime" | "consultor" = "prime",
    className = "gap-2",
  ) => (
    <Button variant={variant} size="lg" asChild>
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          if (slide.cta.route) {
            goToRouteTop(slide.cta.route);
            return;
          }
          if (slide.cta.section) {
            goToHomeSection(slide.cta.section);
          }
        }}
        className={className}
      >
        {slide.cta.text}
        <ArrowRight className="h-4 w-4" />
      </a>
    </Button>
  );

  return (
    <section id="home" className="relative pt-20">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              {slide.split ? (
                <>
                  <div className="bg-[#565755] text-white md:hidden">
                    <img
                      src={slide.image}
                      alt="Equipe Prime Consultoria"
                      className="aspect-[33/14] w-full object-contain object-left-top"
                      fetchPriority="high"
                    />
                    <div className="container-prime pb-16 pt-7">
                      <h1 className="mb-4 text-4xl font-heading font-extrabold leading-[0.95] drop-shadow-lg">
                        Prime
                        <span className="block">Consultoria</span>
                      </h1>
                      {slide.eyebrow ? (
                        <p className="mb-6 text-sm font-semibold uppercase text-white/92 drop-shadow">
                          {slide.eyebrow}
                        </p>
                      ) : null}
                      <p className="mb-8 max-w-[20rem] text-pretty text-xl font-medium italic leading-[1.35] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        {slide.subtitle}
                      </p>
                      {renderSlideCta(slide)}
                    </div>
                  </div>

                  <div className="relative hidden h-[580px] overflow-hidden md:block lg:h-[640px]">
                    <img
                      src={slide.image}
                      alt="Equipe Prime Consultoria"
                      className="absolute inset-0 h-full w-full object-cover object-[16%_center] lg:object-[22%_center]"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/22 to-black/8 lg:from-black/0 lg:via-black/8 lg:to-black/48" />
                    <div className="relative flex h-full items-center">
                      <div className="container-prime flex w-full">
                        <div className="ml-auto max-w-[620px] text-white lg:w-[48%] lg:max-w-[680px]">
                          <h1 className="mb-4 text-6xl font-heading font-extrabold leading-[0.95] drop-shadow-lg lg:text-7xl xl:text-8xl">
                            Prime
                            <span className="block">Consultoria</span>
                          </h1>
                          {slide.eyebrow ? (
                            <p className="mb-8 text-base font-semibold uppercase text-white/92 drop-shadow lg:text-lg">
                              {slide.eyebrow}
                            </p>
                          ) : null}
                          <p className="mb-8 max-w-[34rem] text-pretty text-3xl font-light italic leading-[1.25] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] lg:max-w-[42rem] lg:text-4xl">
                            {slide.subtitle}
                          </p>
                          {renderSlideCta(slide)}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative h-[500px] md:h-[580px] lg:h-[640px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-foreground/60" />
                  <div className="relative flex h-full items-center">
                    <div className={`container-prime ${slide.centered ? "text-center" : ""}`}>
                      <div className={slide.centered ? "mx-auto max-w-4xl" : "max-w-2xl"}>
                        <h1 className="mb-4 text-balance text-3xl font-heading font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                          {slide.title}
                        </h1>
                        <p className="mb-8 text-lg text-white/90 drop-shadow md:text-xl">{slide.subtitle}</p>
                        <Button variant="prime" size="lg" asChild>
                          <a
                            href="#/"
                            onClick={(e) => {
                              e.preventDefault();
                              if (slide.cta.route) {
                                goToRouteTop(slide.cta.route);
                                return;
                              }
                              if (slide.cta.section) {
                                goToHomeSection(slide.cta.section);
                              }
                            }}
                            className="gap-2"
                          >
                            {slide.cta.text}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40 md:flex"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40 md:flex"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === selectedIndex ? "bg-primary" : "bg-white/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-accent py-4">
        <div className="container-prime">
          <div className="flex flex-wrap justify-center gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-base font-medium text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-prime py-12">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl shadow-lg md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 text-center transition-transform duration-300 hover:scale-[1.01] ${
                index === 1 ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
              }`}
            >
              <div className="mb-2 text-5xl font-heading font-bold md:text-6xl">{stat.value}</div>
              <div className="text-base font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
