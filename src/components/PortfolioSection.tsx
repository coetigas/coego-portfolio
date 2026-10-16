import React, { useState } from 'react';
import { PROJECTS_DATA, getWhatsAppLink } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, Clock, Eye } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'Landing Page', label: 'Landing Pages' },
    { id: 'Institucional', label: 'Sites Institucionais' },
    { id: 'E-commerce', label: 'Lojas & Catálogos' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#030712] border-b border-[#0080FF]/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#0080FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-black tracking-[0.2em] uppercase text-[#00C8FF]">
              PORTFÓLIO EXCLUSIVO COEGO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance">
              <span className="text-white block">Projetos reais criados para </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                alavancar faturamento e autoridade no mercado.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white font-normal pt-1">
              Estruturas pensadas nos mínimos detalhes para converter visitantes em clientes pagantes com entrega expressa.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#050B14] border border-[#0080FF]/30 rounded-2xl self-start md:self-auto overflow-x-auto max-w-full shadow-card">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-black rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#00C8FF] to-[#0080FF] text-white shadow-[0_0_15px_rgba(0,180,255,0.5)]'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Luxury Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#050B14] rounded-[28px] overflow-hidden border border-[#0080FF]/30 hover:border-[#00C8FF] shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(0,180,255,0.3)] transition-all duration-300 flex flex-col group"
            >
              {/* Project Image Container */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Floating Quick Action Button on Hover */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-[#0080FF] text-white text-xs font-black flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,140,255,0.6)] opacity-95 group-hover:opacity-100 transition-opacity"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Detalhes</span>
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Clean Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span className="text-[#00C8FF] uppercase tracking-wider">{project.category}</span>
                    <span aria-hidden="true" className="text-white/40">·</span>
                    <span className="text-white/80">{project.client}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00C8FF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Summary in White */}
                  <p className="text-sm text-white/90 line-clamp-2 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Quantified Business Metric & Delivery Time */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/70">Resultado comprovado:</span>
                    <span className="font-mono font-black text-[#00C8FF] tabular-nums text-sm">
                      {project.results[0]?.metric} {project.results[0]?.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white font-medium">
                    <Clock className="w-4 h-4 text-[#00C8FF] shrink-0" />
                    <span>{project.deliveryTime}</span>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-black text-[#00C8FF] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Conhecer estudo de caso</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Olá Tiago! Gostei do projeto "${project.title}" e quero solicitar um site similar para minha empresa.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3.5 py-2 rounded-xl bg-[#081836] hover:bg-[#0080FF] text-white border border-[#00C8FF]/40 transition-colors shadow-subtle"
                  >
                    Pedir similar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA Banner for Portfolio in Deep Black & Neon Blue */}
        <div className="mt-16 p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-[#051024] to-[#020713] border-2 border-[#00C8FF]/50 shadow-[0_0_40px_rgba(0,140,255,0.3)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Sua empresa precisa de um site que realmente traga faturamento?
            </h4>
            <p className="text-sm sm:text-base text-white/90">
              Solicite hoje mesmo e aproveite o diferencial de entrega no mesmo dia.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Olá Tiago! Vi seu portfólio luxuoso e quero solicitar um site para minha empresa com entrega no mesmo dia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] text-white text-sm sm:text-base font-black shadow-[0_0_25px_rgba(0,180,255,0.6)] transition-all whitespace-nowrap active:scale-[0.98]"
          >
            Solicitar um site para minha empresa
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
