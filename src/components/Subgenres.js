import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Subgenres() {
  const { subGenres, setPage, setDesider } = useContext(AppContext);
  return (
    <div className="subgenres">
      {subGenres.map(({ id, name }) => (
        <button
          onClick={() => {
            setPage(2);
            setDesider(false);
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
          setDesider(true);
        }}
      >
        Add New
      </button>
    </div>
  );
}

export default Subgenres;
