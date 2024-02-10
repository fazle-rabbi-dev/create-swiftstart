import { Routes, Route } from "react-router-dom";
import { RootLayout, Home, NotFound } from "@/pages/root";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;