import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgAlimentos from '@/assets/services/alimentos.jpg';
import imgProducao from '@/assets/services/producao.jpg';
import imgAmbiental from '@/assets/services/ambiental.jpg';

const services = [
  {
    image: imgAlimentos,
    title: 'Prime Alimentos e Bebidas',
    shortDesc: 'Consultoria especializada na indústria de alimentos e bebidas.',
    areas: ['Regularização', 'Qualidade', 'Conformidade'],
    href: '/servicos/alimentos',
  },
  {
    image: imgProducao,
    title: 'Prime Produção e Qualidade',
    shortDesc: 'Implementação de ferramentas técnicas para padronização e eficiência industrial.',
    areas: ['APPCC', 'ISO22000', 'BPF'],
    href: '/servicos/producao',
  },
  {
    image: imgAmbiental,
    title: 'Prime Ambiental',
    shortDesc: 'Gestão ambiental estratégica para eficiência e responsabilidade industrial.',
    areas: ['Licenciamento', 'PGRS', 'Sustentabilidade'],
    href: '/servicos/ambiental',
  },
];

export function Services() {
  return (
    <section id="servicos" className="section-padding bg-secondary/20">
      <div className="container-prime">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Soluções completas para o{' '}
            <span className="text-primary">sucesso</span> do seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos consultoria especializada em diversas áreas para impulsionar sua empresa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
              className="group block bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-card-hover hover:scale-[1.03] hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.areas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
