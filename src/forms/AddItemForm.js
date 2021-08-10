import React, { useState } from "react";
import SelectElement from "./SelectElement";

function AddItemForm(props) {
  const [item, updateItem] = useState("");
  const [cat, updateCat] = useState("");
  const [isValid, updateIsValid] = useState(false);

  const titleChangeHandler = (e) => {
    document.querySelector(".input").classList.remove("is-danger");
    updateItem(e.target.value);
  };

  const updateOptionCategory = (data) => {
    document.querySelector(".help").style.visibility = "hidden";
    document.querySelector(".select").classList.remove("is-danger");
    updateCat(data);
  };

  const validateForm = () => {
    if (item.trim() == "") {
      updateIsValid(false);
      document.querySelector(".input").classList.add("is-danger");
    } else {
      updateIsValid(true);
    }

    if (cat == "") {
      updateIsValid(false);
      document.querySelector(".help").style.visibility = "visible";
      document.querySelector(".select").classList.add("is-danger");
    } else {
      updateIsValid(true);
    }
  };

  const submitHandler = () => {
    //Form validation - is updated?
    validateForm();
    //Update selection
    if (isValid) {
      const data = [{ desc: item, categ: cat }];
      props.onSubmitData(data); //This goes up to the App :)
    }
  };

  const titleClearHandler = () => {
    updateItem("");
  };

  return (
    <div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            onChange={titleChangeHandler}
            value={item}
            className="input"
            type="text"
            placeholder="Short description"
          ></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Category</label>
        <div className="control">
          <SelectElement
            selectProperties={props.selectProperties}
            onUpdateSelection={updateOptionCategory}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button onClick={submitHandler} className="button is-link">
            Add
          </button>
        </div>
        <div className="control">
          <button
            onClick={titleClearHandler}
            className="button is-link is-light"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItemForm;
