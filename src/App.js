import React, { useEffect } from "react";
import ProjectRoutes from "./utils/ProjectRoutes";
import "./App.css";
import "./animations.css";
import {useSelector } from "react-redux";

const App = () => {
  const {rerender_app } = useSelector( (state) => state.authToken );


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  useEffect(() => {
  }, [rerender_app]);

  return (
    <div className="app">
      <ProjectRoutes />
    </div>
  );
};

export default App;
