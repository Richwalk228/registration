import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Login, Market, Registration } from "./pages";
import { useEffect } from "react";
import useTheme from "./hooks/useTheme";

function App() {
  const navigator = useNavigate();

  const isLightTheme = useTheme((x) => x.isLightTheme);

  useEffect(() => {
    if (isLightTheme) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [isLightTheme]);

  return (
    <>
      <Routes>
        //
        <Route path="/" element={<Login />} />
        //
        <Route path="/registration" element={<Registration />} />
        //
        <Route path="/market" element={<Market />} />
        //
      </Routes>
    </>
  );
}

export default App;
