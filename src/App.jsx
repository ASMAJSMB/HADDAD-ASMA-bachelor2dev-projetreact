import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Checklist from "./Pages/Checklist";
import Formulaire from "./Pages/Formulaire"; // Import correct de Formulaire



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Page principale */}
        <Route path="/checklist/:id" element={<Checklist />} /> {/* Page Checklist */}
        <Route path="/formulaire" element={<Formulaire />} /> {/* Page Formulaire */}
      </Routes>
    </Router>
  );
}

export default App;
