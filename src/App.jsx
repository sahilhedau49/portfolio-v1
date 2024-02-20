import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
