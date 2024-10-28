import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`}
    {...props}
  />
));
CardRoot.displayName = "Card";

// 네임스페이스 속성들을 별도로 정의
const CardHeader = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className || ""}`} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, CardProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className || ""}`} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className || ""}`} {...props} />
));
CardContent.displayName = "CardContent";

// 네임 스페이스 속성 추가
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
});