import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../style.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
