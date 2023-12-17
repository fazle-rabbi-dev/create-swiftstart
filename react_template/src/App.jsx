import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import RootLayout from "@/_root/RootLayout";
import { Home } from "@/_root";

function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
