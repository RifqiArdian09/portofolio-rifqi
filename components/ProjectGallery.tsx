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
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="group relative rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image
                src={project.image}
                alt={project.title}
                width={960}
                height={540}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 480px, 100vw"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                {project.status}
              </div>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-white hover:text-black"
                  aria-label={`Lihat ${project.title}`}
                >
                  <FiArrowUpRight className="text-lg" />
                </a>
              )}
            </div>

            <div className="relative mx-auto -mt-14 w-[90%] rounded-[28px] border border-white/10 bg-black/80 p-6 text-left shadow-[0_20px_70px_rgba(0,0,0,0.65)] backdrop-blur-lg sm:-mt-20">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-white/70">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.teamMembers && project.teamMembers.length > 0 && (
                <div className="mt-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">Team</p>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.teamMembers.map((member) => (
                      <a
                        key={member.profileUrl}
                        href={member.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                      >
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={48}
                          height={48}
                          className="h-10 w-10 rounded-full border border-white/10 object-cover"
                          sizes="40px"
                        />
                        <span>{member.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
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
