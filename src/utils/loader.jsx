import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
export default function Loader() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton height={500} duration={2} />
    </SkeletonTheme>
  );
}
