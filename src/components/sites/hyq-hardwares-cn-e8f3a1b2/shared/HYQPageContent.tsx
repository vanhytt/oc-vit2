'use client';

import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import {
  Header,
  Hero,
  Container,
  Section,
  Grid,
  ProductCard,
  Footer,
} from './index';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const products = [
  { id: '1', nameKey: 'drywall' as const, image: '/placeholder-product-1.jpg', inStock: true },
  { id: '2', nameKey: 'drilling' as const, image: '/placeholder-product-2.jpg', inStock: true },
  { id: '3', nameKey: 'concrete' as const, image: '/placeholder-product-3.jpg', inStock: true },
  { id: '4', nameKey: 'coil' as const, image: '/placeholder-product-4.jpg', inStock: true },
];

function PageBody() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <Section bg="white" py="lg">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              {t.products.title}
            </h2>
            <p className="text-lg text-[#7F8C8D] max-w-2xl">
              {t.products.description}
            </p>
          </div>

          <Grid cols={4} gap="lg">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* About Section */}
      <Section bg="light" py="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="h-[400px] bg-[#ECF0F1] rounded-lg overflow-hidden">
              <img
                src="/placeholder-about.jpg"
                alt="Company"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                {t.about.title}
              </h2>
              <p className="text-lg text-[#7F8C8D] mb-6 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-[#7F8C8D] mb-6 leading-relaxed">
                {t.about.description2}
              </p>
              <ul className="space-y-3 text-[#2C3E50]">
                <li className="flex items-center gap-3">
                  <span className="text-[#E74C3C] font-bold">✓</span>
                  <span>{t.about.experience}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#E74C3C] font-bold">✓</span>
                  <span>{t.about.iso}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#E74C3C] font-bold">✓</span>
                  <span>{t.about.support}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg="dark" py="lg">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <button className="inline-block px-8 py-3 bg-[#E74C3C] text-white rounded font-semibold hover:bg-[#C0392B] transition-colors">
            {t.cta.button}
          </button>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export function HYQPageContent() {
  return (
    <LanguageProvider>
      <PageBody />
    </LanguageProvider>
  );
}
