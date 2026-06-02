import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield, ClipboardCheck, Settings, BookOpen, Target, Search, ClipboardList, Cog, Users, ClipboardPenLine } from 'lucide-react';
import imgAlimentos from '@/assets/services/alimentos.jpg';

export default function PrimeAlimentosPage() {
  return (
    <ServicePageLayout
      heroTitle="Consultoria para Indústria de Alimentos e Bebidas"
      heroSubtitle="Soluções técnicas para controle de qualidade, conformidade regulatória e performance operacional."
      heroImage={imgAlimentos}
      whatIsTitle="O que é a Prime Alimentos"
      whatIsContent={[
        'A Prime Alimentos é uma unidade especializada da Prime Consultoria dedicada a atender empresas dos setores de alimentos e bebidas. Com uma abordagem técnica e orientada a resultados, ajudamos nossos clientes a implementar práticas eficientes de controle de qualidade, conformidade sanitária, gestão de processos e melhorias operacionais.',
      ]}
      targetTitle="Para quem é esta consultoria"
      targetIntro="Nosso serviço é ideal para:"
      targetItems={[
        'Indústrias alimentícias que precisam atender normas legais e regulatórias',
        'Empresas que desejam aprimorar seus sistemas de qualidade',
        'Fábricas que buscam reduzir desperdícios e perdas',
        'Negócios que querem padronizar seus processos produtivos',
        'Equipes que buscam capacitação em Boas Práticas de Fabricação',
      ]}
      servicesTitle="Serviços Principais"
      services={[
        { icon: Shield, title: 'Controle de Qualidade', description: 'Implementamos ferramentas técnicas e sistemas para garantir produtos dentro de padrões e especificações exigidos pelo mercado e pela legislação.' },
        { icon: ClipboardCheck, title: 'Conformidade Sanitária', description: 'Assessoria completa para adequação às exigências do MAPA, órgãos estaduais e municipais, com foco em documentação, processos e auditorias.' },
        { icon: Settings, title: 'Padronização de Processos', description: 'Estruturamos procedimentos padronizados de produção, teste e inspeção com o objetivo de reduzir variabilidade e retrabalho.' },
        { icon: BookOpen, title: 'Boas Práticas de Fabricação (BPF)', description: 'Capacitação, revisão e criação de BPF conforme exigências legais e certificações aplicáveis ao setor alimentício.' },
        { icon: Target, title: 'Planos de Ação e Implementação', description: 'Projetos sob medida com cronograma, responsabilidade técnica e acompanhamento.' },
      ]}
      benefits={[
        'Produtos com mais qualidade e confiabilidade',
        'Redução de desperdícios e retrabalhos',
        'Maior competitividade no mercado',
        'Atendimento às exigências legais obrigatórias',
        'Processos mais eficientes e padronizados',
        'Preparação para auditorias internas e externas',
      ]}
      methodology={[
        { text: 'Diagnóstico detalhado', icon: Search },
        { text: 'Planejamento customizado', icon: ClipboardList },
        { text: 'Implementação com equipe técnica', icon: Cog },
        { text: 'Treinamento e capacitação', icon: Users },
        { text: 'Monitoramento de resultados', icon: ClipboardPenLine },
      ]}
      methodologyIntro="Nossa abordagem é simples, clara e técnica:"
      ctaTitle="Pronto para evoluir a qualidade e desempenho da sua fábrica?"
      ctaSubtitle="Solicite um Diagnóstico Técnico Personalizado com nosso time especializado."
      ctaButton="Falar com um especialista"
      seoKeywords={[
        'consultoria para indústria alimentícia',
        'serviço de consultoria em alimentos e bebidas',
        'controle de qualidade alimentos',
        'conformidade sanitária alimentos',
        'padronização de processos alimentares',
        'boas práticas de fabricação (BPF)',
        'eficiência produtiva alimentícia',
        'consultoria técnica ANVISA indústria',
      ]}
    />
  );
}
