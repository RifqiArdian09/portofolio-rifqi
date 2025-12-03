import FadeUp from "@/components/FadeUp";
import ScrollFloat from "@/components/ScrollFloat";
import Image from "next/image";
import type { ReactNode } from "react";

interface FocusCard {
  label: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface SayaSectionProps {
  stacks: string[];
  focusCards: FocusCard[];
}

const SayaSection = ({ stacks, focusCards }: SayaSectionProps) => {
  const stackIconMap: Record<string, string> = {
    laravel: "/icons/lara.svg",
    html: "/icons/html.svg",
    html5: "/icons/html.svg",
    javascript: "/icons/js.svg",
    js: "/icons/js.svg",
    css: "/icons/css.svg",
    "css3-alt": "/icons/css.svg",
    php: "/icons/php.svg",
    react: "/icons/react.svg",
    flutter: "/icons/flutter.svg",
    dart: "/icons/dart.png",
    android: "/icons/android.png",
    mysql: "/icons/mysql.svg",
    sqlite: "/icons/SQLite.svg",
    python: "/icons/python.svg",
    java: "/icons/java.png",
    next: "/icons/next.svg",
    git: "/icons/git.svg",
    github: "/icons/github.svg",
    tailwind: "/icons/tailwinda.svg",
  };

  return (
    <section id="saya" className="mt-24 -mx-6 lg:-mx-10">
      <div className="space-y-10 rounded-[40px] bg-white/5/5 px-6 py-12 text-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur">
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white/90">
          Tentang Saya
        </ScrollFloat>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-center md:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-sky-200/80 text-justify">Halo 👋</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
                Hai, saya Rifqi — Pelajar RPL dengan fokus pada pengembangan aplikasi modern dan berkualitas.
              </h2>
            </div>
            <p className="text-base text-white/80 text-justify">
              Saya memiliki ketertarikan kuat pada pengembangan web dan mobile, khususnya pada stack Laravel, Next.js, dan Android.
              Saya terbiasa membangun aplikasi yang fungsional, terstruktur, dan memiliki pengalaman pengguna yang baik.
              Berbagai proyek yang saya kerjakan—mulai dari sistem voting, aplikasi berita, POS, hingga aplikasi belajar—membantu saya
              memahami bagaimana merancang solusi yang efisien, aman, dan dapat dikembangkan.

            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80 md:justify-start">
              {stacks.map((stack, index) => {
                const slug = stack.toLowerCase().replace(/[^a-z0-9]+/g, "");
                const iconSrc = stackIconMap[slug];

                return (
                  <FadeUp
                    as="span"
                    key={stack}
                    className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-base font-semibold"
                    delay={index * 0.05}
                  >
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt={`${stack} icon`}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    )}
                    <span>{stack}</span>
                  </FadeUp>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
            {focusCards.map((card, index) => (
              <FadeUp as="div" key={card.title} className="rounded-3xl border border-white/10 bg-black/30 p-6" delay={index * 0.12}>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40 text-justify">{card.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70 text-justify">{card.description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SayaSection;
