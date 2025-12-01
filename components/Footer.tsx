import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Saya", href: "#saya" },
  { label: "Karya", href: "#karya" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Galery", href: "#galery" },
  { label: "Kontak", href: "#kontak" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/RifqiArdian09", Icon: FaGithub },
  { label: "Instagram", href: "https://instagram.com/rifqiard._", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rifqi-ardian-0547b7388/", Icon: FaLinkedin },
];

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 px-6 py-10 text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.5em] text-purple-200/80">Rifqi Ardian</p>
          <h3 className="text-2xl font-semibold text-white">Build. Learn. Share.</h3>
          <p className="text-sm text-white/60">Portofolio ini dibangun dengan Next.js, animasi kustom, dan fokus pada pengalaman manusiawi.</p>
        </div>

        <div className="flex flex-col gap-6 text-center text-sm text-white/70 md:flex-row md:text-left">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Navigasi</p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Sosial</p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-lg text-white/60 transition hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Rifqi Ardian. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
