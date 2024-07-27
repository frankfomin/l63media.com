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
}: {
  homePage?: boolean;
}) {
  let allProjects = getAllProjects().sort((a, b) => {
    return a.order - b.order;
  });

  if (homePage) {
    allProjects = allProjects.filter((project) => project.homePage);
  }

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {allProjects.map((project, i) => (
        <React.Fragment key={i}>
          <ProjectCard
            index={i}
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
