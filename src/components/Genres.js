import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Genres() {
  const { setPage, allGenres, selectSubgenres } = useContext(AppContext);
  return (
    <div className="genres">
      {allGenres.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => {
            selectSubgenres(id);
            setPage(1);
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Genres;
