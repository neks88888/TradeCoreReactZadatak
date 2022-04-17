import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const BookForm = () => {
  const { setPage } = useContext(AppContext);
  const [state, setState] = useState({
    title: "",
    author: "",
    ISBN: "",
    publisher: "",
    date: "",
    numberOfPages: "",
    format: "",
    edition: "",
    language: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();

    if (
      !state.title ||
      !state.author ||
      !state.ISBN ||
      !state.publisher ||
      !state.date ||
      !state.numberOfPages ||
      !state.format ||
      !state.edition ||
      !state.language
    ) {
      // console.log(state.title);
      // console.log(state.author);
      // console.log(state.ISBN);
      // console.log(state.publisher);
      // console.log(state.date);
      // console.log(state.numberOfPages);
      alert("Fields must not be empsty (all fields must be populated).");
      return;
    } else {
      setPage(3);
    }
  };
  return (
    <form className="addNewBook" onSubmit={handleSubmitTwo}>
      <label htmlFor="title">
        Book Title:
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Book Title"
        />
      </label>
      <label htmlFor="author">
        Author
        <br />
        <select name="author" value={state.author} onChange={handleChange}>
          <option value="John Doe">John Doe</option>
          <option value="Arnold">Arnold Schawatseneger</option>
          <option value="Ben Awad">Ben Awad</option>
        </select>
      </label>
      <label>
        ISBN:
        <input
          type="text"
          value={state.ISBN}
          name="ISBN"
          onChange={handleChange}
          placeholder="ISBN"
        />
      </label>

      <label>
        Publisher:
        <select
          name="publisher"
          value={state.publisher}
          onChange={handleChange}
        >
          <option value="Dummy1">Dummy1</option>
          <option value="Dummy2">Dummy2</option>
          <option value="Dummy3">Dummy3</option>
        </select>
      </label>
      <label>
        Date published:
        <input
          value={state.date}
          type="date"
          id="start"
          name="date"
          min="2018-01-01"
          max="2018-12-31"
          onChange={handleChange}
        />
      </label>
      <label>
        Number of pages:
        <input
          type="number"
          name="numberOfPages"
          value={state.numberOfPages}
          onChange={handleChange}
          min="1"
          max="100000"
        />
      </label>
      <label>
        Format:
        <select
          className="format"
          name="format"
          value={state.format}
          onChange={handleChange}
        >
          <option value="Format1">Format1</option>
          <option value="Format2">Format2</option>
          <option value="Format3">Format3</option>
        </select>
      </label>

      <label>
        Edition:
        <input
          type="number"
          name="edition"
          value={state.edition}
          onChange={handleChange}
          min="1"
          max="100000"
        />
      </label>

      <label>
        Edition Language:
        <select value={state.language} name="language" onChange={handleChange}>
          <option value="Format1">Format1</option>
          <option value="Format2">Format2</option>
          <option value="Format3">Format3</option>
        </select>
      </label>
      <input
        type="submit"
        onSubmit={handleSubmitTwo}
        className="sub"
        value="Submit"
      />
    </form>
  );
};

export default BookForm;
