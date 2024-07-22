import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/loginindex";
import Main from "./components/main/mainindex";
import Signup from "./components/signup/signupindex";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
