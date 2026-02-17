"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  tech_stack: string[];
};

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, i) => (
        // Make the first item span 2 columns for that "Bento" look
        <Link 
          href={`/projects/${project.slug}`} 
          key={project.id}
          className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all ${i === 0 ? 'md:col-span-2' : ''}`}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech_stack?.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}