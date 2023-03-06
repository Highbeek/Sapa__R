import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Sapa";
import HowItWorks from "./pages/HowItWorks";
import Discover from "./pages/Discover";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function Parent() {

  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Discover" element={<Discover />}></Route>
        <Route path="/HowItWorks" element={<HowItWorks />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
}

export default Parent;
