import ProjectGallery from "@/components/ProjectGallery";
import ScrollFloat from "@/components/ScrollFloat";
import type { ProjectItem } from "@/components/ProjectGallery";

interface KaryaSectionProps {
  projects: ProjectItem[];
}

const KaryaSection = ({ projects }: KaryaSectionProps) => {
  return (
    <section id="karya" className="mt-24 space-y-8 text-white">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-purple-200/80">Karya</p>
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white">
          Beberapa project yang saya banggakan.
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-sm text-white/60">
          Saya senang menggabungkan visual yang hidup, struktur kode rapi, dan keamanan aplikasi. Berikut beberapa
          proyek yang mengasah fokus tersebut.
        </p>
      </div>

      <ProjectGallery projects={projects} />
    </section>
  );
};

export default KaryaSection;
