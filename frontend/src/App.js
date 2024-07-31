import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Error from './pages/Error';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/blog/:name' element={<BlogPost/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
