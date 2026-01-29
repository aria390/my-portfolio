import type { Project } from "@/app/api/projectsApi/route";
import ProjectClient from "./ProjectClient";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getProjectById(id: string): Promise<Project | undefined> {
  const res = await fetch("https://ariabz.netlify.app/api/projectsApi", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch projects");

  const projects: Project[] = await res.json();
  return projects.find((p) => p.id === id);
}

export default async function ProjectPage(props: PageProps) {
  const { id } = await props.params;
  const project = await getProjectById(id);

  if (!project) {
    return <p className="text-white">Project not found</p>;
  }

  // 👇 فقط رندر، بدون framer-motion
  return <ProjectClient project={project} />;
}
