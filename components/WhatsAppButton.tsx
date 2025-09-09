"use client";

import { useGtagConversion } from "@/hooks/useGtagConversion";

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  "aria-label": ariaLabel,
}) => {
  const { reportConversion } = useGtagConversion();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    reportConversion(href);
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
