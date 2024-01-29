import {useEffect, useState} from "react";
import {getMovieTranding} from "../api";
export default function TopContent({searchItems}) {
  const [trandingMovie, setTrandingMovie] = useState([]);
  const searchInput = async (q) => {
    searchItems(q);
  };

  useEffect(() => {
    getMovieTranding().then((data) => {
      setTrandingMovie(data);
    });
  }, []);

  return (
    <div className="top">
      <div className="columns">
        {trandingMovie.length > 0 ? (
          <div className="column is-full featured_wrapper p-0">
            <img alt="" src={`${process.env.REACT_APP_BASEIMGURL}/${trandingMovie[0].backdrop_path}`} className="featured" />
            <div className="title_wrapper">
              <span className="has-text-white">Trending Today</span>
              <h1 className="title is-1 has-text-white">{trandingMovie[0].title}</h1>
              <p className="has-text-white">{trandingMovie[0].overview}</p>
              <button className="button is-medium">Watch It Now</button>
            </div>
          </div>
        ) : null}
        <div className="search_wrapper">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              searchInput(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
