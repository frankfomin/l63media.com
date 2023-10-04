import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { PhotoScrollSlider } from "@/components/Animation/PhotoScrollSlider";
import Header from "@/components/Header";
import Nav from "@/components/nav/Nav";
import { allDocs } from "contentlayer/generated";
import { ProjectMobileCard } from "@/components/projectCard/ProjectMobileCard";
import PhotoSlider from "@/components/photoCard/PhotoSlider";
import Button from "@/components/ui/Button";
import Link from "next/link";

async function getAllProjects() {
  const allProjects = allDocs.map((doc) => doc);

  return allProjects;
}

export default async function HomePage() {
  const allProjects = await getAllProjects();

  return (
    <main className="flex flex-col gap-72">
      <Nav />
      <Header />
      <section className="flex flex-col gap-6 items-center overflow-hidden relative">
        <h2 className=" font-playfair text-subHeading font-semibold text-center">
          OM MIG
        </h2>
        <PhotoScrollSlider />
        <p className="text-2xl opacity-90 text-center max-w-3xl font-medium ">
          Adam Lindsköld är en...Velit at dis turpis adipiscing blandit lacus.
          Phasellus risus urna metus nam orci in gravida.
        </p>
      </section>
      <section className="flex flex-col items-center md:gap-10 gap-6 ">
        <h4 className="text-center text-subHeading font-playfair font-semibold">
          Filmer
        </h4>
        <div className="flex flex-col gap-6 ">
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
              <div className=" ">
                <ProjectMobileCard
                  path={project.path ? project.path : "/"}
                  key={project._id}
                  rainbow={project.rainbow}
                  triColor={project.triColor}
                  purple={project.purple}
                >
                  {project.projectName}
                </ProjectMobileCard>
              </div>
            </>
          ))}
          <Link href="/reklamfilmer">
            <Button>Alla Filmer</Button>
          </Link>
        </div>
      </section>
      <section className=" text-center flex flex-col gap-6">
        <h5 className=" text-subHeading font-playfair font-semibold">FOTO</h5>
        <PhotoSlider />
        <Link href="/foto">
          <Button>Alla Foton</Button>
        </Link>
      </section>
    </main>
  );
}
