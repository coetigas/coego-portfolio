import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Star, Clock, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#000000] border-b border-[#0080FF]/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0080FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-[#00C8FF]">
            DEPOIMENTOS & CASOS REAIS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance">
            <span className="text-white block">O que empresários dizem sobre a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
              velocidade e os resultados dos sites que entrego.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white font-normal pt-1">
            Sem burocracia ou promessas vazias. Quem contrata a COEGO comprova a pontualidade e o retorno no caixa.
          </p>
        </div>

        {/* Testimonials Grid with Luxury Black Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(0,180,255,0.25)] transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Rating Stars & Delivery badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#00C8FF] bg-[#0A192F] px-2.5 py-1 rounded-full border border-[#00C8FF]/30">
                    <Clock className="w-3.5 h-3.5 text-[#00C8FF]" />
                    <span>{testimonial.deliveryMention}</span>
                  </div>
                </div>

                {/* Testimonial Quote in White */}
                <p className="text-sm sm:text-base text-white leading-relaxed italic font-normal">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author & Result */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                {/* Highlighted Result */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#00C8FF]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Resultado: {testimonial.impactMetric}</span>
                </div>

                {/* Profile Lockup */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00C8FF] to-[#0080FF] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,180,255,0.4)]">
                    {testimonial.avatarText}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-white/80">
                      {testimonial.role} · {testimonial.company}
                    </p>
                    <p className="text-[11px] text-[#00C8FF] font-semibold">
                      {testimonial.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
