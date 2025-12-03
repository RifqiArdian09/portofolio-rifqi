"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface TeamMember {
  name: string;
  avatar: string;
  profileUrl: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  status: string;
  image: string;
  href?: string;
  teamMembers?: TeamMember[];
}

interface ProjectGalleryProps {
  projects: ProjectItem[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);

  const { visibleProjects, canToggle } = useMemo(() => {
    const limit = 6;
    const hasExtra = projects.length > limit;

    return {
      visibleProjects: showAll || !hasExtra ? projects : projects.slice(0, limit),
      canToggle: hasExtra,
    };
  }, [projects, showAll]);

  return (
    <div className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-[#0b0613] to-transparent p-6 text-white shadow-[0_35px_120px_rgba(5,3,10,0.65)]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.4em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 font-semibold text-white/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> {project.status}
                </span>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[11px] font-semibold text-white/70 transition hover:border-white/60 hover:text-white"
                    aria-label={`Lihat ${project.title}`}
                  >
                    Lihat Project
                    <FiArrowUpRight className="text-base" />
                  </a>
                )}
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/50">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-sky-500/15 opacity-80 mix-blend-screen" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={960}
                  height={540}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 480px, 100vw"
                />
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/70">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-2xl border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85 shadow-[0_10px_30px_rgba(5,3,12,0.35)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.teamMembers && project.teamMembers.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/40">Team</p>
                    <div className="flex flex-wrap items-center pl-6">
                      {project.teamMembers.map((member, index) => (
                        <a
                          key={member.profileUrl}
                          href={member.profileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`group/avatar relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#050306] bg-white/10 transition hover:-translate-y-0.5 ${index !== 0 ? "-ml-3" : ""}`}
                          style={{ boxShadow: "0 8px 20px rgba(6,4,14,0.45)" }}
                        >
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={44}
                            height={44}
                            className="h-full w-full rounded-full object-cover"
                            sizes="44px"
                          />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/25 bg-black/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 opacity-0 transition group-hover/avatar:opacity-100">
                            {member.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {canToggle && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            {showAll ? "Tampilkan lebih sedikit" : "Tampilkan lebih banyak"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
