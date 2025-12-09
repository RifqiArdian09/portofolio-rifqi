"use client";

import FadeUp from "@/components/FadeUp";
import ScrollFloat from "@/components/ScrollFloat";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CertificateItem {
  title: string;
  issuer: string;
  description: string;
  badge?: string;
  image: string;
  credentialUrl?: string;
}

interface SertifikatSectionProps {
  certificates: CertificateItem[];
}

const SertifikatSection = ({ certificates }: SertifikatSectionProps) => {
  const [zoomedCertificate, setZoomedCertificate] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!zoomedCertificate) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    document.body.style.setProperty("overflow", "hidden");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.removeProperty("overflow");
    };
  }, [zoomedCertificate]);

  return (
    <section id="sertifikat" className="mt-24 space-y-8 text-white">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-sky-200/80">Sertifikat</p>
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white">
          Bukti belajar & pencapaian saya.
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-sm text-white/60">
          Koleksi sertifikat yang memperlihatkan perjalanan saya dalam membangun keterampilan backend, frontend, dan
          keamanan aplikasi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <FadeUp key={certificate.title} delay={index * 0.1}>
            <article
              className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col gap-5">
                <button
                  type="button"
                  onClick={() => setZoomedCertificate(certificate)}
                  className="group/image relative block w-full overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={420}
                    height={280}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 group-hover/image:scale-105 md:h-48"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 60vw, 100vw"
                  />
                  {certificate.badge && (
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                      {certificate.badge}
                    </span>
                  )}
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-black/40 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 opacity-0 transition group-hover/image:opacity-100">
                    Perbesar
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path
                        d="M5 12h14M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/40">{certificate.issuer}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{certificate.title}</h3>
                  </div>
                  <p className="text-sm text-white/70">{certificate.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50">
                  </div>
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                    >
                      Lihat kredensial
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>

      {zoomedCertificate && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 px-4 py-10 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Tutup pratinjau sertifikat"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition hover:text-white"
            onClick={() => setZoomedCertificate(null)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative w-full max-w-2xl space-y-5 rounded-[36px] border border-white/15 bg-black/60 p-6 text-center shadow-[0_40px_140px_rgba(0,0,0,0.6)]">
            <Image
              src={zoomedCertificate.image}
              alt={zoomedCertificate.title}
              width={880}
              height={520}
              className="h-auto w-full rounded-[28px] border border-white/10 object-contain"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">{zoomedCertificate.issuer}</p>
              <h3 className="text-2xl font-semibold text-white">{zoomedCertificate.title}</h3>
              <p className="text-sm text-white/70">{zoomedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SertifikatSection;
