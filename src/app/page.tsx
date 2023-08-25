import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { PhotoScrollSlider } from "@/components/Animation/PhotoScrollSlider";
import Header from "@/components/Header";
import Nav from "@/components/nav/Nav";
import { allDocs } from "contentlayer/generated";
import { ProjectMobileCard } from "@/components/projectCard/ProjectMobileCard";
import PhotoSlider from "@/components/photoCard/PhotoSlider";

async function getAllProjects() {
  const allProjects = allDocs.map((doc) => doc);

  return allProjects;
}

type Params = {
  params: {
    projectName: string;
  };
};

export default async function HomePage({ params }: { params: Params }) {
  const allProjects = await getAllProjects();

  return (
    <>
      <Nav />
      <Header />
      <main className="">
        <section className="flex flex-col gap-16 my-60 items-center overflow-hidden relative">
          <h2 className=" font-playfair text-8xl font-semibold text-center">
            OM MIG
          </h2>
          <PhotoScrollSlider />
          <p className="text-2xl opacity-90 text-center max-w-3xl font-medium ">
            Adam Lindsköld är en...Velit at dis turpis adipiscing blandit lacus.
            Phasellus risus urna metus nam orci in gravida.
          </p>
        </section>
        <section className=" my-60 flex flex-col items-center gap-16 ">
          <h4 className="text-center text-8xl font-playfair font-semibold">
            FILMER
          </h4>
          <div className="flex flex-col md:gap-10 gap-6 ">
           {/*  {allProjects.map((project) => (
              <>
                <ProjectMobileCard>{project.projectName}</ProjectMobileCard>
              </>
            ))} */}
              {allProjects.map((project) => (
              <>
                <ProjectCard
                  key={project._id}
                  url={`/projekt/clean-drink`}
                  rainbow={project.rainbow ? 1 : null}
                  triColor={project.triColor ? 1 : null}
                  purple={project.purple ? 1 : null}
                >
                  {project.projectName}
                </ProjectCard>
              </>
            ))}
            <div className="flex justify-center"></div>
          </div>
        </section>
        <section className=" text-center flex flex-col gap-16">
          <h5 className=" text-8xl font-playfair font-semibold">FOTO</h5>
          <PhotoSlider />
        </section>
      </main>
    </>
  );
}
