import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
const whyPrimeImage = '/Images/porque_a_prime.PNG';

const highlights = [
  'Experiência no ramo',
  'Soluções personalizadas',
  'Empresa renomada',
  'Resultados mensuráveis',
];

export function WhyPrime() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="quem-somos"
      ref={ref}
      className="section-padding bg-[#fff3cf]"
    >
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div
            className={`overflow-hidden rounded-[2rem] bg-[#6f6f6f] shadow-xl transition-all duration-700 ${
              isVisible ? 'translate-y-0' : 'translate-y-6'
            }`}
          >
            <img
              src={whyPrimeImage}
              alt="Equipe Prime Consultoria"
              className="h-[320px] w-full object-cover object-center md:h-[420px] lg:h-[520px]"
              loading="lazy"
            />
          </div>

          <div
            className={`rounded-[2rem] bg-[#6f6f6f] px-6 py-8 text-white shadow-xl transition-all duration-700 delay-150 sm:px-8 md:px-10 md:py-10 lg:px-12 lg:py-14 ${
              isVisible ? 'translate-y-0' : 'translate-y-6'
            }`}
          >
            <span className="inline-block text-sm font-semibold text-secondary uppercase mb-4">
              Por que a Prime?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Nossos diferenciais geram resultados concretos para{' '}
              <span className="text-secondary">sua empresa</span>
            </h2>
            <p className="text-lg text-white/88 mb-4">
              Desde 2015, a Prime Consultoria atua lado a lado com indústrias que buscam organização, 
              conformidade e alta performance. Com presença em 8 estados brasileiros e em Massachusetts (EUA), 
              transformamos desafios operacionais em eficiência, segurança e crescimento estruturado.
            </p>
            <p className="text-lg text-white/88 mb-6">
              Se sua empresa precisa evoluir processos e ganhar competitividade, a Prime é o próximo passo.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-semibold text-white text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="consultor" size="lg" asChild>
              <Link to="/quem-somos" className="gap-2">
                Conheça mais sobre a Prime
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
