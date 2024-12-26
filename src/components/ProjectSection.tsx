import { allDocs } from "contentlayer/generated";
import React from "react";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectMobileCard from "./projectCard/ProjectMobileCard";

function getAllProjects() {
  const allProjects = allDocs
    .filter((project) => !project.deprecated)
    .sort((a, b) => {
      return a.order - b.order;
    });

  return allProjects;
}

export default async function ProjectSection({
  homePage,
  path,
}: {
  homePage?: boolean;
  path?: string;
}) {
  let allProjects = getAllProjects();

  if (homePage) {
    allProjects = allProjects.filter((project) => project.homePage);
  } else if (path) {
    allProjects = allProjects.filter((project) => project.path !== path);
  }

  return (
    <div className="flex w-full flex-col items-center gap-6">
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
            imagePath={project.imagePath}
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
            imagePath={project.imagePath}
          >
            {project.projectName}
          </ProjectMobileCard>
        </React.Fragment>
      ))}
    </div>
  );
}
