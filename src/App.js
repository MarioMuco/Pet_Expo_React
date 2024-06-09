import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalGallery from './components/AnimalGallery';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Pet Expo</h1>
        </header>

        <main>
          <Routes>
            <Route path="/gallery/:animal" element={<AnimalGallery />} />
            <Route path="/" element={<Categories />} />
          </Routes>
        </main>

        <footer>
          <div className="column" id="about">
            <h2>About Us</h2>
            <p>Welcome to our Animal Gallery!</p>
          </div>
          <div className="column" id="contact">
            <h2>Contact Us</h2>
            <a href="mailto:mucomario4@gmail.com">Feel free to reach out to us.</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

