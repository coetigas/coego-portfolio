import React from 'react';
import { X, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { getWhatsAppLink } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000000]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#050B14] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,140,255,0.4)] border-2 border-[#00C8FF]/50 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-black">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-black/60" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 text-white hover:text-[#00C8FF] border border-white/20 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-1">
              {project.category} · {project.client}
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-black text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Delivery & Speed Highlight */}
          <div className="flex items-center gap-2 p-4 rounded-2xl bg-[#081836] border border-[#00C8FF]/40 text-white text-sm font-bold shadow-[0_0_20px_rgba(0,140,255,0.25)]">
            <Clock className="w-5 h-5 text-[#00C8FF] shrink-0" />
            <span>Prazo de execução: <strong className="font-black text-[#00C8FF]">{project.deliveryTime}</strong></span>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-black text-[#00C8FF] uppercase tracking-[0.15em] mb-2">
              SOBRE O PROJETO & DESAFIO
            </h4>
            <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="text-xs font-black text-[#00C8FF] uppercase tracking-[0.15em] mb-3">
              RESULTADOS DE NEGÓCIO CONQUISTADOS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.results.map((res, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#020713] border border-[#0080FF]/30 text-center">
                  <span className="block text-2xl font-black font-mono text-[#00C8FF] tabular-nums">
                    {res.metric}
                  </span>
                  <span className="text-xs text-white/90 mt-1 block font-medium">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-black text-[#00C8FF] uppercase tracking-[0.15em] mb-3">
              SOLUÇÕES IMPLEMENTADAS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <a
              href={getWhatsAppLink(`Olá Tiago! Vi o projeto "${project.title}" no seu portfólio da COEGO e quero um site com padrão semelhante para minha empresa.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-black text-white bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] rounded-2xl transition-all duration-200 shadow-[0_0_25px_rgba(0,180,255,0.4)] text-center"
            >
              <span>Quero um site similar para minha empresa</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 text-sm font-bold text-white/70 hover:text-white transition-colors text-center"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
