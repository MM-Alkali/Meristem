import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResearchPage from "./pages/ResearchPage";
import CareerPage from "./pages/CareerPage";

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
