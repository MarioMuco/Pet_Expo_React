import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimalModal from './AnimalModal';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

function AnimalGallery() {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
    setModalIsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an animal..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div id="categories">
        {filteredAnimals.map(animal => (
          <div className="card_desc" key={animal.id} onClick={() => openModal(animal)}>
            <img src={`/assets/${category}/${animal.name.replace(/\s/g, '')}.jpg`} alt={animal.name.replace(/\s/g, '')} className="img"/>
            <h4>{animal.name}</h4>
            <p>{category === 'birds' ? animal.place_of_found : animal.origin}</p>
          </div>
        ))}
        <AnimalModal isOpen={modalIsOpen} onRequestClose={closeModal} animal={selectedAnimal} />
      </div>
    </div>
  );
}

export default AnimalGallery;
