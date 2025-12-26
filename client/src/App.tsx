import "./App.css";
import { Route, Routes } from "react-router";
import Index from "./pages/index.tsx";
import Dinosaur from "./types/Dinosaur.tsx";

function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/:selectedDinosaur" element={<Dinosaur />} />
    </Routes>
  );
}

export default App;
