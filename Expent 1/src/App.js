import React from "react";
import Header from "./Components/Home/Header";
import Projects from "./Components/Home/Projects";
import Footer from "./Components/Home/Footer";
import Flow from "./Components/ReactFlow/Flow";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Header />

          <Footer />
        </>
      }
    >
      <Route index element={<Projects />} />
      <Route path="/flow" element={<Flow/>}/>
    </Route>
  )
);

const App = () => {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
