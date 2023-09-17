import { cn } from "@/lib/utils"

export type TypographyProps = {
  children: React.ReactNode;
  variant: 's' | 'm' | 'l';
  className?: string;
};

export function Typography(props: TypographyProps) {
  const { children, variant, className } = props;
  switch (variant) {
    case 's':
      return <p className={cn("text-s leading-loose", className)}>{children}</p>;
    case 'm':
      return <p className={cn("text-m leading-loose", className)}>{children}</p>;
    case 'l':
      return <p className={cn("text-l leading-loose", className)}>{children}</p>;
  }
}

