import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AddNew() {
  const { addNew, setAddNew, handleFirstSubmit } = useContext(AppContext);
  return (
    <form className="addNewSubgenre" onSubmit={handleFirstSubmit}>
      <input
        className="addSubgenre"
        type="text"
        placeholder="Add New Subgenre..."
        value={addNew.name}
        onChange={(e) =>
          setAddNew({ ...addNew, id: Math.random(), name: e.target.value })
        }
      />

      <input
        className="check"
        type="checkbox"
        checked={addNew.isDescriptionRequired}
        onChange={(e) =>
          setAddNew({
            ...addNew,
            isDescriptionRequired: !addNew.isDescriptionRequired,
          })
        }
      />
      <label className="check" htmlFor="scales">
        Description is required for this subgenre
      </label>
      <br />

      <button className="addNew" type="submit">
        Add New
      </button>
    </form>
  );
}

export default AddNew;
