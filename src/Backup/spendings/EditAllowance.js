import React, { useState } from "react";

const EditAllowance = (props) => {
  const [value, setValue] = useState(props.allowance);
  return (
    <>
      <input
        required="required"
        type="number"
        className="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditAllowance;
