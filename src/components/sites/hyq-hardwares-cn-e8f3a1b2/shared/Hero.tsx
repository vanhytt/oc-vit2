'use client';

import { Container } from './Container';
import { Button } from './Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full h-screen min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden mt-[80px]"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          {/* Subtitle */}
          <div className="inline-block mb-4 px-4 py-2 bg-[#E74C3C] rounded-full text-sm font-semibold">
            {t.hero.subtitle}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Button */}
          <div className="flex gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '#'}
            >
              {t.hero.ctaText}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              {t.hero.viewProducts}
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

