import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div id="categories">
      <div className="card dogs">
        <Link to="/gallery/dogs">
          <img src="https://i.pinimg.com/736x/1c/0e/ce/1c0ecebc20f3443b2628fa0ea07b601e.jpg" alt="Dogs" />
          <div className="description">
            <h3>Dogs</h3>
            <p>Man's best friend, loyal and loving companions.</p>
          </div>
        </Link>
      </div>
      <div className="card cats">
        <Link to="/gallery/cats">
          <img src="https://i.pinimg.com/564x/8b/b4/9a/8bb49a96d6de9906e1225efe38f9fdee.jpg" alt="Cats" />
          <div className="description">
            <h3>Cats</h3>
            <p>Independent and curious, perfect for cozy homes.</p>
          </div>
        </Link>
      </div>
      <div className="card birds">
        <Link to="/gallery/birds">
          <img src="https://i.pinimg.com/736x/d6/67/fa/d667fa32b8f8ba6ba41ccfab38998639.jpg" alt="Birds" />
          <div className="description">
            <h3>Birds</h3>
            <p>Colorful and melodic, bringing nature's song indoors.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
