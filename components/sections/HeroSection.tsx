"use client";

import FadeUp from "@/components/FadeUp";
import LiveClock from "@/components/live-clock";
import ProfileCard from "@/components/ProfileCard";
import TypewriterText from "@/components/typewriter-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialLink {
  label: string;
  href: string;
  icon: IconDefinition;
}

interface HeroSectionProps {
  socialLinks: SocialLink[];
}

const HeroSection = ({ socialLinks }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-8 pt-[7.5rem] lg:px-10"
    >
      <main className="mt-16 grid flex-1 gap-12 place-items-center lg:grid-cols-2 lg:items-center">
        {/* LEFT SIDE - TEXT */}
        <section className="w-full space-y-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold md:justify-start">
            <FadeUp
              as="span"
              className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-emerald-300 ring-1 ring-emerald-400/50"
              delay={0.05}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              Terbuka untuk bekerja
            </FadeUp>

            <FadeUp
              as="span"
              className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-white/80 ring-1 ring-white/15"
              delay={0.15}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v18M17 3v18M7 3v18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Live Clock <LiveClock />
            </FadeUp>
          </div>

          <div className="space-y-6">
            <p className="text-lg uppercase tracking-[0.5em] text-sky-200/80">Rifqi Ardian</p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Junior Fullstack Developer &amp; Web Enthusiast.
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-white/80 md:justify-start">
              <span>Saya seorang</span>
              <TypewriterText
                phrases={[
                  "Pelajar RPL",
                  "Fullstack Developer",
                  "Web Enthusiast",
                  "Tech Explorer",
                ]}
              />
            </div>

            <p className="mx-auto max-w-2xl text-base text-white/70 md:mx-0">
              Junior Fullstack Developer yang terus belajar membangun aplikasi web yang cepat, aman,
              dan terasa manusiawi. Fokus pada kerapian kode, pengalaman pengguna, dan detail kecil
              yang meningkatkan kualitas produk.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <FadeUp
              as="a"
              href="#kontak"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              delay={0.05}
            >
              Hubungi Saya
            </FadeUp>

            <FadeUp
              as="a"
              href="/images/CV%20RIFQI%20ARDIAN.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
              delay={0.12}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Unduh CV
            </FadeUp>
          </div>

          <div className="flex items-center justify-center gap-4 text-white/70 md:justify-start">
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, icon }, index) => (
                <FadeUp
                  as="a"
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all hover:scale-105 hover:text-white"
                  delay={index * 0.08}
                >
                  <FontAwesomeIcon icon={icon} className="text-base" />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="relative flex w-full flex-col items-center justify-center lg:h-auto">
        <FadeUp delay={0.15} className="mx-auto w-full max-w-sm flex justify-center">
          <ProfileCard
            name="Rifqi Ardian"
            title="Fullstack Developer"
            handle="rifqiard._"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/profile.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true} // Pastikan mobile tilt aktif jika diinginkan
            onContactClick={() => window.open("https://instagram.com/rifqiard._", "_blank", "noopener,noreferrer")}
          />
        </FadeUp>  
      </section>

      </main>
    </section>
  );
};

export default HeroSection;
