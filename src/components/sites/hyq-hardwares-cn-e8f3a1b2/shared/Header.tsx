'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on link click
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] py-3'
          : 'bg-white py-4',
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-[#E74C3C] font-bold text-2xl">HYQ</div>
            <div className="hidden md:block text-sm text-[#2C3E50]">
              {t.nav.company}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-[#2C3E50] hover:text-[#E74C3C] transition-colors">
              {t.nav.home}
            </a>
            <a href="/products" className="text-[#2C3E50] hover:text-[#E74C3C] transition-colors">
              {t.nav.products}
            </a>
            <a href="/about" className="text-[#2C3E50] hover:text-[#E74C3C] transition-colors">
              {t.nav.about}
            </a>
            <a href="/news" className="text-[#2C3E50] hover:text-[#E74C3C] transition-colors">
              {t.nav.news}
            </a>
            <a href="/contact" className="text-[#2C3E50] hover:text-[#E74C3C] transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* CTA Button and Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <Button size="sm">{t.nav.quote}</Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#2C3E50]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
            onClick={closeMenu}
          />
          
          {/* Menu Drawer */}
          <div className="fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-xl z-[1001] lg:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-[#E74C3C] font-bold text-xl">HYQ</div>
                <button onClick={closeMenu} className="p-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex flex-col gap-4 mb-6">
                <a href="/" onClick={closeMenu} className="py-3 text-[#2C3E50] hover:text-[#E74C3C] border-b border-[#ECF0F1]">
                  {t.nav.home}
                </a>
                <a href="/products" onClick={closeMenu} className="py-3 text-[#2C3E50] hover:text-[#E74C3C] border-b border-[#ECF0F1]">
                  {t.nav.products}
                </a>
                <a href="/about" onClick={closeMenu} className="py-3 text-[#2C3E50] hover:text-[#E74C3C] border-b border-[#ECF0F1]">
                  {t.nav.about}
                </a>
                <a href="/news" onClick={closeMenu} className="py-3 text-[#2C3E50] hover:text-[#E74C3C] border-b border-[#ECF0F1]">
                  {t.nav.news}
                </a>
                <a href="/contact" onClick={closeMenu} className="py-3 text-[#2C3E50] hover:text-[#E74C3C] border-b border-[#ECF0F1]">
                  {t.nav.contact}
                </a>
              </nav>

              <div className="flex flex-col gap-4">
                <Button className="w-full">{t.nav.quote}</Button>
                <LanguageSwitcher className="w-full" />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

