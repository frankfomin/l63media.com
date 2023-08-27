import { ProjectData } from "@/lib/ProjectData";
import Image from "next/image";
import { Suspense } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectCard } from "@/components/projectCard/ProjectCard";
import ProjectHeader from "@/components/ProjectHeader";
import AnimationCard from "@/components/HomeAnimationCard";
import Framertest from "@/components/Framertest";
import ProjectHeader2 from "@/components/prototypes/ProjectHeader2";
import { ProjectMobileCard } from "@/components/projectCard/ProjectMobileCard";

type Params = {
  params: {
    projectName: string;
  };
};

async function getProjectFromParams(projectName: string) {
  const project = allDocs.find((doc) => doc.slugAsParams === projectName);
  if (!project) notFound;

  return project;
}

async function getAllProjects() {
  const allProjects = allDocs.map((doc) => doc);

  return allProjects;
}

export default async function ProjectPage({ params }: Params) {
  const project = await getProjectFromParams(params.projectName);
  const allProjects = await getAllProjects();

  if (!project) {
    throw new Error();
  }

  return (
    <main className="uppercase">
      <ProjectHeader2 />
      <section className="flex flex-col items-center gap-16 mt-60">
        <h2 className=" text-center text-8xl font-playfair font-semibold">
          Mer Filmer
        </h2>

        <div className="flex flex-col md:gap-10 gap-6 ">
          <Suspense fallback={<div>Loading...</div>}>
            {allProjects.map((project) => (
              <>
                <ProjectCard
                  key={project._id}
                  rainbow={project.rainbow ? 1 : null}
                  triColor={project.triColor ? 1 : null}
                  purple={project.purple ? 1 : null}
                  url=""
                >
                  {project.projectName}
                </ProjectCard>
                <ProjectMobileCard
                  key={project._id}
                  triColor={project.triColor}
                  purple={project.purple}
                  rainbow={project.rainbow}
                >
                  {project.projectName}
                </ProjectMobileCard>
              </>
            ))}
          </Suspense>
        </div>
      </section>
    </main>
  );
}
