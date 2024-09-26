import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RecruitersManagement from "./pages/RecruitersManagement";
import UsersManagement from "./pages/UsersManagement";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recruiters" element={<RecruitersManagement />} />
          <Route path="/users" element={<UsersManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
