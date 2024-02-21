import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
