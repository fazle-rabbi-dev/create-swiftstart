import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <main className="min-h-screen max-container padding-container">
        <Outlet />
      </main>
    </>
  );
};
