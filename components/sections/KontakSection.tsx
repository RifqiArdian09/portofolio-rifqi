"use client";

import ScrollFloat from "@/components/ScrollFloat";
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLoader,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import { FormEvent, useState } from "react";

type IconKey = "github" | "instagram" | "mail" | "discord";

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
  mail: FiMail,
  discord: FiMessageCircle,
};

const KontakSection = ({ contacts, location, whatsappNumber }: KontakSectionProps) => {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.pesan.trim()) return;

    setSubmitting(true);
    const message = `Halo, saya ${formData.nama || "Anonymous"}.\nEmail: ${formData.email || "-"}\nPesan: ${formData.pesan}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="kontak" className="mt-24 text-white">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-purple-200/80">Kontak</p>
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white">
          Terbuka untuk berkolaborasi.
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-sm text-white/60">
          Tertarik untuk berkolaborasi atau punya pertanyaan? Temukan saya di platform berikut atau kirim email langsung.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/70 p-6 shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {contacts.map(({ label, sublabel, href, icon }) => {
              const IconComponent = iconMap[icon];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-4 rounded-[28px] border border-white/15 bg-black/30 px-6 py-5 text-left shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition hover:border-white/40 hover:bg-black/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <IconComponent className="text-xl" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{label}</p>
                      <p className="text-sm text-white/60">{sublabel}</p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-lg text-purple-200/90 transition group-hover:text-white sm:self-center" />
                </a>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-5 py-2 text-sm text-white/70">
              <FiMapPin />
              {location}
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/5 via-black/35 to-black/70 p-6 shadow-[0_50px_120px_rgba(0,0,0,0.45)] lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Kirim pesan langsung</h3>
              <p className="mt-1 text-sm text-white/60">Pesan akan dikirim ke WhatsApp saya secara otomatis.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Nama</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={handleChange("nama")}
                  placeholder="Masukkan nama"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="Masukkan email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Pesan</label>
              <textarea
                required
                value={formData.pesan}
                onChange={handleChange("pesan")}
                placeholder="Ceritakan kebutuhan atau ide Anda"
                className="h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-75 md:w-auto"
            >
              {submitting && <FiLoader className="animate-spin" />}
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KontakSection;
