import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />        
        </Routes>
      </Router>
    </>
  )
}

export default App
