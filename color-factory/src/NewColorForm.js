import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {
  const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    updateForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    // console.log({ [form.name]: form.hex });
    navigate("/colors");
  };

  const { hex, name } = form;

  return (
    <div className="NewColorForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="enter new color name"
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            value={hex}
            onChange={handleChange}
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
  );
};
export default NewColorForm;
