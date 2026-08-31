'use client';

import { Container } from './Container';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2C3E50] text-white">
      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E74C3C]">{t.footer.company}</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t.footer.companyDesc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#E74C3C] transition-colors">
                <span className="sr-only">WeChat</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 4.37 0 10c0 3.04 1.53 5.74 4 7.45V23l4.54-2.27c1.05.27 2.15.41 3.46.41 6.63 0 12-4.37 12-10S18.63 0 12 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E74C3C] transition-colors">
                <span className="sr-only">Weibo</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.products}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.products.drywall}</a></li>
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.products.drilling}</a></li>
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.products.concrete}</a></li>
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.products.coil}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.faq}</a></li>
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.specs}</a></li>
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.tech}</a></li>
              <li><a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.shipping}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span>📞</span>
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex gap-3">
                <span>📧</span>
                <span>{t.footer.email}</span>
              </li>
              <li className="flex gap-3">
                <span>📍</span>
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 bg-[#1a252f]">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} {t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-[#E74C3C] transition-colors">{t.footer.sitemap}</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
