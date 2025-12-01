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
      <main className="mt-16 grid flex-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-emerald-300 ring-1 ring-emerald-400/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              Terbuka untuk bekerja
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-white/80 ring-1 ring-white/15">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M12 3v18M17 3v18M7 3v18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Live Clock <LiveClock />
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-lg uppercase tracking-[0.5em] text-purple-200/80">Rifqi Ardian</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Junior Fullstack Developer &amp; Web Enthusiast.
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg text-white/80">
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
            <p className="max-w-2xl text-base text-white/70">
                Junior Fullstack Developer yang terus belajar membangun aplikasi web yang cepat, aman, dan terasa manusiawi.
                Fokus pada kerapian kode, pengalaman pengguna, dan detail kecil yang meningkatkan kualitas produk.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
              Hubungi Saya
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Unduh CV
            </button>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all hover:scale-105 hover:text-white"
                >
                  <FontAwesomeIcon icon={icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center">
          <ProfileCard
            className="max-w-sm"
            avatarUrl="/images/image.png"
            miniAvatarUrl="/images/profile.png"
            name="Rifqi Ardian"
            title="Fullstack Developer"
            handle="rifqiardian"
            status="Online"
            contactText="Contact Me"
            contactHref="mailto:rifqiardian09@gmail.com"
            showUserInfo
            enableTilt
            enableMobileTilt={false}
          />
        </section>
      </main>
    </section>
  );
};

export default HeroSection;
