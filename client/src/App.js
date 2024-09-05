import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import AllUsers from "./components/AllUsers";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
