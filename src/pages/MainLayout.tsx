import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

function MainLayout() {
  return (
    <>
      <header>header</header>
      <Outlet />
       <Footer />
    </>
  );
}

export default MainLayout;
