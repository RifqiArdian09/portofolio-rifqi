import HeroSection from "@/components/sections/HeroSection";
import KaryaSection from "@/components/sections/KaryaSection";
import SayaSection from "@/components/sections/SayaSection";
import SertifikatSection from "@/components/sections/SertifikatSection";
import GalerySection from "@/components/sections/GalerySection";
import KontakSection from "@/components/sections/KontakSection";
import Footer from "@/components/Footer";
import SiteNav, { type NavLink } from "@/components/SiteNav";
import type { ProjectItem } from "@/components/ProjectGallery";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FiAward, FiBriefcase, FiHome, FiImage, FiMail, FiUser } from "react-icons/fi";

const createMember = (username: string, displayName?: string) => ({
  name: displayName ?? username,
  avatar: `https://github.com/${username}.png`,
  profileUrl: `https://github.com/${username}`,
});

const navLinks: NavLink[] = [
  { label: "Home", icon: "home", href: "#home" },
  { label: "Saya", icon: "user", href: "#saya" },
  { label: "Karya", icon: "briefcase", href: "#karya" },
  { label: "Sertifikat", icon: "award", href: "#sertifikat" },
  { label: "Galery", icon: "image", href: "#galery" },
  { label: "Kontak", icon: "mail", href: "#kontak" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RifqiArdian09",
    icon: faGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rifqiard._",
    icon: faInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rifqi-ardian-0547b7388/",
    icon: faLinkedin,
  },
];

const stacks = ["HTML", "CSS", "JavaScript", "PHP", "Laravel"];

const focusCards = [
  {
    label: "Fokus Saat Ini",
    title: "React & Next.js",
    description:
      "Memperdalam App Router, server actions, dan animasi mikro untuk memberi tenaga pada landing page, dashboard, hingga aplikasi belajar dengan rasa premium.",
  },
  {
    label: "Mindset",
    title: "Clean & Secure Web",
    description:
      "Menjaga performa, aksesibilitas, dan keamanan sejak awal pengembangan supaya pengguna merasa tenang sekaligus betah menjelajah.",
  },
];

const projects: ProjectItem[] = [
  {
    title: "W-Vote",
    description:
      "Aplikasi pemilihan OSIS dengan antarmuka modern menggunakan Laravel, Flux UI, dan Livewire untuk pengalaman voting yang interaktif.",
    stack: ["Laravel", "Livewire", "Tailwind", "MySQL"],
    status: "Team Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/a5738b86-0431-4b88-af39-cc1aef477cb7.png",
    href: "https://github.com/RayanKhairullah/w-vote",
    teamMembers: [createMember("RayanKhairullah"), createMember("RifqiArdian09"), createMember("icanpatra")],
  },
  {
    title: "Penerjemah Teks & Gambar",
    description:
      "Aplikasi Android berbasis Java untuk menerjemahkan teks dan gambar antar berbagai bahasa menggunakan teknologi AI Gemini dari Google.",
    stack: ["Android Studio", "Java"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/c6378e63-5586-46c0-ab4b-c4bb03ff2560.png",
    href: "https://github.com/RifqiArdian09/Text-Image-Translator",
  },
  {
    title: "Rental Elektronik",
    description:
      "Aplikasi web modern yang dirancang untuk memudahkan penyewaan berbagai alat elektronik secara praktis, cepat, dan aman.",
    stack: ["Laravel", "Tailwind", "MySQL"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/80ad69b1-b8dc-4479-beee-78212c30aad1.png",
    href: "https://github.com/RifqiArdian09/rental-electronics",
  },
  {
    title: "EssyCoff Android (POS)",
    description: "Aplikasi Point of Sale sederhana untuk kedai kopi: kelola produk, transaksi, dan riwayat.",
    stack: ["Android Studio", "Java", "Supabase"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/05e9dc7e-da89-4c7f-9672-89a28603465e.png",
    href: "https://github.com/RifqiArdian09/EssyCoffAndroid.git",
  },
  {
    title: "Bursa Kerja Khusus",
    description:
      "Sistem informasi Bursa Kerja Khusus untuk membantu siswa mencari lowongan pekerjaan dan perusahaan mencari kandidat.",
    stack: ["Laravel", "Tailwind", "MySQL"],
    status: "Team Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/b4dd5ec4-4f59-4d9d-91bc-470d6a6f5777.png",
    href: "https://github.com/RifqiArdian09/Project-BKK",
    teamMembers: [
      createMember("RifqiArdian09"),
      createMember("Salmanziz21"),
      createMember("freal56"),
      createMember("Miyabi18"),
      createMember("Wira630"),
    ],
  },
  {
    title: "Al-Qur'an App",
    description:
      "Aplikasi Flutter untuk membaca Al-Qur'an, mendengarkan tilawah, jadwal sholat, doa harian, dan bookmark ayat.",
    stack: ["Flutter", "Dart"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/f30f59bf-e7f5-40d6-8044-e0e8f46df99e.png",
    href: "https://github.com/RifqiArdian09/Al-Quran-Flutter",
  },
  {
    title: "Celenganku",
    description:
      "Celenganku adalah aplikasi Android untuk membantu mengelola tabungan pribadi dengan pencatatan transaksi dan target.",
    stack: ["Android Studio", "Java", "SQLite"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/f7c35245-3939-42a5-a1eb-e4dee8cb3665.png",
    href: "https://github.com/RifqiArdian09/Celenganku",
  },
  {
    title: "Food Recipe App",
    description: "Aplikasi Android untuk menampilkan berbagai resep makanan menggunakan data dari TheMealDB.",
    stack: ["Android Studio", "Java"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/873436a6-be6a-4817-91af-562079637d73.png",
    href: "https://github.com/RifqiArdian09/FoodRecipeApp",
  },
  {
    title: "Nimestream",
    description: "Platform streaming anime modern yang dibangun dengan Next.js.",
    stack: ["Next.js", "Tailwind"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/92d3c8bc-e188-493a-8d16-99cee1d04ef6.png",
    href: "https://nimestream-six.vercel.app/",
  },
  {
    title: "Al-Quran Web",
    description: "Aplikasi web Al-Quran dengan bookmark ayat dan pemutar audio.",
    stack: ["React", "Vite"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/f3bba04e-910c-4fe7-af99-cd2ec1c6f25a.png",
    href: "https://github.com/RifqiArdian09/alquran-web",
  },
  {
    title: "News Portal",
    description:
      "Sistem manajemen konten lengkap untuk menerbitkan dan mengelola artikel berita dengan kategori dan penulis.",
    stack: ["Laravel", "Tailwind", "MySQL"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/9f15bcbf-c4d9-4070-9270-176a18774b0b.png",
    href: "https://github.com/RifqiArdian09/News-Portal",
  },
  {
    title: "E-Voting",
    description:
      "Aplikasi pemilihan Ketua OSIS berbasis web dengan sistem voting yang aman, mudah digunakan, dan real-time.",
    stack: ["Laravel", "Tailwind", "MySQL"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/1945b61c-4fa5-48c2-adbb-ecc74babbed4.png",
    href: "https://github.com/RifqiArdian09/E-voting",
  },
  {
    title: "FileConverter",
    description:
      "Aplikasi berbasis Flask + LibreOffice untuk mengonversi file dengan antarmuka web modern dan drag & drop.",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/e36b8b52-2235-44e5-97ae-f1e9b6956ab9.png",
    href: "https://github.com/RifqiArdian09/FileConverter",
  },
  {
    title: "Subtitle Generator",
    description: "Aplikasi untuk membuat file SRT dari upload video menggunakan Python dan Streamlit.",
    stack: ["Python", "Streamlit"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/263401cd-617f-4517-89fd-2d728cc5f83e.png",
    href: "https://github.com/RifqiArdian09/subtitle_genet-streamlit",
  },
  {
    title: "EssyCoff (POS)",
    description:
      "Sistem Point of Sale modern untuk kedai kopi dengan manajemen inventori, transaksi, pelaporan, dan pengguna.",
    stack: ["Laravel", "Livewire", "Tailwind", "MySQL"],
    status: "Team Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/5a6097ce-f797-4c9b-9be4-1155f4c5e93e.png",
    href: "https://github.com/RifqiArdian09/EssyCoff-Laravel",
    teamMembers: [
      createMember("RifqiArdian09"),
      createMember("Salmanziz21"),
      createMember("Chicktickhack"),
      createMember("RenatanJanuarta"),
      createMember("rfdd024"),
    ],
  },
  {
    title: "SubMaker",
    description:
      "Aplikasi web untuk menghasilkan subtitle otomatis dari file video/audio menggunakan OpenAI Whisper dengan editor.",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    status: "Solo Project",
    image:
      "https://twhnxkjbmpnghevjcooh.supabase.co/storage/v1/object/public/projects/thumbnails/07b0e981-25d0-43a4-b9d6-d90483d25c12.png",
    href: "https://github.com/RifqiArdian09/SubMaker",
  },
];

const certificates = [
  {
    title: "Software Engineering Virtual Experience",
    issuer: "Forage x Skilvul",
    description:
      "Simulasi kerja yang menekankan best practice rekayasa perangkat lunak, mulai dari analisis requirement sampai delivery.",
    issuedAt: "2024",
    badge: "Virtual Experience",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    credentialUrl: "https://www.linkedin.com/in/rifqi-ardian-0547b7388/details/certifications/",
  },
  {
    title: "Belajar Backend Pemula",
    issuer: "Dicoding",
    description:
      "Memahami dasar API, autentikasi, dan deployment menggunakan Node.js, serta praktik keamanan API modern.",
    issuedAt: "2023",
    badge: "Backend",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJGR4RNPYV",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud Skill Boost",
    description:
      "Hands-on lab mengelola resource GCP, Cloud Run, dan Firestore untuk backend yang siap produksi.",
    issuedAt: "2023",
    badge: "Cloud",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=80",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles",
  },
  {
    title: "Fullstack Web Development",
    issuer: "BuildWith Angga",
    description:
      "Kurikulum intensif React, Next.js, dan Laravel dengan penekanan pada UI modern dan integrasi API.",
    issuedAt: "2022",
    badge: "Bootcamp",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
  },
];

const galleryItems = [
  {
    id: "gal-1",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09",
    height: 620,
  },
  {
    id: "gal-2",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    url: "https://nimestream-six.vercel.app/",
    height: 540,
  },
  {
    id: "gal-3",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09/rental-electronics",
    height: 580,
  },
  {
    id: "gal-4",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09/SubMaker",
    height: 500,
  },
  {
    id: "gal-5",
    img: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09/Text-Image-Translator",
    height: 620,
  },
  {
    id: "gal-6",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09/Project-BKK",
    height: 560,
  },
  {
    id: "gal-7",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09/EssyCoff-Laravel",
    height: 520,
  },
  {
    id: "gal-8",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    url: "https://github.com/RifqiArdian09/Celenganku",
    height: 500,
  },
];

const contactMethods = [
  {
    label: "GitHub",
    sublabel: "Connect now",
    href: "https://github.com/RifqiArdian09",
    icon: "github" as const,
  },
  {
    label: "Instagram",
    sublabel: "Connect now",
    href: "https://instagram.com/rifqiard._",
    icon: "instagram" as const,
  },
  {
    label: "Email",
    sublabel: "ardianrifqi77@gmail.com",
    href: "mailto:ardianrifqi77@gmail.com",
    icon: "mail" as const,
  },
];

const contactLocation = "Bengkulu, Indonesia";
const whatsappNumber = "6285182911840";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050306] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-purple-600/30 blur-[140px]" />
        <div className="absolute right-[-5%] top-1/3 h-80 w-80 rounded-full bg-indigo-500/30 blur-[160px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <SiteNav navLinks={navLinks} />
      <HeroSection socialLinks={socialLinks} />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <SayaSection stacks={stacks} focusCards={focusCards} />
        <KaryaSection projects={projects} />
        <SertifikatSection certificates={certificates} />
        <GalerySection items={galleryItems} />
        <KontakSection contacts={contactMethods} location={contactLocation} whatsappNumber={whatsappNumber} />
        <Footer />
      </div>
    </div>
  );
}
