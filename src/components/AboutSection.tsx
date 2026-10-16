import React from 'react';
import { Target, Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#030712] border-b border-[#0080FF]/20 relative overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0080FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial & Profile Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-black tracking-[0.2em] uppercase text-[#00C8FF]">
              QUEM SOU · TIAGO.COE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-balance">
              <span className="text-white block">Crescendo no mercado com </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                foco obstinado no faturamento dos meus clientes.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white leading-relaxed">
              Olá, sou o <strong className="text-[#00C8FF] font-black">Tiago</strong> (criador da marca <strong className="text-white font-black">COEGO</strong>). 
              Crio sites há mais de 5 meses para empresas no geral, crescendo rapidamente no mercado 
              ao entregar o melhor para meus clientes: páginas modernas, ultrarrápidas e pensadas 
              do zero para vender.
            </p>

            <p className="text-base text-white/90 leading-relaxed">
              Enquanto o mercado tradicional de agências enrola semanas em reuniões improdutivas, 
              meu modelo de trabalho é direto ao ponto. Compreendo a essência do seu negócio, 
              desenvolvo uma arquitetura que passa máxima autoridade e coloco sua empresa na internet 
              com o diferencial de <strong className="text-[#00C8FF] font-bold">entrega no mesmo dia</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/80 font-semibold">
              <span className="text-white">Atendimento em todo o Brasil</span>
              <span aria-hidden="true" className="text-[#00C8FF]">·</span>
              <span className="text-white">Comunicação direta via WhatsApp</span>
              <span aria-hidden="true" className="text-[#00C8FF]">·</span>
              <span className="text-cyan-300">Foco em ROI Real</span>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppLink('Olá Tiago! Li sobre sua trajetória na COEGO e quero conversar sobre o site da minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-base font-black text-[#00C8FF] hover:text-white transition-colors group"
              >
                <span>Falar diretamente com Tiago</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Strategic Value Pillars in Luxury Black Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] shadow-card hover:shadow-[0_0_30px_rgba(0,180,255,0.25)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C8FF]/20 to-[#0080FF]/20 border border-[#00C8FF]/40 flex items-center justify-center text-[#00C8FF] mb-4 shadow-[0_0_15px_rgba(0,180,255,0.2)]">
                <Clock className="w-6 h-6 text-[#00C8FF]" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Entrega no Mesmo Dia
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Você não precisa esperar semanas para sua empresa começar a faturar online. Processo ágil e refinado em até 24h.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] shadow-card hover:shadow-[0_0_30px_rgba(0,180,255,0.25)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C8FF]/20 to-[#0080FF]/20 border border-[#00C8FF]/40 flex items-center justify-center text-[#00C8FF] mb-4 shadow-[0_0_15px_rgba(0,180,255,0.2)]">
                <Target className="w-6 h-6 text-[#00C8FF]" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Foco em Mais Clientes
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Cada botão, texto e imagem é posicionado para transformar visitantes casuais em mensagens e orçamentos no seu WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] shadow-card hover:shadow-[0_0_30px_rgba(0,180,255,0.25)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C8FF]/20 to-[#0080FF]/20 border border-[#00C8FF]/40 flex items-center justify-center text-[#00C8FF] mb-4 shadow-[0_0_15px_rgba(0,180,255,0.2)]">
                <Zap className="w-6 h-6 text-[#00C8FF]" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Carregamento Ultra Rápido
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Carregamento instantâneo no celular. Sites rápidos reduzem taxa de rejeição e maximizam seus anúncios.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] shadow-card hover:shadow-[0_0_30px_rgba(0,180,255,0.25)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C8FF]/20 to-[#0080FF]/20 border border-[#00C8FF]/40 flex items-center justify-center text-[#00C8FF] mb-4 shadow-[0_0_15px_rgba(0,180,255,0.2)]">
                <ShieldCheck className="w-6 h-6 text-[#00C8FF]" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Estética Black & Blue Luxo
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Design imponente nas cores preto, azul elétrico e branco, elevando a percepção de alto padrão da sua marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
