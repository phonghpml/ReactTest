import "./App.css";
import { Header } from "./components/atoms/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./pages";
import { Login } from "./components/atoms/login";
import { SignUp } from "./components/atoms/signup";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
