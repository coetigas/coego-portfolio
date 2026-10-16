/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFormSection } from './components/ContactFormSection';
import { WhatsAppBannerSection } from './components/WhatsAppBannerSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white font-sans selection:bg-[#0080FF] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenLeadModal={handleScrollToContact} />

      {/* Main Content following strict user sequence */}
      <main className="flex-1">
        {/* 1. Seção inicial impactante */}
        <HeroSection onScrollToContact={handleScrollToContact} />

        {/* 2. Sobre / Quem sou */}
        <AboutSection />

        {/* 3. Serviços */}
        <ServicesSection />

        {/* 4. Portfólio / Projetos */}
        <PortfolioSection />

        {/* 5. Depoimentos */}
        <TestimonialsSection />

        {/* 6. Formulário de contato */}
        <ContactFormSection />

        {/* 7. WhatsApp em destaque & canal direto */}
        <WhatsAppBannerSection />

        {/* 8. Preços / Planos */}
        <PricingSection />
      </main>

      {/* 7. WhatsApp Flutuante (Persistente em toda a navegação) */}
      <FloatingWhatsApp />

      {/* Quiet Corporate Footer */}
      <Footer />
    </div>
  );
}
