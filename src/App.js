import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, Services, Blog } from "./Components";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route extact path="/" element={<HomeScreen />} />
          <Route extact path="services" element={<Services />} />
          <Route extact path="blogs" element={<Blog />} />
          {/* <Route extact path="services" element={<Services />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
