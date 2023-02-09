import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, Services, Blog, Insta } from "./Components";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route extact path="/" element={<HomeScreen />} />
          <Route extact path="services" element={<Services />} />
          <Route extact path="blogs" element={<Blog />} />
          <Route extact path="instra" element={<Insta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
