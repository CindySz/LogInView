import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/logueo/Register";
import LogIn from "./pages/logueo/LogIn";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import { useState } from "react";
import Layout from "./components/Layout";
import Contact from "./pages/contact/Contact";
import Info from "./pages/info/Info";
import About from "./pages/about/About";
import Error from "./components/Error";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/register"
            element={<Register setIsLogged={setIsLogged} />}
          />
          <Route path="/logIn" element={<LogIn />} />
          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="info" element={<Info />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
