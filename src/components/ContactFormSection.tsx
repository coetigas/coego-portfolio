import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Instagram, Clock, MapPin } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/portfolioData';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    siteType: 'Site Essencial (R$ 600,00)',
    urgency: 'Entrega no mesmo dia (Urgente)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Por favor, preencha pelo menos o seu nome e WhatsApp.');
      return;
    }

    setError(null);
    setSubmitted(true);

    // Build formatted message for WhatsApp
    const text = `Olá Tiago! Solicitação de Orçamento COEGO:\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'Não informado'}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Plano de Interesse:* ${formData.siteType}\n` +
      `*Urgência:* ${formData.urgency}\n` +
      (formData.message ? `*Detalhes do Projeto:* ${formData.message}` : '');

    const waUrl = getWhatsAppLink(text);

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#030712] border-b border-[#0080FF]/20 relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0080FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contacts & Context */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <div className="text-xs font-black tracking-[0.2em] uppercase text-[#00C8FF]">
                ATENDIMENTO EXECUTIVO
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-balance">
                <span className="text-white block">Solicite um site para sua </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#0080FF] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                  empresa agora mesmo.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-white font-normal leading-relaxed pt-2">
                Preencha o formulário ao lado para iniciarmos seu briefing ou chame direto no WhatsApp. 
                Se você precisa de rapidez máxima, aproveite nossa <strong className="text-[#00C8FF] font-bold">entrega no mesmo dia</strong>.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href={getWhatsAppLink('Olá Tiago! Quero solicitar um site para minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] hover:shadow-[0_0_25px_rgba(0,180,255,0.3)] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#00C8FF] uppercase tracking-wider block">
                    WHATSAPP DIRETO
                  </span>
                  <strong className="text-base sm:text-lg font-black text-white">
                    {BRAND_INFO.phoneDisplay}
                  </strong>
                  <span className="text-xs text-emerald-400 block font-semibold">
                    Resposta rápida com Tiago
                  </span>
                </div>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] hover:shadow-[0_0_25px_rgba(0,180,255,0.3)] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#00C8FF] uppercase tracking-wider block">
                    INSTAGRAM OFICIAL
                  </span>
                  <strong className="text-base sm:text-lg font-black text-white">
                    @{BRAND_INFO.instagram}
                  </strong>
                  <span className="text-xs text-white/70 block">
                    Acompanhe lançamentos e projetos
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#050B14] border border-[#0080FF]/30">
                <div className="w-12 h-12 rounded-2xl bg-[#0080FF]/20 border border-[#00C8FF]/40 text-[#00C8FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#00C8FF] uppercase tracking-wider block">
                    ÁREA DE COBERTURA
                  </span>
                  <strong className="text-base font-black text-white">
                    Atendimento em todo o Brasil
                  </strong>
                  <span className="text-xs text-white/70 block">
                    100% digital, sem barreiras geográficas
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#051024] border border-[#00C8FF]/30 flex items-center gap-3 text-xs text-white">
              <Clock className="w-4 h-4 text-[#00C8FF] shrink-0" />
              <span className="font-medium">
                Atendimento ágil para empresas com urgência de publicação comercial.
              </span>
            </div>
          </div>

          {/* Right Column: High-Conversion Form in Luxury Dark */}
          <div className="lg:col-span-7 bg-[#050B14] rounded-[28px] p-7 sm:p-9 border-2 border-[#00C8FF]/40 shadow-[0_0_40px_rgba(0,140,255,0.25)] text-white">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
                  Os dados foram formatados e estamos abrindo o WhatsApp para você confirmar a mensagem diretamente com o Tiago.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppLink(`Olá Tiago! Confirmo minha solicitação para a empresa ${formData.company || formData.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-gradient-to-r from-[#00C8FF] to-[#0080FF] text-white text-sm font-black rounded-2xl shadow-[0_0_20px_rgba(0,180,255,0.5)]"
                  >
                    Abrir conversa no WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        siteType: 'Site Essencial (R$ 600,00)',
                        urgency: 'Entrega no mesmo dia (Urgente)',
                        message: '',
                      });
                    }}
                    className="px-4 py-3 text-xs font-bold text-white/70 hover:text-white"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    Formulário de Orçamento Rápido
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    Preencha os dados e receba resposta prioritária no WhatsApp.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500 text-xs text-red-200">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0080FF]/30 bg-[#020713] text-sm text-white placeholder-slate-500 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-2">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Clínica Alpha ou Silva Transportes"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0080FF]/30 bg-[#020713] text-sm text-white placeholder-slate-500 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-2">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (42) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0080FF]/30 bg-[#020713] text-sm text-white placeholder-slate-500 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-2">
                      Plano de Interesse
                    </label>
                    <select
                      value={formData.siteType}
                      onChange={(e) => setFormData({ ...formData, siteType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0080FF]/30 bg-[#020713] text-sm text-white focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    >
                      <option value="Site Simples (R$ 300,00)">Site Simples — R$ 300,00 (1 página)</option>
                      <option value="Site Essencial (R$ 600,00)">Site Essencial — R$ 600,00 (Até 5 páginas - Mais Popular)</option>
                      <option value="Site Premium (R$ 1.000,00)">Site Premium — R$ 1.000,00 (Até 10 páginas completo)</option>
                      <option value="Loja Virtual / Catálogo">Loja Virtual ou Catálogo de Produtos</option>
                      <option value="Redesign / Modernização">Redesign de Site Existente</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-2">
                    Urgência de Entrega
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0080FF]/30 bg-[#020713] text-sm text-white focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                  >
                    <option value="Entrega no mesmo dia (Urgente)">Entrega no mesmo dia (Preciso urgente)</option>
                    <option value="Em até 48 horas">Em até 48 horas</option>
                    <option value="Nesta semana">Ao longo desta semana</option>
                    <option value="Planejando para os próximos 15 dias">Estou planejando para os próximos 15 dias</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#00C8FF] uppercase tracking-wider mb-2">
                    Detalhes do seu negócio ou objetivo
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte o que sua empresa vende e o que você gostaria de incluir no seu site..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0080FF]/30 bg-[#020713] text-sm text-white placeholder-slate-500 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] text-white text-base font-black shadow-[0_0_25px_rgba(0,180,255,0.5)] flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99]"
                >
                  <Send className="w-5 h-5 stroke-[2.5]" />
                  <span>SOLICITAR MEU ORÇAMENTO AGORA</span>
                </button>

                <p className="text-[11px] text-center text-white/70">
                  Ao clicar, você será direcionado para o WhatsApp com seu briefing pré-preenchido.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
