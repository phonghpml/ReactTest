import "./App.css";
import Header from "./components/atoms/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.key}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
