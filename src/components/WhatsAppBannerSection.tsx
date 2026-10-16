import React from 'react';
import { MessageCircle, Clock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/portfolioData';

export const WhatsAppBannerSection: React.FC = () => {
  return (
    <section id="whatsapp-direto" className="py-16 bg-[#000000] text-white relative overflow-hidden border-b border-[#0080FF]/20">
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#0080FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#051024] via-[#030A18] to-[#020713] p-8 sm:p-12 rounded-[32px] border-2 border-[#00C8FF]/40 shadow-[0_0_40px_rgba(0,140,255,0.3)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-black text-[#00C8FF] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span>Tiago.coe disponível agora no WhatsApp</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              <span>Prefere agilidade máxima? </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                Converse diretamente no WhatsApp.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
              Sem intermediários. Tire suas dúvidas em tempo real, escolha o plano ideal (a partir de R$ 300,00) 
              e inicie o desenvolvimento com nosso compromisso de <strong className="text-[#00C8FF] font-bold">entrega no mesmo dia</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00C8FF]" />
                <span>Resposta média em 5 minutos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#00C8FF]" />
                <span>Briefing expresso simplificado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00C8FF]" />
                <span>Atendimento direto pelo fundador</span>
              </div>
            </div>
          </div>

          {/* Action Card with Glowing Button */}
          <div className="flex flex-col items-center sm:items-stretch gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={getWhatsAppLink('Olá Tiago! Vi o contato no portfólio da COEGO e quero conversar agora sobre o site da minha empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-base shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-200 active:scale-[0.98] text-center"
            >
              <MessageCircle className="w-6 h-6 shrink-0" />
              <span>Chamar no WhatsApp ({BRAND_INFO.phoneDisplay})</span>
              <ArrowRight className="w-5 h-5 shrink-0 stroke-[3] hidden sm:inline-block" />
            </a>

            <p className="text-center text-xs font-semibold text-white/70">
              Clique para abrir conversa imediata no celular ou computador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
