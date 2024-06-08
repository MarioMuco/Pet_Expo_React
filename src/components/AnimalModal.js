import React from 'react';
import Modal from 'react-modal';

const AnimalModal = ({ isOpen, onRequestClose, animal }) => {
    if (!animal) return null;
    const category = window.location.pathname.split('/').pop();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Animal Details"
            className="ReactModal__Content"
        >
            <div className="modal-header">
                <h2>{animal.name}</h2>
                <button className="close-button" onClick={onRequestClose}>Close</button>
            </div>
            <div className="modal-content">
                <img src={`/assets/${category}/${animal.name.replace(/\s/g, '')}.jpg`} alt={animal.name.replace(/\s/g, '')} />
                <div className="text-content">
                    {animal.species ? <p><strong>Species:</strong> {animal.species}</p> : null}
                    {animal.family ? <p><strong>Family:</strong> {animal.family}</p> : null}
                    {animal.habitat ? <p><strong>Habitat:</strong> {animal.habitat}</p> : null}
                    {animal.place_of_found ? <p><strong>Place of found:</strong> {animal.place_of_found}</p> : null}
                    {animal.diet ? <p><strong>Diet:</strong> {animal.diet}</p> : null}
                    {animal.breed_group ? <p><strong>Breed Group:</strong>{animal.breed_group}</p>: null}
                    {animal.size ? <p><strong>Size:</strong> {animal.size}</p> : null}
                    {animal.origin ? <p><strong>Origin:</strong> {animal.origin}</p> : null}
                    {animal.lifespan ? <p><strong>Lifespan:</strong> {animal.lifespan}</p> : null}
                    {animal.temperament ? <p><strong>Temperament:</strong> {animal.temperament}</p> : null}
                    {animal.colors ? <p><strong>Colors:</strong> {animal.colors}</p> : null}
                    {animal.wingspan_cm ? <p><strong>Wingspan:</strong> {animal.wingspan_cm}</p> : null}
                    {animal.weight_kg ? <p><strong>Weight:</strong> {animal.weight_kg}</p> : null}
                    {animal.description ? <p><strong>Description:</strong> {animal.description}</p> : null}
                </div>
            </div>
        </Modal>
    );
};

export default AnimalModal;
