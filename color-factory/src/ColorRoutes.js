import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Color from "./Color";
import NewColorForm from "./NewColorForm";
import ColorList from "./ColorList";

const ColorRoutes = () => {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };

  const [colors, updateColors] = useState(initialColors);

  const handleAdd = (newColorObj) => {
    console.log(colors);
    console.log(newColorObj);
    updateColors((prevColors) => ({ ...prevColors, newColorObj }));
    console.log(colors);
  };
  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        <Route
          exact
          path="/colors/new"
          element={<NewColorForm addColor={handleAdd} />}
        />
        <Route exact path="/colors/:colors" render={renderCurrentColor} />
      </Routes>
    </BrowserRouter>
  );
};

export default ColorRoutes;
