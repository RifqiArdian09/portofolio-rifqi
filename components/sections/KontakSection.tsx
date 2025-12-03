"use client";

import FadeUp from "@/components/FadeUp";
import ScrollFloat from "@/components/ScrollFloat";
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FormEvent, useState } from "react";

type IconKey = "github" | "instagram" | "linkedin" | "mail";

interface ContactMethod {
  label: string;
  sublabel: string;
  href: string;
  icon: IconKey;
}

interface KontakSectionProps {
  contacts: ContactMethod[];
  location: string;
  whatsappNumber: string;
}

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  github: FiGithub,
  instagram: FiInstagram,
  linkedin: FiLinkedin,
  mail: FiMail,
};

const KontakSection = ({
  contacts,
  location,
  whatsappNumber,
}: KontakSectionProps) => {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.pesan.trim()) return;

    setSubmitting(true);
    const message = `Halo, saya ${formData.nama || "Anonymous"}.\nEmail: ${
      formData.email || "-"
    }\nPesan: ${formData.pesan}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="kontak" className="relative mt-32 px-4 pb-20 text-white">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <FadeUp delay={0.1}>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300/90">
            Hubungi Saya
          </p>
        </FadeUp>
        
        <ScrollFloat
          containerClassName="flex justify-center"
          textClassName="text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Mari Membangun Sesuatu.
        </ScrollFloat>
        
        <FadeUp delay={0.2}>
          <p className="mx-auto max-w-2xl text-base text-white/60 leading-relaxed">
            Tertarik untuk berkolaborasi atau punya pertanyaan? Temukan saya di
            platform berikut atau kirim pesan langsung untuk diskusi lebih lanjut.
          </p>
        </FadeUp>
      </div>

      <div className="mx-auto mt-16 max-w-6xl space-y-10">
        
        {/* Contact Cards Container */}
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm md:p-10 lg:p-16">
          
          {/* Grid Layout: Adjusted for better spacing to prevent text overflow */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map(({ label, sublabel, href, icon }, index) => {
              const IconComponent = iconMap[icon];
              return (
                <FadeUp
                  as="a"
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg"
                  delay={index * 0.1}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sky-200 transition-colors group-hover:bg-sky-500/20 group-hover:text-sky-100">
                      <IconComponent className="text-xl" />
                    </div>
                    <FiArrowUpRight className="text-xl text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  
                  {/* Text Container with Min-Width 0 to force truncation */}
                  <div className="min-w-0 space-y-1">
                    <p className="truncate text-base font-semibold text-white group-hover:text-sky-100">
                      {label}
                    </p>
                    <p className="truncate text-sm text-white/50 group-hover:text-white/70">
                      {sublabel}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Location Badge */}
          <div className="mt-8 flex justify-center">
            <FadeUp
              as="div"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:border-sky-500/50 hover:bg-sky-900/10 hover:text-white"
              delay={0.4}
            >
              <FiMapPin className="text-sky-400 group-hover:animate-bounce" />
              <span>{location}</span>
            </FadeUp>
          </div>
        </div>

        {/* Contact Form */}
        <FadeUp
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-black/40 to-black/60 p-6 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16"
          delay={0.2}
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

          <div className="relative">
            <div className="mb-10 space-y-2">
              <h3 className="text-3xl font-semibold text-white">
                Kirim Pesan Langsung
              </h3>
              <p className="text-base text-white/60">
                Isi form di bawah, pesan akan otomatis terhubung ke WhatsApp saya.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-white/80">
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={handleChange("nama")}
                    placeholder="Nama Lengkap"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-sky-500/50 focus:bg-black/40 focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="alamat@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-sky-500/50 focus:bg-black/40 focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium text-white/80">
                  Pesan
                </label>
                <textarea
                  required
                  value={formData.pesan}
                  onChange={handleChange("pesan")}
                  placeholder="Ceritakan detail proyek atau pertanyaan Anda..."
                  className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-sky-500/50 focus:bg-black/40 focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-sky-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-sky-100 to-white transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative flex items-center gap-2">
                    {submitting ? (
                      <>
                        <FiLoader className="animate-spin text-lg" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim via WhatsApp
                        <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default KontakSection;