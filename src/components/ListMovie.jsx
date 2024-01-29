export default function ListMovie({movie}) {
  return <img alt="" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />;
}
