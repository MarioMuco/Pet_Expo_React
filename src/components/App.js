import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimalGallery from './AnimalGallery';

function App() {
  
  return (
    <div className="App">
    <header>
      <h1>Pet Expo</h1>
    </header>

    <main>
      <div id="categories">
      <div class="card dogs">
            <img src="https://i.pinimg.com/736x/1c/0e/ce/1c0ecebc20f3443b2628fa0ea07b601e.jpg" alt="Dogs"/>
            <div class="description">
                <h3>Dogs</h3>
                <p>Man's best friend, loyal and loving companions.</p>
            </div>
        </div>
        <div class="card cats">
            <img src="https://i.pinimg.com/564x/8b/b4/9a/8bb49a96d6de9906e1225efe38f9fdee.jpg" alt="Cats"/>
            <div class="description">
                <h3>Cats</h3>
                <p>Independent and curious, perfect for cozy homes.</p>
            </div>
        </div>
        <div class="card birds">
            <img src="https://i.pinimg.com/736x/d6/67/fa/d667fa32b8f8ba6ba41ccfab38998639.jpg" alt="Birds"/>
            <div class="description">
                <h3>Birds</h3>
                <p>Colorful and melodic, bringing nature's song indoors.</p>
            </div>
        </div>
      </div>
    </main>

    <footer>
    <div class="column" id="about">
        <h2>About Us</h2>
        <p>Welcome to our Animal Gallery!</p>
    </div>
    <div class="column" id="contact">
        <h2>Contact Us</h2>
        <a href="mailto:mucomario4@gmail.com">Feel free to reach out to us.</a>
    </div>
    </footer>
  </div>
  );
}

export default App;
