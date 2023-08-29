import React from "react";
import VideoPlayer from "@/components/videoPlayers/VideoPlayer";

type ProjectHeaderProps = {
  title: string;
  vimeoPath?: number;
};
export default function ProjectHeader({
  title,
  vimeoPath,
}: ProjectHeaderProps) {
  return <VideoPlayer title={title} vimeoPath={vimeoPath} />;
}
