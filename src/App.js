import "./App.css";
import { Header } from "./components/atoms/header/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Game, Home } from "./pages/index.js";
import { Login } from "./components/atoms/login/index.tsx";
import { SignUp } from "./components/atoms/signup/index.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Body /> */}
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Game" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
