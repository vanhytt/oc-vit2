import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-[750px]',
    md: 'max-w-[1000px]',
    lg: 'max-w-[1200px]',
  };

  return (
    <div className={cn('w-full mx-auto px-4 md:px-6 lg:px-8', sizeStyles[size], className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  py?: 'sm' | 'md' | 'lg' | 'xl';
  bg?: 'white' | 'light' | 'dark';
}

export function Section({
  children,
  className,
  py = 'lg',
  bg = 'white',
}: SectionProps) {
  const pyStyles = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const bgStyles = {
    white: 'bg-white',
    light: 'bg-[#ECF0F1]',
    dark: 'bg-[#2C3E50] text-white',
  };

  return (
    <section className={cn('w-full', bgStyles[bg], pyStyles[py], className)}>
      {children}
    </section>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
}

export function Grid({ children, className, cols = 3, gap = 'md' }: GridProps) {
  const gapStyles = {
    sm: 'gap-3 md:gap-4',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
  };

  const colsClass = `grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols}`;

  return (
    <div className={cn('grid', colsClass, gapStyles[gap], className)}>
      {children}
    </div>
  );
}
