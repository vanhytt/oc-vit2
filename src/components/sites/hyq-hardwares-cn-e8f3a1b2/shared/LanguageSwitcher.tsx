'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn('flex gap-1 bg-[#ECF0F1] rounded-md p-1', className)}>
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          'px-3 py-1 text-sm font-medium rounded transition-colors',
          language === 'zh'
            ? 'bg-[#E74C3C] text-white'
            : 'text-[#2C3E50] hover:text-[#E74C3C]'
        )}
        aria-label="Switch to Chinese"
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('vi')}
        className={cn(
          'px-3 py-1 text-sm font-medium rounded transition-colors',
          language === 'vi'
            ? 'bg-[#E74C3C] text-white'
            : 'text-[#2C3E50] hover:text-[#E74C3C]'
        )}
        aria-label="Switch to Vietnamese"
      >
        Tiếng Việt
      </button>
    </div>
  );
}
