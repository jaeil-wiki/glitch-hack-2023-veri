import React from 'react';
import NavBar from "./components/NavBar";
import {RootRouter} from "./routes";
import {RouterProvider} from "react-router-dom";

function App() {
  return (
      <RouterProvider router={RootRouter}/>
  );
}

export default App;
