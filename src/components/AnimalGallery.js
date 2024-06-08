import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AnimalGallery() {
  const [animals, setAnimals] = useState([]);
  const category = window.location.pathname.split('/').pop();

  useEffect(function fetchAnimalsOnMount() {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/${category}`);
        setAnimals(response.data);
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
      }
    };

    fetchAnimals();
  }, [category]);

  return (
    <div id="categories">
      {animals.map(animal => (
        <div className="card_desc" key={animal.id}>
          <img src={`/assets/${category}/${animal.name.replace(/\s/g, '')}.jpg`} alt={animal.name.replace(/\s/g, '')} class="img"/>
          <h4>{animal.name}</h4>
          <p>{category === 'birds' ? animal.place_of_found : animal.origin}</p>
        </div>
      ))}
    </div>
  );
}

export default AnimalGallery;
