import React from "react";

interface OrnamentoProps {
  className?: string;
  width?: string;
}

export default function Ornamento({ className = "", width = "w-48" }: OrnamentoProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} id="brand-ornamento">
      <div className={`h-[1px] bg-gradient-to-r from-transparent to-gold/70 ${width}`} />
      <div className="w-2.5 h-2.5 rotate-45 border border-gold bg-gold/20 shadow-[0_0_8px_rgba(184,146,74,0.4)]" />
      <div className={`h-[1px] bg-gradient-to-l from-transparent to-gold/70 ${width}`} />
    </div>
  );
}
