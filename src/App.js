import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgetPassword";
import Dashboard from "./pages/admin/dashboard";
import ManageProjects from "./pages/admin/manageProjects";
import NewProject from "./pages/admin/newProject";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-projects" element={<ManageProjects />} />
          <Route path="/new-project" element={<NewProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
