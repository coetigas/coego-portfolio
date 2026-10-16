import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/portfolioData';
import { CoegoLogo } from './CoegoLogo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const handleSendQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = quickMessage.trim()
      ? `Olá Tiago! ${quickMessage}`
      : 'Olá Tiago! Gostaria de solicitar um site para minha empresa com entrega no mesmo dia.';
    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setQuickMessage('');
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end">
      {/* Popover / Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#050B14] rounded-[28px] border-2 border-[#00C8FF]/50 shadow-[0_0_40px_rgba(0,140,255,0.4)] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-white">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#081836] to-[#020713] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#030712] border border-[#00C8FF]/40 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(0,180,255,0.5)]">
                  <CoegoLogo variant="icon" size="sm" />
                </div>
                {/* Live Status indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#050B14] shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white leading-tight">
                  Tiago.coe · COEGO
                </h4>
                <p className="text-[11px] text-[#00C8FF] font-semibold">
                  Online agora · Atendimento rápido
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              aria-label="Fechar janela do WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Body in Black */}
          <div className="p-4 bg-[#030712] space-y-3">
            <div className="p-3.5 bg-[#081226] rounded-2xl rounded-tl-sm border border-[#0080FF]/30 text-xs text-white leading-relaxed shadow-subtle">
              Olá! Precisa de um site moderno que gere mais clientes e faturamento para sua empresa? 
              <br /><br />
              <strong className="text-[#00C8FF]">Planos a partir de R$ 300 com entrega no mesmo dia!</strong> Como posso ajudar você agora?
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  window.open(getWhatsAppLink('Olá Tiago! Quero solicitar o plano SITE ESSENCIAL (R$ 600,00) com entrega no mesmo dia.'), '_blank', 'noopener,noreferrer');
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] text-xs text-white font-bold flex items-center justify-between group transition-colors"
              >
                <span>Solicitar Site Essencial (R$ 600,00)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00C8FF] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(getWhatsAppLink('Olá Tiago! Quero solicitar o plano SITE SIMPLES (R$ 300,00) para começar.'), '_blank', 'noopener,noreferrer');
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] text-xs text-white font-bold flex items-center justify-between group transition-colors"
              >
                <span>Solicitar Site Simples (R$ 300,00)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00C8FF] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(getWhatsAppLink('Olá Tiago! Quero o plano completo SITE PREMIUM (R$ 1.000,00) para minha empresa.'), '_blank', 'noopener,noreferrer');
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#050B14] border border-[#0080FF]/30 hover:border-[#00C8FF] text-xs text-white font-bold flex items-center justify-between group transition-colors"
              >
                <span>Solicitar Site Premium (R$ 1.000,00)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00C8FF] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Footer Input */}
          <form onSubmit={handleSendQuickMessage} className="p-3 bg-[#050B14] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              className="flex-1 px-3 py-2.5 text-xs rounded-xl border border-[#0080FF]/30 bg-[#020713] text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 transition-colors shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              aria-label="Enviar mensagem no WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.6)] border-2 border-white/30 transition-all duration-200 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Abrir conversa no WhatsApp com Tiago.coe"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="text-xs sm:text-sm font-black whitespace-nowrap hidden sm:inline-block">
          Falar no WhatsApp
        </span>
      </button>
    </div>
  );
};
