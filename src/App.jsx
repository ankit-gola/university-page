// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import University1 from "./University1";
// import University2 from "./University2";
// import Contact from "./Contact"; // ✅ make sure this file exists in src/

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<University1 />} />
//         <Route path="/university2" element={<University2 />} />
//         <Route path="/contact" element={<Contact />} /> {/* ✅ Add this line */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages from the pages folder
import University1 from "./Pages/University1";
import University2 from "./Pages/University2";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<University1 />} />
        <Route path="/university2" element={<University2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

