import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Shield, Star, Lightbulb, Handshake, Eye, Heart,
  ArrowRight, MapPin, CheckCircle2, Award, Users, Target,
  ClipboardCheck, BarChart3, Settings, TrendingUp, RefreshCw,
  MessageCircle,
} from 'lucide-react';
import flowerWatermark from '@/assets/flower-watermark.png';
import { goToHomeSection } from '@/lib/navigation';
const whyPrimeImage = '/Images/porque_a_prime.PNG';

const values = [
  { icon: Shield, title: 'Ética', description: 'Transparência em todas as ações.' },
  { icon: Star, title: 'Compromisso', description: 'Resultados que fazem a diferença.' },
  { icon: Eye, title: 'Transparência', description: 'Comunicação clara e direta.' },
  { icon: Lightbulb, title: 'Proatividade', description: 'Agir com estratégia e precisão técnica.' },
  { icon: Heart, title: 'Versatilidade', description: 'Soluções adaptadas a cada realidade.' },
  { icon: Handshake, title: 'Coletividade', description: 'Trabalho colaborativo com clientes e equipe.' },
];

const methodology = [
  { icon: ClipboardCheck, text: 'Diagnóstico técnico especializado' },
  { icon: BarChart3, text: 'Planejamento estratégico orientado por dados' },
  { icon: Settings, text: 'Implementação de soluções personalizadas' },
  { icon: TrendingUp, text: 'Monitoramento de resultados' },
  { icon: RefreshCw, text: 'Acompanhamento e melhoria contínua' },
];

const differentials = [
  { icon: Award, text: 'Expertise Técnica desde 2015' },
  { icon: Users, text: 'Equipe multidisciplinar especializada' },
  { icon: Target, text: 'Abordagem prática e orientada a resultados' },
  { icon: CheckCircle2, text: 'Metodologias reconhecidas pelo mercado' },
  { icon: MapPin, text: 'Atuação internacional e nacional' },
  { icon: Shield, text: 'Foco em conformidade, padronização e desempenho' },
];

export default function WhyPrimePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Flower watermarks */}
      <img src={flowerWatermark} alt="" aria-hidden="true" className="pointer-events-none fixed right-[-120px] top-[30%] w-[500px] h-[500px] object-contain opacity-[0.04] z-0 select-none" />
      <img src={flowerWatermark} alt="" aria-hidden="true" className="pointer-events-none fixed left-[-150px] bottom-[10%] w-[400px] h-[400px] object-contain opacity-[0.03] z-0 select-none rotate-45" />

      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-primary">
          <div className="container-prime text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Consultoria Industrial Especializada em Alimentos e Bebidas
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Desde 2015 impulsionando desempenho, conformidade e resultados de industriais de todos os tamanhos no Brasil e nos EUA.
            </p>
            <Button variant="consultor" size="lg" asChild>
              <a href="#/" onClick={(e) => { e.preventDefault(); goToHomeSection('contato'); }} className="gap-2">
                Fale com um consultor
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Nossa História */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Nossa História
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  De alimentos à <span className="text-primary">excelência industrial</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  A Prime Consultoria foi fundada em 2015 com foco inicial em atender às demandas técnicas da indústria alimentícia. À medida que avançamos, identificamos a necessidade de aplicar nossa expertise em outras áreas industriais, expandindo nossos serviços para qualidade, produção e gestão ambiental.
                </p>
                <p className="text-muted-foreground text-lg">
                  Hoje, atendemos empresas de diversos setores e portes com o mesmo compromisso de excelência e foco em resultados concretos.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={whyPrimeImage} alt="Equipe Prime Consultoria" className="h-[320px] w-full object-cover object-center md:h-[420px]" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Missão & Visão */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Propósito</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Missão e Visão</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-primary/10 shadow-card">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">Nossa Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolver pessoas e empresas com soluções técnicas que geram competitividade, eficiência operacional e vantagem estratégica no mercado.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-secondary/20 shadow-card">
                <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">Nossa Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência nacional e internacional em consultoria industrial, ofertando metodologias que transformam desafios em crescimento estruturado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Nossos Valores</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                O que nos <span className="text-primary">guia</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presença Geográfica */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Presença Geográfica</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Atuação <span className="text-primary">consolidada</span> no Brasil e nos EUA
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com presença ativa em 8 estados brasileiros — Bahia, Sergipe, Alagoas, Ceará, Piauí, Pernambuco, Maranhão e Minas Gerais — e em Massachusetts (EUA), a Prime combina visão técnica com abrangência operacional.
            </p>
          </div>
        </section>

        {/* Metodologia */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Nossa Metodologia</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Como <span className="text-primary">transformamos</span> empresas
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {methodology.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-foreground font-medium">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Diferenciais <span className="text-primary">Prime</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-primary/10 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary">
          <div className="container-prime text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Pronto para levar sua empresa ao próximo nível?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Fale com um consultor especializado.
            </p>
            <a
              href="https://wa.me/5573988043664"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com um consultor
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
