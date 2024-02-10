import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import eruda from "eruda";
import AppRoutes from "./routes";

function App() {
  // Eruda console
  useEffect(() => {
    eruda.init({
      element: document.getElementById("console"),
      tools: ["console"]
    });
  }, []);

  return (
    <>
      <AppRoutes />
      <Toaster />
      <p id="console"></p>
    </>
  );
}

export default App;
