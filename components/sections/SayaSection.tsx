import ScrollFloat from "@/components/ScrollFloat";
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
  return (
    <section id="saya" className="mt-24 -mx-6 lg:-mx-10">
      <div className="space-y-10 rounded-[40px] bg-white/5/5 px-6 py-12 text-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur">
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white/90">
          Tentang Saya
        </ScrollFloat>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-purple-200/80">Halo 👋</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
                Hai, saya Rifqi—Pelajar RPL yang suka meramu pengalaman digital cepat, hangat, dan aman.
              </h2>
            </div>
            <p className="text-base text-white/80">
              Saya fokus menggabungkan animasi halus, arsitektur bersih, dan praktik keamanan modern untuk membuat
              aplikasi yang tetap terasa manusiawi saat digunakan. Dari layout sederhana sampai sistem kompleks, saya
              suka melihat setiap detail bergerak harmonis.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              {stacks.map((stack) => (
                <span key={stack} className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-white/85">
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
            {focusCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{card.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SayaSection;
