import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CountryPage from "./Components/CountryPage/CountryPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Homepage darkMode={darkMode} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/country/:countryName"
          element={<CountryPage darkMode={darkMode} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;