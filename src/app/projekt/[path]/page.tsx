import { Suspense } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { ProjectMobileCard } from "@/components/projectCard/ProjectMobileCard";
import ProjectMobileHeader from "@/components/ProjectMobileHeader";
import ProjectHeader from "@/components/ProjectHeader";

type Params = {
  params: {
    path: string;
  };
};

async function getProjectFromParams(path: string) {
  const project = allDocs.find((doc) => doc.path === path);
  if (!project) notFound;

  return project;
}

async function getAllProjects(path: string) {
  const allProjects = allDocs.filter((doc) => doc.path !== path);

  return allProjects;
}

export default async function ProjectPage({ params }: Params) {
  const project = await getProjectFromParams(params.path);
  const allProjects = await getAllProjects(params.path);

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
        <h2 className=" text-center text-projectMerFilmer font-playfair font-semibold">
          Mer Filmer
        </h2>

        <div className="flex flex-col md:gap-10 gap-6 ">
          <Suspense fallback={<div>Loading...</div>}>
            {allProjects.map((project) => (
              <>
                <ProjectCard
                  videoPath={project.videoPath}
                  path={project.path}
                  key={project._id}
                  rainbow={project.rainbow ? 1 : null}
                  triColor={project.triColor ? 1 : null}
                  purple={project.purple ? 1 : null}
                >
                  {project.projectName}
                </ProjectCard>
                <ProjectMobileCard
                  path={project.path}
                  key={project._id}
                  rainbow={project.rainbow}
                  triColor={project.triColor}
                  purple={project.purple}
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
