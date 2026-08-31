'use client';

import { Card, CardImage, CardContent, CardTitle, CardDescription } from './Card';
import { Button } from './Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface ProductCardProps {
  id: string;
  nameKey: 'drywall' | 'drilling' | 'concrete' | 'coil';
  image: string;
  inStock?: boolean;
}

export function ProductCard({
  id,
  nameKey,
  image,
  inStock = true,
}: ProductCardProps) {
  const { t } = useLanguage();

  const nameMap = {
    drywall: t.products.drywall,
    drilling: t.products.drilling,
    concrete: t.products.concrete,
    coil: t.products.coil,
  } as const;

  const descMap = {
    drywall: t.products.drywallDesc,
    drilling: t.products.drillingDesc,
    concrete: t.products.concreteDesc,
    coil: t.products.coilDesc,
  } as const;

  const priceMap = {
    drywall: t.products.drywallPrice,
    drilling: t.products.drillingPrice,
    concrete: t.products.concretePrice,
    coil: t.products.coilPrice,
  } as const;

  const name = nameMap[nameKey];
  const description = descMap[nameKey];
  const price = priceMap[nameKey];

  return (
    <Card hover className="flex flex-col h-full overflow-hidden">
      {/* Image */}
      <CardImage
        src={image}
        alt={name}
        className="h-48 md:h-56"
      />

      {/* Content */}
      <CardContent className="flex-1 flex flex-col p-4">
        <CardTitle className="mb-3">{name}</CardTitle>
        <CardDescription className="flex-1 mb-4">{description}</CardDescription>

        {/* Stock Status */}
        <div className="mb-4 flex items-center gap-2">
          {inStock ? (
            <>
              <span className="inline-block w-2 h-2 bg-[#27AE60] rounded-full" />
              <span className="text-xs text-[#27AE60] font-medium">{t.products.inStock}</span>
            </>
          ) : (
            <>
              <span className="inline-block w-2 h-2 bg-[#7F8C8D] rounded-full" />
              <span className="text-xs text-[#7F8C8D] font-medium">{t.products.outOfStock}</span>
            </>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-[#E74C3C]">{price}</span>
          <Button
            variant="primary"
            size="sm"
            className="ml-auto"
            onClick={() => console.log(`Clicked product: ${id}`)}
          >
            {t.products.details}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
