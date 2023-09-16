import React from "react";
import { NotFound } from "components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <main className="app">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
