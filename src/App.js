import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Error from './pages/Error';
import User from './pages/User';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';



function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          {isAuth ? <Route path="/admin" element={<Admin />} /> : <Route path="*" element={<Error />} />}
          <Route path="/users" element={<User />} />
          <Route path={`/profile/:id`} element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
