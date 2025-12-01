import Masonry from "@/components/Masonry";
import ScrollFloat from "@/components/ScrollFloat";

interface GalleryItem {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface GalerySectionProps {
  items: GalleryItem[];
}

const GalerySection = ({ items }: GalerySectionProps) => {
  return (
    <section id="galery" className="mt-24 space-y-8 text-white">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-purple-200/80">Galeri</p>
        <ScrollFloat containerClassName="flex justify-center" textClassName="text-center font-semibold text-white">
          Potret proyek & eksperimen visual.
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-sm text-white/60">
          Kumpulan tangkapan layar favorit dari eksperimen desain, dashboard, dan explorasi antarmuka lain yang saya buat.
        </p>
      </div>

      <div className="relative rounded-[36px] border border-white/10 bg-white/5/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <Masonry items={items} animateFrom="random" colorShiftOnHover />
      </div>
    </section>
  );
};

export default GalerySection;
