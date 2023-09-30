import { useState } from "react";
import { NotFound } from "components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0)
  
  return (
    <>
      <main className="app">
        <ToastContainer />
        <LoadingBar
          color="#f82b85"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
