import ScrollFloat from "@/components/ScrollFloat";
import Image from "next/image";

interface CertificateItem {
  title: string;
  issuer: string;
  description: string;
  issuedAt: string;
  badge?: string;
  image: string;
  credentialUrl?: string;
}

interface SertifikatSectionProps {
  certificates: CertificateItem[];
}

const SertifikatSection = ({ certificates }: SertifikatSectionProps) => {
  return (
    <section id="sertifikat" className="mt-24 space-y-8 text-white">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-purple-200/80">Sertifikat</p>
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white">
          Bukti belajar & pencapaian saya.
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-sm text-white/60">
          Koleksi sertifikat yang memperlihatkan perjalanan saya dalam membangun keterampilan backend, frontend, dan
          keamanan aplikasi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="relative shrink-0 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={420}
                  height={280}
                  className="h-40 w-64 object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 256px, 100vw"
                />
                {certificate.badge && (
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                    {certificate.badge}
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/40">{certificate.issuer}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{certificate.title}</h3>
                </div>
                <p className="text-sm text-white/70">{certificate.description}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50">
                  <span>{certificate.issuedAt}</span>
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
        ))}
      </div>
    </section>
  );
};

export default SertifikatSection;
