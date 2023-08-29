import MobileVideoPlayer from "./videoPlayers/MobileVideoPlayer";
type ProjectMobileProps = {
  title: string;
  vimeoPath?: number;
};
export default function ProjectMobileHeader({
  title,
  vimeoPath,
}: ProjectMobileProps) {
  return <MobileVideoPlayer title={title} vimeoPath={vimeoPath} />;
}
