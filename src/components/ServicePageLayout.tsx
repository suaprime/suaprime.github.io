import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import flowerWatermark from '@/assets/flower-watermark.png';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MethodologyStep {
  text: string;
  icon?: LucideIcon;
}

interface ServicePageProps {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  whatIsTitle: string;
  whatIsContent: string[];
  targetTitle: string;
  targetIntro: string;
  targetItems: string[];
  services: ServiceItem[];
  servicesTitle: string;
  benefits: string[];
  methodology: MethodologyStep[];
  methodologyIntro: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  seoKeywords: string[];
}

export function ServicePageLayout({
  heroTitle,
  heroSubtitle,
  heroImage,
  whatIsTitle,
  whatIsContent,
  targetTitle,
  targetIntro,
  targetItems,
  services,
  servicesTitle,
  benefits,
  methodology,
  methodologyIntro,
  ctaTitle,
  ctaSubtitle,
  ctaButton,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <img src={flowerWatermark} alt="" aria-hidden="true" className="pointer-events-none fixed right-[-120px] top-[30%] w-[500px] h-[500px] object-contain opacity-[0.04] z-0 select-none" />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero - Full width, taller */}
        <section className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/65" />
          <div className="container-prime relative h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg max-w-4xl">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8 drop-shadow">
              {heroSubtitle}
            </p>
            <Button variant="consultor" size="lg" asChild>
              <a href="https://wa.me/5573988043664" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Fale com um consultor
              </a>
            </Button>
          </div>
        </section>

        {/* "O que é" - Two column layout like reference */}
        <section className="py-16 md:py-20">
          <div className="container-prime">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Sobre o serviço
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                  {whatIsTitle}
                </h2>
              </div>
              <div>
                {whatIsContent.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA strip */}
        <section className="bg-primary py-5">
          <div className="container-prime flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <p className="text-primary-foreground font-medium text-center sm:text-left">
              Toque no botão para falar conosco por WhatsApp e tire sua dúvida agora mesmo!
            </p>
            <a
              href="https://wa.me/5573988043664"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-6 py-3 rounded-lg hover:bg-background/90 transition-colors whitespace-nowrap border-2 border-background"
            >
              <MessageCircle className="w-4 h-4" />
              FALE CONOSCO
            </a>
          </div>
        </section>

        {/* Para quem - with side accent */}
        <section className="py-16 md:py-20 bg-accent/50">
          <div className="container-prime">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Público-alvo
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {targetTitle}
                </h2>
                <p className="text-muted-foreground text-lg">{targetIntro}</p>
              </div>
              <div className="space-y-3">
                {targetItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serviços - Grid with colored icon blocks */}
        <section className="py-16 md:py-20">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                O que fazemos
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{servicesTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios - Full-width colored section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-prime">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-3">
                Benefícios
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Benefícios que sua empresa vai conquistar
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="text-primary-foreground font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologia - Numbered steps with visual timeline */}
        <section className="py-16 md:py-20">
          <div className="container-prime">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Metodologia
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{methodologyIntro}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {methodology.map((step, i) => (
                <div key={i} className="relative text-center p-6 rounded-2xl bg-accent border border-border/50">
                  {step.icon ? (
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <step.icon className="h-7 w-7" />
                      </div>
                    </div>
                  ) : null}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-heading font-bold text-lg shadow-md">
                    {i + 1}
                  </div>
                  <p className="text-foreground font-semibold text-sm">{step.text}</p>
                  {i < methodology.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-secondary">
          <div className="container-prime text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              {ctaTitle}
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              {ctaSubtitle}
            </p>
            <a
              href="https://wa.me/5573988043664"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {ctaButton}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
