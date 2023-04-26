
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/profile/:user" element={<Profile/>}  />
          </Routes>
        </Router>
      </div>
    );
}

export default App;
