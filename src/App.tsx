import "./App.css";
import React from "react";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import FormComponent from "./components/Form/FormComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<FormComponent isUpdating={false}/>} />
        <Route path="/update/:id" element={<FormComponent isUpdating={true} />} />
      </Routes>
    </div>
  );
};

export default App;
