import { imagesArray } from "@/lib/imagesArray";

export default function PhotoCardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const repeatedImagesArray = Array.from(
    { length: 9 },
    () => imagesArray
  ).flat();

  return (
    <div className="flex flex-col gap-[0.6rem]">
      <div className="overflow-hidden">
        <div className=" flex gap-24 whitespace-nowrap mx-5">
          {Array.from({ length: 12 }, (_, i) => (
            <div className="flex gap-28" key={i}>
              <div className="flex items-center" >
                <span>25A</span>
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M0.5 0.5L0.499999 7.5L18.5 4L0.5 0.5Z"
                    fill="white"
                    fillOpacity="0.7"
                  />
                </svg>
              </div>
              <div>L63 media</div>
            </div>
          ))}
        </div>

        <div className="flex gap-[1.05rem]">
          {Array.from({ length: 120 }, (_, i) => (
            <div className="aspect-[1/1.9] bg-white p-2 rounded-sm" key={i} />
          ))}
        </div>
      </div>
      {children}
      <div className=" overflow-hidden">
        <div className="flex  gap-[1.05rem]">
          {Array.from({ length: 120 }, (_, i) => (
            <div className="aspect-[1/1.9] bg-white p-2 rounded-sm" key={i} />
          ))}
        </div>
        <div className=" flex gap-24 whitespace-nowrap mx-5">
          {Array.from({ length: 12 }, (_, i) => (
            <div className="flex gap-28" key={i}>
              <div className="flex items-center" >
                <span>25A</span>
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M0.5 0.5L0.499999 7.5L18.5 4L0.5 0.5Z"
                    fill="white"
                    fillOpacity="0.7"
                  />
                </svg>
              </div>
              <div>L63 media</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
