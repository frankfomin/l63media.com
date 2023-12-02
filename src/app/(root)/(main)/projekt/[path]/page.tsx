import React, { Suspense } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import ProjectMobileHeader from "@/components/ProjectMobileHeader";
import ProjectHeader from "@/components/ProjectHeader";
import type { Metadata, ResolvingMetadata } from "next";
import ProjectSection from "@/components/ProjectSection";

type Params = {
  params: {
    path: string;
  };
};

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const allProjects = allDocs.filter((doc) => doc.path === params.path);

  return {
    title: `${allProjects[0].projectName} | Adam Lindsköld`,
  };
}

async function getProjectFromParams(path: string) {
  const project = allDocs.find((doc) => doc.path === path);
  if (!project) notFound;

  return project;
}

export default async function ProjectPage({ params }: Params) {
  const project = await getProjectFromParams(params.path);

  if (!project) {
    throw new Error();
  }

  return (
    <main className="uppercase">
      {project.mobile ? (
        <ProjectMobileHeader
          title={project.projectName}
          vimeoPath={project.vimeoPath}
        />
      ) : (
        <ProjectHeader
          title={project.projectName}
          vimeoPath={project.vimeoPath}
        />
      )}
      <section className="flex flex-col items-center gap-16 mt-60">
        <ProjectSection path={params.path} />
      </section>
    </main>
  );
}
