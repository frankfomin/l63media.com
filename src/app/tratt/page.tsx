import { ProjectMobileCard } from "@/components/projectCard/ProjectMobileCard";

export default function Page() {
  return (
    <div className=" w-[95%] h-[100svh]">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/845279871?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="startsida"
        ></iframe>
      </div>
    </div>
  );
}
