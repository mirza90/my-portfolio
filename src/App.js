import './App.css';
import {Header} from "./components/Header"

function App() {
  return (
    <div>
    <Header />
    <div className="main-container">
      <div className="single-page about-page" id="about">ABOUT</div>
      <div className="single-page projects-page" id="projects">PROJECTS</div>
      <div className="single-page blog-page" id="blog">BLOG</div>
    </div>
  </div>
  );
}

export default App;
