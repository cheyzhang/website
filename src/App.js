import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

// components! the pages!
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:page" element={<NavBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
