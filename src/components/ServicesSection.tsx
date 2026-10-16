import React, { useState } from 'react';
import { SERVICES_DATA, getWhatsAppLink } from '../data/portfolioData';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#000000] border-b border-[#0080FF]/20 relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#00C8FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-[#00C8FF]">
            SERVIÇOS DE ALTO PADRÃO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance">
            <span className="text-white block">Criação de sites no geral, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
              projetados para transformar sua empresa em uma máquina de vendas.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white font-normal leading-relaxed pt-2">
            Cada solução é construída com tecnologia moderna e estética black & blue luxuosa, 
            garantindo que seus visitantes sintam confiança imediata para comprar ou solicitar orçamentos.
          </p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services List / Selector */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === selectedService;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-start gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0A192F] to-[#051024] text-white border-[#00C8FF] shadow-[0_0_25px_rgba(0,140,255,0.35)]'
                      : 'bg-[#050B14] text-white border-[#0080FF]/25 hover:border-[#00C8FF]/50 hover:bg-[#071324]'
                  }`}
                >
                  <span
                    className={`font-mono text-base font-black pt-0.5 ${
                      isActive ? 'text-[#00C8FF]' : 'text-slate-400'
                    }`}
                  >
                    {service.number}.
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-base font-bold mb-1 ${isActive ? 'text-[#00C8FF]' : 'text-white'}`}>
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isActive ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <div className="lg:col-span-7 bg-[#050B14] border-2 border-[#00C8FF]/40 rounded-3xl p-7 sm:p-9 shadow-[0_0_40px_rgba(0,128,255,0.2)]">
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
              <span className="font-mono text-sm font-black text-[#00C8FF] tracking-wider uppercase">
                SOLUÇÃO {activeService.number}
              </span>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-[#0080FF]/20 px-3.5 py-1.5 rounded-full border border-[#00C8FF]/40">
                <Clock className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>{activeService.deliveryGuarantee}</span>
              </div>
            </div>

            <div className="py-6 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                <span className="text-[#00C8FF]">{activeService.title}</span>
              </h3>
              <p className="text-base text-white leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Highlights checklist */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[#00C8FF]">
                  O QUE ESTÁ INCLUSO NESTA ENTREGA:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-white">
                      <CheckCircle className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for box */}
              <div className="mt-6 p-4 rounded-2xl bg-[#020713] border border-[#0080FF]/30">
                <span className="text-xs font-black text-[#00C8FF] uppercase tracking-wider block mb-1">
                  Ideal para:
                </span>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {activeService.idealFor}
                </p>
              </div>
            </div>

            {/* Action footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a
                href={getWhatsAppLink(`Olá Tiago! Tenho interesse no serviço: ${activeService.title}. Gostaria de solicitar um orçamento para minha empresa.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-black text-white bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] rounded-2xl transition-all duration-200 shadow-[0_0_25px_rgba(0,180,255,0.4)] text-center"
              >
                <span>Solicitar este formato</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>

              <span className="text-xs font-semibold text-white/70 text-center sm:text-right">
                Orçamento direto · Entrega no mesmo dia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
