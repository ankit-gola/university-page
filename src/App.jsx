import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import main pages
import University1 from "./Pages/University1";
import University2 from "./Pages/University2";

// ✅ Import contact pages
import ContactSunshine from "./Pages/ContactSunshine";
import ContactRiverdalePage from "./Pages/ContactRiverdalePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* University pages */}
        <Route path="/" element={<University1 />} />
        <Route path="/university2" element={<University2 />} />

        {/* Contact pages */}
        <Route path="/contact-sunshine" element={<ContactSunshine />} />
        <Route path="/contact-riverdale" element={<ContactRiverdalePage />} />
      </Routes>
    </Router>
  );
}

export default App;
