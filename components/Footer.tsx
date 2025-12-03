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
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs text-white/50">
          {new Date().getFullYear()} Rifqi Ardian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
