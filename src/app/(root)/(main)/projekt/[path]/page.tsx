import React, { Suspense } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import ProjectSection from "@/components/ProjectSection";
import MobileVideoPlayer from "@/components/videoPlayers/MobileVideoPlayer";
import VideoPlayer from "@/components/videoPlayers/VideoPlayer";

type Params = {
  params: {
    path: string;
  };
};

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const allProjects = allDocs.filter((doc) => doc.path === params.path);

  return {
    title: `${allProjects[0].projectName} | L63 Media`,
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
        <MobileVideoPlayer
          videoPath={project.videoPath}
          title={project.projectName}
          specAd={project.specAd}
        />
      ) : (
        <VideoPlayer
          videoPath={project.videoPath}
          title={project.projectName}
        />
      )}
      <section className="mt-60 flex flex-col items-center gap-16">
        <ProjectSection />
      </section>
    </main>
  );
}
