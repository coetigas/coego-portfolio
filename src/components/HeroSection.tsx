import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Zap, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink, STATS_DATA } from '../data/portfolioData';
import { CoegoLogo } from './CoegoLogo';

interface HeroSectionProps {
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#000000] text-white">
      {/* Background Architectural Neon Glowing Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] bg-[#0080FF]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-5 w-[500px] h-[500px] bg-[#00C8FF]/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#0080FF_1px,transparent_1px)] opacity-[0.07] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and High-Intent Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            {/* Value Proposition Kicker with Official Logo Monogram */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#051024] border border-[#00C8FF]/40 text-xs font-bold text-white shadow-[0_0_20px_rgba(0,140,255,0.3)] w-fit">
              <CoegoLogo variant="icon" size="sm" />
              <div className="flex items-center gap-2">
                <span className="text-[#00C8FF] uppercase tracking-wider font-black">Tiago.coe</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span className="text-white font-bold">COEGO Studio Oficial</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span className="text-cyan-300">Brasil</span>
              </div>
            </div>

            {/* Main Eye-Catching Headline with Official COEGO Logo */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center">
                <CoegoLogo variant="horizontal" size="hero" showUnderline={true} />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-black tracking-tight leading-[1.08] text-balance">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#38BDF8] to-[#0080FF] drop-shadow-[0_0_40px_rgba(0,180,255,0.45)]">
                  Sua marca, em outro nível.
                </span>
              </h1>
            </div>

            {/* Subtitle / White sentences with strong authority */}
            <p className="text-base sm:text-lg md:text-xl text-white font-normal leading-relaxed max-w-2xl">
              Desenvolvo sites modernos, rápidos e de alta conversão para empresas que precisam 
              alavancar seu faturamento e conquistar novos clientes diariamente. 
              Sem burocracia ou meses de espera: <strong className="text-[#00C8FF] font-bold">entrego seu site pronto no mesmo dia</strong>.
            </p>

            {/* Competitive Highlights Checklist in Black luxury boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-white">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#050B14] border border-[#0080FF]/30">
                <Clock className="w-5 h-5 text-[#00C8FF] shrink-0" />
                <span><strong className="text-white">Entrega no mesmo dia:</strong> agilidade recorde</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#050B14] border border-[#0080FF]/30">
                <Zap className="w-5 h-5 text-[#00C8FF] shrink-0" />
                <span><strong className="text-white">Foco em vendas:</strong> estrutura para faturar</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#050B14] border border-[#0080FF]/30">
                <CheckCircle2 className="w-5 h-5 text-[#00C8FF] shrink-0" />
                <span><strong className="text-white">Design exclusivo:</strong> estética premium e luxo</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#050B14] border border-[#0080FF]/30">
                <ShieldCheck className="w-5 h-5 text-[#00C8FF] shrink-0" />
                <span><strong className="text-white">Suporte direto:</strong> contato sem intermediários</span>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppLink('Olá Tiago! Quero solicitar um site para minha empresa com entrega no mesmo dia e padrão COEGO.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-white bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] rounded-2xl shadow-[0_0_30px_rgba(0,180,255,0.5)] transition-all duration-200 active:scale-[0.98] text-center"
              >
                <span>Solicitar um site para minha empresa</span>
                <ArrowRight className="w-5 h-5 shrink-0 stroke-[3]" />
              </a>

              <button
                type="button"
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-white bg-[#0A192F] hover:bg-[#0F284D] border border-[#0080FF]/40 hover:border-[#00C8FF] rounded-2xl transition-all duration-200 text-center"
              >
                Enviar briefing rápido
              </button>
            </div>

            {/* Quiet Trust Label */}
            <p className="text-xs text-white/70">
              Atendimento executivo em todo o Brasil · Planos a partir de R$ 300,00 · Lançamento express no ar
            </p>
          </div>

          {/* Right Column: Visual Focal Anchor with Luxury Dark Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-[28px] overflow-hidden border-2 border-[#00C8FF]/40 shadow-[0_0_50px_rgba(0,140,255,0.35)] bg-[#050B14]">
              {/* Studio Setup Image */}
              <img
                src="/src/assets/images/hero_workspace_1791868174076.jpg"
                alt="Ambiente de desenvolvimento e design executivo de sites por Tiago.coe COEGO"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[430px] lg:h-[470px] object-cover object-center"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent pointer-events-none" />

              {/* Overlaid Delivery Differential Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#050B14]/95 backdrop-blur-md border border-[#00C8FF]/50 text-white shadow-[0_0_25px_rgba(0,140,255,0.3)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C8FF] to-[#0080FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,180,255,0.5)]">
                      <Clock className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#00C8FF] uppercase tracking-wider">
                        DIFERENCIAL EXCLUSIVO
                      </p>
                      <h4 className="text-sm font-black text-white">
                        Entrega no Mesmo Dia
                      </h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-black text-white tabular-nums px-2 py-0.5 rounded bg-[#0080FF]/30 border border-[#0080FF]/50">
                      Até 24h
                    </span>
                    <p className="text-[10px] text-white/70 mt-1">Do briefing ao ar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Row (Full-width KPIs strip in luxury black container) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 p-4 rounded-2xl bg-[#050B14] border border-[#0080FF]/25 shadow-subtle">
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white">
                {stat.label}
              </span>
              <span className="text-xs text-white/80">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
