import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Apartamentos from "../pages/Apartamentos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/apartamentos" element={<Apartamentos />} />
    </Routes>
  );
}