import React from 'react';
import { OFFICIAL_PLANS_DATA, TRUST_DIFFERENTIALS, BRAND_INFO, getWhatsAppLink } from '../data/portfolioData';
import { Check, Shield, Zap, Smartphone, Headphones, ArrowRight } from 'lucide-react';
import { CoegoLogo } from './CoegoLogo';

export const PricingSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return <Shield className="w-5 h-5 text-brand-cyan" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-brand-cyan" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-brand-cyan" />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-brand-cyan" />;
      default:
        return <Shield className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="planos" className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header exact as in COEGO reference image */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90">
            ESCOLHA O PLANO IDEAL PARA O SEU
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
            <span className="text-white">SITE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_35px_rgba(0,180,255,0.4)]">
              PROFISSIONAL
            </span>
          </h2>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-white/80">
            <span>Design moderno</span>
            <span className="text-brand-cyan">|</span>
            <span>Responsivo</span>
            <span className="text-brand-cyan">|</span>
            <span>Feito para o seu negócio crescer</span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {OFFICIAL_PLANS_DATA.map((plan) => {
            const isPopular = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#081836] via-[#051024] to-[#020713] border-2 border-[#00C8FF] shadow-[0_0_40px_rgba(0,140,255,0.35)] lg:-translate-y-3'
                    : 'bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF]/60 shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-[#0080FF] text-white text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,128,255,0.8)] border border-[#00C8FF]/50">
                    <span>★</span>
                    <span>MAIS POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Title */}
                  <div className="mb-2">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                      <span className="text-white">{plan.name} </span>
                      <span className="text-[#00C8FF]">{plan.highlightWord}</span>
                    </h3>
                  </div>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-sm text-white/90 min-h-[40px] leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-6 flex items-baseline gap-1.5 border-b border-white/10 pb-6">
                    <span className="text-xl sm:text-2xl font-bold text-[#00C8FF]">R$</span>
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white tabular-nums">
                      {plan.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#0080FF] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,128,255,0.5)]">
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                        </div>
                        <span className="text-white font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Interactive Device Mockup Graphic Styled as in the Image */}
                  <div className="mb-6 rounded-2xl p-4 bg-[#020610] border border-[#0080FF]/30 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 border-b border-white/5 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <span className="font-mono text-cyan-400">preview</span>
                    </div>

                    <div className="h-28 rounded-lg bg-gradient-to-br from-[#0A192F] to-[#040C1A] border border-cyan-500/20 p-3 flex flex-col justify-between relative overflow-hidden">
                      {/* Abstract architectural grid lines */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00C8FF_1px,transparent_1px)] [background-size:12px_12px]" />
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded bg-[#00C8FF]" />
                          <span className="text-[10px] font-bold text-white tracking-wider">COEGO</span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">24h Express</span>
                      </div>

                      <div className="relative z-10">
                        <p className="text-xs font-black text-white leading-tight">
                          {plan.mockupHeadline}
                        </p>
                        <p className="text-[10px] text-cyan-300 mt-1">
                          {plan.mockupSubtext}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Plan CTA Button */}
                  <a
                    href={getWhatsAppLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] text-white shadow-[0_0_25px_rgba(0,180,255,0.5)]'
                        : 'bg-[#0A192F] hover:bg-[#0F284D] text-white border border-[#0080FF]/40 hover:border-[#00C8FF]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Trust Differentials Row matching bottom bar of the image */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8 px-6 rounded-3xl bg-[#050B14] border border-[#0080FF]/25 shadow-card mb-12">
          {TRUST_DIFFERENTIALS.map((diff, index) => (
            <div key={index} className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#0080FF]/15 border border-[#00C8FF]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
                {getIcon(diff.icon)}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-white leading-snug">
                  {diff.title}
                </p>
                <p className="text-[11px] font-bold text-[#00C8FF] uppercase tracking-wider">
                  {diff.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Giant Pill CTA matching reference image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 sm:p-6 rounded-full bg-[#050B14] border-2 border-[#0080FF]/40 shadow-[0_0_40px_rgba(0,128,255,0.25)]">
          <a
            href={getWhatsAppLink('Olá Tiago! Vi os planos na COEGO e quero solicitar meu orçamento agora para levar meu negócio para o próximo nível!')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group w-full md:w-auto"
          >
            <div className="w-12 h-12 rounded-full bg-[#0080FF] group-hover:bg-[#00C8FF] text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,140,255,0.7)] transition-all group-hover:scale-105">
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </div>
            <div className="text-left">
              <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#00C8FF] transition-colors uppercase tracking-tight">
                SOLICITE SEU ORÇAMENTO
              </h4>
              <p className="text-xs sm:text-sm font-bold text-white/80">
                E LEVE SEU NEGÓCIO PARA O PRÓXIMO NÍVEL!
              </p>
            </div>
          </a>

          {/* Official COEGO Logo with Glow on the right */}
          <div className="hidden md:flex items-center pr-6">
            <CoegoLogo variant="horizontal" size="sm" showUnderline={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
