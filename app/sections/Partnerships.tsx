"use client";
import { useState } from "react";

function PartnerCard({ partner }: { partner: { name: string; src: string } }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex items-center justify-center h-12">
      {!hasError ? (
        <img 
          src={partner.src} 
          alt={partner.name} 
          className="max-h-10 w-auto object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="font-bold text-slate-800 tracking-wider text-base">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function Partnerships() {
  const partners = [
    { name: "Reliance", src: "/rel.png" },
    { name: "HCL", src: "/hcl.png" },
    { name: "IBM", src: "/ibm.png" },
    { name: "CRIF", src: "/crif.png" },
    { name: "Bayer", src: "/bayer.svg" },
      { name: "ADP", src: "/adp.svg" },
  ];

  return (
    <section id="partners" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10 bg-transparent">
      
      {/* Section Header */}
      <div className="text-center mb-10 bg-transparent">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-1.5 tracking-tight">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Successful Collaborations With the <span className="text-blue-600">Industry’s Best</span>
        </p>
      </div>

      {/* Partners Logo Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto bg-transparent">
        {partners.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}
      </div>

    </section>
  );
}