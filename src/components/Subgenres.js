import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Subgenres() {
  const { subGenres, setPage } = useContext(AppContext);
  return (
    <div className="subgenres">
      {subGenres.map(({ id, name }) => (
        <button
          onClick={() => {
            setPage(3);
          }}
          key={id}
        >
          {name}
        </button>
      ))}
      <br />
      <button
        className="addNew"
        onClick={() => {
          setPage(2);
        }}
      >
        Add New
      </button>
    </div>
  );
}

export default Subgenres;
