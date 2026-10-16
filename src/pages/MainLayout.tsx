import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Hero from "../components/WPHero";
import Postcard from "../components/Postcard";

function MainLayout() {
  return (
    <>
      <header>header</header>
      <Outlet />
      <Hero />
      <Postcard />
       <Footer />
      
       
    </>
  );
}

export default MainLayout;
