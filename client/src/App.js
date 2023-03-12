// Compnents
import Home from "./container/Home";
import Navbar from "./components/Navbar";
import Single from "./container/Single";
import Write from "./container/Write";
import Settings from "./container/Settings";
import Login from "./container/Login";
import Register from "./container/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/write" element={user ? <Home /> : <Write />} />
        <Route path="/settings" element={user ? <Home /> : <Settings />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
