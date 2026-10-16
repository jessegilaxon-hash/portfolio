import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./pages/home/App";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./pages/MainLayout";
import ArrayMapping from "./components/ArrayMapping";
import Postcard from "./components/Postcard";
import SignUp from "./pages/SignUp";
// import SignInSignUp from "./components/SignInSignUp";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/map" element={<ArrayMapping />} />
          <Route path="/postcard" element={<Postcard/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
