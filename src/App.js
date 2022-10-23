import React from "react";
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Navbar from './inc/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import Single from './pages/Singlepost';



function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/create" element={<CreatePost/>} />
        <Route exact path="/posts/:id" element={<Single/>} />
      </Routes>
    </Router>



  );
}


export default App;