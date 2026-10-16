import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/portfolioData';
import { CoegoLogo } from './CoegoLogo';

interface NavbarProps {
  onOpenLeadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#0080FF]/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#030712]/90 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Official COEGO Electric Blue Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-md shrink-0 group"
          >
            <CoegoLogo variant="horizontal" size="sm" showUnderline={true} />
            <div className="hidden sm:flex flex-col border-l border-white/15 pl-3">
              <span className="text-[10px] font-black text-[#00C8FF] tracking-wider uppercase">
                Tiago.coe
              </span>
              <span className="text-[9px] font-semibold text-white/70 tracking-wider uppercase">
                Web Studio
              </span>
            </div>
          </a>

          {/* Subtitle trust marker on desktop matching reference image */}
          <div className="hidden xl:flex items-center text-[11px] font-bold tracking-widest uppercase text-white/70 border-l border-white/10 pl-6">
            <span>SEU NEGÓCIO ONLINE COM MAIS RESULTADOS</span>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#00C8FF] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00C8FF] rounded shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Social Quick Links */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Tiago.coe (@_coe.go)"
              className="text-xs text-white/80 hover:text-white transition-colors flex items-center gap-1 font-semibold px-2.5 py-1.5 rounded-lg hover:bg-white/10 border border-white/10"
            >
              <span>@_coe.go</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00C8FF]" />
            </a>

            <a
              href={getWhatsAppLink('Olá Tiago! Quero solicitar um site para minha empresa com entrega ágil.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#00C8FF] to-[#0080FF] hover:from-[#38BDF8] hover:to-[#0066D6] rounded-xl shadow-[0_0_20px_rgba(0,140,255,0.4)] hover:shadow-[0_0_30px_rgba(0,200,255,0.6)] transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Site</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={getWhatsAppLink('Olá Tiago! Gostaria de um site para minha empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0080FF] rounded-lg shadow-[0_0_15px_rgba(0,128,255,0.5)]"
            >
              Solicitar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00C8FF]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#000000]/98 border-b border-[#0080FF]/30 px-6 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="pb-3 border-b border-white/10">
              <CoegoLogo variant="horizontal" size="sm" showUnderline={true} />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-bold text-white hover:text-[#00C8FF] py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink('Olá Tiago! Gostaria de solicitar um site para minha empresa com entrega no mesmo dia.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 text-sm font-black text-white bg-gradient-to-r from-[#00C8FF] to-[#0080FF] rounded-xl shadow-[0_0_20px_rgba(0,140,255,0.5)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar um site para minha empresa</span>
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-white/80 hover:text-white py-1.5 flex items-center justify-center gap-1 font-semibold"
              >
                <span>Instagram: @_coe.go</span>
                <ArrowUpRight className="w-3 h-3 text-[#00C8FF]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
