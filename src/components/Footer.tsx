import React from 'react';
import { BRAND_INFO, getWhatsAppLink } from '../data/portfolioData';
import { MessageCircle, Instagram, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CoegoLogo } from './CoegoLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white border-t border-[#0080FF]/25 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-[#0080FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <CoegoLogo variant="horizontal" size="md" showUnderline={true} />
            </div>

            <p className="text-sm font-bold text-[#00C8FF] uppercase tracking-wider">
              {BRAND_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed font-normal">
              Criação de sites de alto padrão e alta conversão para empresas que querem 
              aumentar faturamento e o fluxo diário de clientes, com planos a partir de R$ 300,00 
              e entrega no mesmo dia.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#050B14] hover:bg-[#081836] border border-[#0080FF]/30 hover:border-[#00C8FF] flex items-center justify-center text-white transition-all shadow-subtle"
                aria-label="Instagram @_coe.go"
              >
                <Instagram className="w-4 h-4 text-[#00C8FF]" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#050B14] hover:bg-[#081836] border border-[#0080FF]/30 hover:border-[#00C8FF] flex items-center justify-center text-white transition-all shadow-subtle"
                aria-label="WhatsApp direto"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-[#00C8FF] uppercase tracking-[0.15em]">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white font-medium">
              <li>
                <a href="#inicio" className="hover:text-[#00C8FF] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#00C8FF] transition-colors">Sobre Tiago.coe</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#00C8FF] transition-colors">Serviços Oferecidos</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#00C8FF] transition-colors">Portfólio de Projetos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#00C8FF] transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-[#00C8FF] transition-colors">Planos (R$ 300 / 600 / 1.000)</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#00C8FF] transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-[#00C8FF] uppercase tracking-[0.15em]">
              CANAIS DIRETOS
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-white font-medium">
              <div>
                <strong className="text-white/60 block text-[11px] uppercase tracking-wider mb-0.5">
                  WhatsApp Oficial:
                </strong>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00C8FF] font-mono text-base font-bold transition-colors flex items-center gap-1.5 text-white"
                >
                  <span>{BRAND_INFO.phoneDisplay}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00C8FF]" />
                </a>
              </div>

              <div>
                <strong className="text-white/60 block text-[11px] uppercase tracking-wider mb-0.5">
                  Instagram Oficial:
                </strong>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00C8FF] transition-colors flex items-center gap-1.5 text-white font-bold"
                >
                  <span>@{BRAND_INFO.instagram}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00C8FF]" />
                </a>
              </div>

              <div>
                <strong className="text-white/60 block text-[11px] uppercase tracking-wider mb-0.5">
                  Abrangência Nacional:
                </strong>
                <span className="text-white">Atendimento a empresas em todo o território brasileiro</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantia de pontualidade, entrega no mesmo dia e satisfação</span>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4 font-medium">
          <p>© {currentYear} COEGO · Tiago.coe. Todos os direitos reservados.</p>
          <p className="text-[#00C8FF]">Feito para empresas que priorizam faturamento e alta conversão.</p>
        </div>
      </div>
    </footer>
  );
};
