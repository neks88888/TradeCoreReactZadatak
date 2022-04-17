import React, { useState } from "react";
import Genres from "./Genres";
import Subgenres from "./Subgenres";
import AddNew from "./AddNew";
import BookForm from "./BookForm";
import { AppContext } from "../context/AppContext";

function Form(props) {
  const [page, setPage] = useState(0);
  const allGenres = props.data.genres;
  const [subGenres, setSubgenres] = useState([]);
  const [addNew, setAddNew] = useState({
    id: 0,
    name: "",
    isDescriptionRequired: false,
  });

  const FormTitles = [
    "AllGenres",
    "Subgenres",
    "Create New Genre",
    "Add New Book",
  ];

  const selectSubgenres = (id) => {
    const selGenre = allGenres.find((g) => g.id === id);
    console.log(selGenre);
    setSubgenres(selGenre.subgenres);
  };

  const handleFirstSubmit = (event) => {
    event.preventDefault();
    setSubgenres([...subGenres, addNew]);
    setPage(3);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Genres />;
    } else if (page === 1) {
      return <Subgenres />;
    } else if (page === 2) {
      return <AddNew />;
    } else if (page === 3) {
      return <BookForm />;
    } else if (page === 4) {
      return (
        <div className="end">
          <h1>Successfylly added a new book</h1>
        </div>
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        setPage,
        allGenres,
        selectSubgenres,
        subGenres,
        handleFirstSubmit,
        addNew,
        setAddNew,
      }}
    >
      <div>
        <div className="progressbar">
          <div
            style={{
              borderRadius: "5px",
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
        <div>
          <div>
            <h1>{FormTitles[page]}</h1>
          </div>
          <div>{PageDisplay()}</div>
          <div className="buttons-container">
            <button
              className="prev"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Previous
            </button>

            <button
              className="prev"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Form;
