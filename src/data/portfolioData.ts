import { Project, Testimonial, ServiceItem, PricingPlan } from '../types';

export const BRAND_INFO = {
  name: 'Tiago.coe',
  brandName: 'COEGO',
  tagline: 'COEGO — Sua marca, em outro nível.',
  headerTagline: 'SEU NEGÓCIO ONLINE COM MAIS RESULTADOS',
  subtitle: 'Criação de sites de alto padrão para empresas que querem aumentar faturamento e clientes.',
  phone: '5542999685388',
  phoneDisplay: '(42) 99968-5388',
  instagram: '_coe.go',
  instagramUrl: 'https://instagram.com/_coe.go',
  location: 'Brasil (Atendimento em todo o território nacional)',
  experience: 'Mais de 5 meses construindo presenças digitais de alto impacto para empresas.',
  coreDifferentiator: 'Entrega no mesmo dia',
  whatsappBaseUrl: 'https://wa.me/5542999685388',
};

export const getWhatsAppLink = (customMessage?: string) => {
  const defaultText = 'Olá Tiago! Vi os planos da COEGO e gostaria de solicitar um orçamento para levar meu negócio para o próximo nível.';
  const text = encodeURIComponent(customMessage || defaultText);
  return `${BRAND_INFO.whatsappBaseUrl}?text=${text}`;
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landing-pages',
    number: '01',
    title: 'Landing Pages de Alta Conversão',
    shortDesc: 'Páginas cirúrgicas desenhadas especificamente para transformar cliques em leads qualificados e vendas diretas no WhatsApp.',
    fullDesc: 'Construídas com copywriting persuasivo, carregamento ultrarrápido (sub-segundo) e hierarquia visual voltada para ação. Perfeitas para tráfego pago (Google Ads, Meta Ads) ou lançamentos pontuais.',
    highlights: [
      'Copywriting estratégico focado no seu cliente ideal',
      'Integração direta com WhatsApp, CRM e formulários',
      'Otimização extrema para celular (Mobile First)',
      'Pixels de rastreamento e tags de conversão configuradas'
    ],
    deliveryGuarantee: 'Entrega no mesmo dia disponível para briefs ágeis',
    idealFor: 'Empresas de serviços, consultorias, clínicas e produtos que precisam de retorno rápido.'
  },
  {
    id: 'institutional',
    number: '02',
    title: 'Sites Institucionais Corporativos',
    shortDesc: 'Presença digital com autoridade máxima, transmitindo a solidez e a credibilidade que empresas de grande porte exigem.',
    fullDesc: 'Um site institucional de alto padrão eleva a percepção de valor da sua marca, permitindo cobrar mais caro pelos seus serviços e fechar contratos de maior ticket médio.',
    highlights: [
      'Design corporativo clean, sofisticado e exclusivo',
      'Páginas de Quem Somos, Serviços, Diferenciais e Contato',
      'SEO técnico para indexação privilegiada no Google',
      'Estrutura modular expansível conforme sua empresa cresce'
    ],
    deliveryGuarantee: 'Projetos expressos entregues com agilidade recorde',
    idealFor: 'Empresas consolidadas, escritórios de advocacia, engenharia, indústrias e holdings.'
  },
  {
    id: 'ecommerce-catalog',
    number: '03',
    title: 'Lojas Virtuais & Catálogos Interativos',
    shortDesc: 'Plataformas intuitivas para vender produtos físicos ou serviços com checkout rápido e experiência de compra impecável.',
    fullDesc: 'Eliminamos qualquer atrito entre o cliente e o pagamento. Vitrines com carregamento imediato, filtros dinâmicos e fechamento facilitado via Pix, cartão ou pedidos no WhatsApp.',
    highlights: [
      'Vitrine limpa com fotos e detalhes em alta resolução',
      'Carrinho ágil e integração de pagamento segura',
      'Opção de fechamento instantâneo via WhatsApp para vendas consultivas',
      'Painel de controle simplificado para cadastro de novos produtos'
    ],
    deliveryGuarantee: 'Estruturação base em tempo recorde',
    idealFor: 'Marcas de varejo, distribuidores, atacado e comércios locais em expansão.'
  },
  {
    id: 'sales-funnel',
    number: '04',
    title: 'Páginas de Vendas & Lançamentos',
    shortDesc: 'Estruturas de apresentação profunda de ofertas de alto valor, treinamentos ou pacotes de serviços premium.',
    fullDesc: 'Cada elemento gráfico, vídeo e bloco de texto é orquestrado para antecipar objeções, demonstrar prova social e conduzir o prospect até a decisão de compra.',
    highlights: [
      'Vídeo de apresentação e seções de quebra de objeções',
      'Blocos visuais de garantias, depoimentos e autoridade',
      'Botões de ação estrategicamente posicionados ao longo da página',
      'Gatilhos visuais de escassez e suporte ao cliente em tempo real'
    ],
    deliveryGuarantee: 'Entrega no mesmo dia para campanhas urgentes',
    idealFor: 'Infoprodutores, palestrantes, cursos corporativos e ofertas de alto ticket.'
  },
  {
    id: 'redesign-optimization',
    number: '05',
    title: 'Redesign & Otimização de Performance',
    shortDesc: 'Transformação radical de sites lentos e ultrapassados em máquinas modernas de geração de negócios.',
    fullDesc: 'Se o seu site atual parece amador ou demora mais de 3 segundos para carregar, você está perdendo dinheiro todos os dias. Modernizamos seu visual e aceleramos seu código.',
    highlights: [
      'Score 95+ no Google PageSpeed Insights',
      'Modernização estética completa alinhada à nova fase da marca',
      'Adequação técnica de responsividade para smartphones',
      'Preservação do histórico e redirecionamentos para não perder tráfego'
    ],
    deliveryGuarantee: 'Migração ágil sem interrupção do seu negócio',
    idealFor: 'Empresas cujo site atual não gera contatos ou passa impressão de amadorismo.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'alianca-corporativa',
    title: 'Aliança Soluções Corporativas',
    client: 'Grupo Aliança B2B',
    category: 'Institucional',
    image: '/src/assets/images/project_corporate_1791868174616.jpg',
    summary: 'Site institucional corporativo para consultoria estratégica empresarial, com foco em fechamento de contratos de alto valor.',
    description: 'O Grupo Aliança precisava de uma plataforma digital sóbria e moderna para apresentar seus serviços a diretores e CEOs de médias e grandes empresas. Desenvolvido com arquitetura corporativa, tipografia precisa e formulário de qualificação que triplica a taxa de agendamento de reuniões.',
    deliveryTime: 'Entregue no mesmo dia (18 horas corridas)',
    results: [
      { metric: '+185%', label: 'Aumento em solicitações de proposta comercial' },
      { metric: '0.8s', label: 'Tempo médio de carregamento no celular' },
      { metric: 'R$ 420k', label: 'Pipeline de novos contratos gerados no primeiro mês' }
    ],
    features: [
      'Layout corporativo executivo com contraste nobre',
      'Formulário inteligente com pré-qualificação de orçamento',
      'Apresentação clara dos 4 pilares de governança da empresa',
      'Botão direto de contato executivo via WhatsApp institucional'
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Clean Semantic Engine'],
    liveUrl: 'https://alianca.exemplo.com.br'
  },
  {
    id: 'auraelia-luxury',
    title: 'Aurælia Essentials',
    client: 'Aurælia Joias & Lifestyle',
    category: 'E-commerce',
    image: '/src/assets/images/project_ecommerce_1791868175664.jpg',
    summary: 'Catálogo e loja virtual minimalista de alta conversão para artigos de joalheria contemporânea e moda.',
    description: 'Estruturação de experiência de compra sem fricção: navegação limpa, fotos em destaque e checkout instantâneo. A integração direta com o canal de atendimento no WhatsApp permitiu que clientes indecisos tirassem dúvidas em menos de 1 minuto, alavancando a taxa de conversão.',
    deliveryTime: 'Entregue em 24 horas',
    results: [
      { metric: '+210%', label: 'Crescimento de pedidos no canal online' },
      { metric: '3.4x', label: 'Mais interações de compra iniciadas no WhatsApp' },
      { metric: '99/100', label: 'Pontuação de usabilidade móvel no Google' }
    ],
    features: [
      'Vitrine responsiva com carregamento instantâneo de fotos',
      'Integração com pagamento por Pix e cartão de crédito',
      'Atendimento consultivo com botão flutuante contextual',
      'Filtros dinâmicos por categoria e faixa de preço'
    ],
    techStack: ['Next-Gen React', 'Tailwind CSS', 'Mobile First Architecture'],
    liveUrl: 'https://aurelia.exemplo.com.br'
  },
  {
    id: 'astra-medical',
    title: 'Astra Medical Clinic',
    client: 'Clínica Astra Saúde Integrada',
    category: 'Landing Page',
    image: '/src/assets/images/project_clinic_1791868175163.jpg',
    summary: 'Landing page médica de alta credibilidade para captação contínua de consultas e procedimentos particulares.',
    description: 'A Clínica Astra necessitava canalizar pacientes do Google Ads e Instagram diretamente para agendamento de consultas com seus especialistas. Criamos uma página com foco absoluto em segurança, corpo clínico e confirmação rápida de data e horário.',
    deliveryTime: 'Entregue no mesmo dia (14 horas do brief ao ar)',
    results: [
      { metric: '+340%', label: 'Mais consultas particulares agendadas por semana' },
      { metric: '-42%', label: 'Redução no custo por lead nas campanhas patrocinadas' },
      { metric: '100%', label: 'Satisfação da equipe de recepção com os leads recebidos' }
    ],
    features: [
      'Agendamento intuitivo com direcionamento direto para a secretária',
      'Apresentação humanizada dos médicos e certificações',
      'Seção de perguntas frequentes para tirar dúvidas de convênios',
      'Design em tons hospitalares nobres e acolhedores'
    ],
    techStack: ['React', 'Tailwind Tokens', 'WhatsApp API Link Routing'],
    liveUrl: 'https://astramedical.exemplo.com.br'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'marcos-silveira',
    name: 'Marcos Silveira',
    role: 'Diretor Comercial',
    company: 'Silveira Logística & Fretes',
    city: 'Curitiba - PR',
    avatarText: 'MS',
    content: 'O Tiago nos surpreendeu demais. Precisávamos colocar uma página no ar com urgência para não perder uma campanha de final de mês e ele entregou nosso site no mesmo dia, exatamente como prometido! O visual ficou impecável e os orçamentos no nosso WhatsApp triplicaram na primeira semana.',
    impactMetric: '+190% novos orçamentos',
    deliveryMention: 'Site no ar em menos de 16 horas',
    rating: 5
  },
  {
    id: 'renata-carvalho',
    name: 'Dra. Renata Carvalho',
    role: 'Fundadora e Cirurgiã',
    company: 'Instituto Carvalho de Estética',
    city: 'São Paulo - SP',
    avatarText: 'RC',
    content: 'A agência anterior demorou 40 dias e me entregou um site horrível que ninguém entendia. O Tiago pegou tudo do zero, fez uma página moderna, limpa e sofisticada. Minhas pacientes elogiam a facilidade de agendar e já estamos lotando a agenda dos procedimentos particulares.',
    impactMetric: 'Agenda de procedimentos lotada',
    deliveryMention: 'Entrega ágil com atendimento direto',
    rating: 5
  },
  {
    id: 'lucas-albuquerque',
    name: 'Lucas Albuquerque',
    role: 'Sócio-Fundador',
    company: 'Prime B2B Representações',
    city: 'Ponta Grossa - PR',
    avatarText: 'LA',
    content: 'A agilidade do Tiago é algo fora da curva. Ele não fica enrolando com reuniões desnecessárias: pega o que sua empresa precisa, monta uma estrutura que vende e entrega pronta para rodar. Recomendo de olhos fechados para qualquer empresário sério.',
    impactMetric: 'ROI pago na 1ª quinzena',
    deliveryMention: 'Entrega no mesmo dia com padrão premium',
    rating: 5
  }
];

export interface DetailedPlan {
  id: string;
  name: string;
  highlightWord: string;
  tagline: string;
  price: string;
  highlighted?: boolean;
  mockupHeadline: string;
  mockupSubtext: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export const OFFICIAL_PLANS_DATA: DetailedPlan[] = [
  {
    id: 'site-simples',
    name: 'SITE',
    highlightWord: 'SIMPLES',
    tagline: 'Ideal para quem está começando e precisa de uma presença online.',
    price: '300,00',
    highlighted: false,
    mockupHeadline: 'Seu negócio mais perto dos seus clientes.',
    mockupSubtext: 'Presença profissional e imediata',
    features: [
      '1 página (institucional)',
      'Design moderno e responsivo',
      'Formulário de contato',
      'Integração com redes sociais',
      'Otimização básica para o Google'
    ],
    ctaLabel: 'Solicitar Site Simples',
    whatsappMessage: 'Olá Tiago! Tenho interesse no plano SITE SIMPLES por R$ 300,00 da COEGO. Como podemos começar?'
  },
  {
    id: 'site-essencial',
    name: 'SITE',
    highlightWord: 'ESSENCIAL',
    tagline: 'Mais páginas, mais informações e mais oportunidades de negócio.',
    price: '600,00',
    highlighted: true,
    mockupHeadline: 'Soluções que impulsionam o seu negócio.',
    mockupSubtext: 'Mais estrutura para gerar vendas',
    features: [
      'Até 5 páginas (ex: home, sobre, serviços, contato, blog)',
      'Design moderno e responsivo',
      'Formulário de contato avançado',
      'Integração com redes sociais',
      'Otimização para o Google (SEO básico)',
      'Painel de gerenciamento (fácil de usar)'
    ],
    ctaLabel: 'Solicitar Site Essencial',
    whatsappMessage: 'Olá Tiago! Quero solicitar o plano mais popular SITE ESSENCIAL por R$ 600,00 para minha empresa.'
  },
  {
    id: 'site-premium',
    name: 'SITE',
    highlightWord: 'PREMIUM',
    tagline: 'A solução completa para quem busca destaque, performance e mais resultados.',
    price: '1.000,00',
    highlighted: false,
    mockupHeadline: 'Grandes ideias geram grandes resultados.',
    mockupSubtext: 'Autoridade máxima e alta escala',
    features: [
      'Até 10 páginas (personalizado)',
      'Design exclusivo e personalizado',
      'Blog integrado',
      'Formulário de contato avançado',
      'Integração com redes sociais',
      'Otimização completa para o Google (SEO)',
      'Painel de gerenciamento (completo)',
      'Suporte prioritário (30 dias)'
    ],
    ctaLabel: 'Solicitar Site Premium',
    whatsappMessage: 'Olá Tiago! Quero o plano completo SITE PREMIUM por R$ 1.000,00 da COEGO para minha empresa.'
  }
];

export const TRUST_DIFFERENTIALS = [
  { title: 'SITE SEGURO', subtitle: 'E CONFIÁVEL', icon: 'shield' },
  { title: 'CARREGAMENTO', subtitle: 'ULTRA RÁPIDO', icon: 'zap' },
  { title: '100% RESPONSIVO', subtitle: 'PARA TODOS OS DISPOSITIVOS', icon: 'smartphone' },
  { title: 'SUPORTE', subtitle: 'ESPECIALIZADO', icon: 'headphones' },
];

export const STATS_DATA = [
  { value: '24h', label: 'Prazo recorde de entrega', note: 'Sites no ar no mesmo dia' },
  { value: '100%', label: 'Foco em conversão real', note: 'Feito para o seu negócio crescer' },
  { value: '5+', label: 'Meses de expansão rápida', note: 'Crescendo com clientes satisfeitos' },
  { value: '0s', label: 'Zero burocracia', note: 'Atendimento direto com Tiago' },
];
