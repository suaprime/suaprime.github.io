import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const whyPrimeImage = '/Images/porque_a_prime.PNG';

const highlights = [
  'Experiência no ramo',
  'Soluções personalizadas',
  'Empresa renomada',
  'Resultados mensuráveis',
];

export function WhyPrime() {
  return (
    <section id="quem-somos" className="section-padding">
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Por que a Prime?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Nossos diferenciais geram resultados concretos para{' '}
              <span className="text-primary">sua empresa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Desde 2015, a Prime Consultoria atua lado a lado com indústrias que buscam organização, 
              conformidade e alta performance. Com presença em 8 estados brasileiros e em Massachusetts (EUA), 
              transformamos desafios operacionais em eficiência, segurança e crescimento estruturado.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Se sua empresa precisa evoluir processos e ganhar competitividade, a Prime é o próximo passo.
            </p>

            {/* Highlight badges like reference */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="prime" size="lg" asChild>
              <Link to="/quem-somos" className="gap-2">
                Conheça mais sobre a Prime
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Photo */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={whyPrimeImage}
              alt="Equipe Prime Consultoria"
              className="w-full h-[320px] md:h-[420px] lg:h-[520px] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
