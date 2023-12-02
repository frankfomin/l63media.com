import { allDocs } from "contentlayer/generated";
import React from "react";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectMobileCard from "./projectCard/ProjectMobileCard";

function getAllProjects() {
  const allProjects = allDocs.sort((a, b) => {
    return a.order - b.order;
  });

  return allProjects;
}

function getFilteredProject(path: string) {
  const filteredProjects = allDocs.filter((doc) => doc.path !== path);

  return filteredProjects;
}

export default async function ProjectSection({ path }: { path?: string }) {
  if (path) {
    const filteredProjects = getFilteredProject(path);
    return (
      <div className="flex flex-col gap-6 ">
        {filteredProjects.map((project, i) => (
          <React.Fragment key={i}>
            <ProjectCard
              videoPath={project.videoPath}
              path={project.path}
              bg1={project.bg1}
              bg2={project.bg2}
              bg3={project.bg3}
              projectStyle={project.projectStyle}
              rotation={project.rotation}
              lineSpacing={project.lineSpacing}
            >
              {project.projectName}
            </ProjectCard>
            <ProjectMobileCard
              videoPath={project.videoPath}
              path={project.path}
              bg1={project.bg1}
              bg2={project.bg2}
              bg3={project.bg3}
              projectStyle={project.projectStyle}
              rotation={project.rotation}
              lineSpacing={project.lineSpacing}
              imagePath={
                project.imagePath
                  ? project.imagePath
                  : "/images/cleanthumbnail.webp"
              }
            >
              {project.projectName}
            </ProjectMobileCard>
          </React.Fragment>
        ))}
      </div>
    );
  }

  const allProjects = getAllProjects();
  return (
    <div className="flex flex-col gap-6 ">
      {allProjects.map((project, i) => (
        <React.Fragment key={i}>
          <ProjectCard
            videoPath={project.videoPath}
            path={project.path}
            bg1={project.bg1}
            bg2={project.bg2}
            bg3={project.bg3}
            projectStyle={project.projectStyle}
            rotation={project.rotation}
            lineSpacing={project.lineSpacing}
          >
            {project.projectName}
          </ProjectCard>
          <ProjectMobileCard
            videoPath={project.videoPath}
            path={project.path}
            bg1={project.bg1}
            bg2={project.bg2}
            bg3={project.bg3}
            projectStyle={project.projectStyle}
            rotation={project.rotation}
            lineSpacing={project.lineSpacing}
            imagePath={
              project.imagePath
                ? project.imagePath
                : "/images/cleanthumbnail.webp"
            }
          >
            {project.projectName}
          </ProjectMobileCard>
        </React.Fragment>
      ))}
    </div>
  );
}
