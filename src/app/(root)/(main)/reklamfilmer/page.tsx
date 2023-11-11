import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { ProjectMobileCard } from "@/components/projectCard/ProjectMobileCard";
import { allDocs } from "contentlayer/generated";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reklamfilmer | Adam Lindsköld",
}

async function getAllProjects() {
  const allProjects = allDocs.map((doc) => doc);

  return allProjects;
}



export default async function FilmPage() {
  const allProjects = await getAllProjects();


  return (
    <main className="flex flex-col gap-20">
      <header className="flex items-center flex-col gap-1 mt-16">
        <h1 className="text-center leading-tight text-longHeading font-playfair font-semibold">
          Reklamfilmer
        </h1>
        <span className=" max-w-2xl text-center text-paragraph lowercase">
          <span className="uppercase">U</span>rna sed magna mauris sem
          pellentesque penatibus praesent. Imperdiet consectetur fermentum eget
          enim commodo tempor. Dictumst tristique a sed est et sit. consectetur
          fermentum eget enim commodo tempor. Dictumst tristique a sed est et
          sit.
        </span>
      </header>
      <section className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col md:gap-10 gap-6 ">
          {allProjects.map((project, i) => (
            <React.Fragment key={i}>
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
              <div className=" ">
                <ProjectMobileCard
                  imagePath={
                    project.imagePath
                      ? project.imagePath
                      : "/images/cleanthumbnail.webp"
                  }
                  path={project.path ? project.path : "/"}
                  key={project._id}
                  rainbow={project.rainbow}
                  triColor={project.triColor}
                  purple={project.purple}
                >
                  {project.projectName}
                </ProjectMobileCard>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
