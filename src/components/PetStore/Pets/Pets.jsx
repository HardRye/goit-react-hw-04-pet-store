import React from 'react';
import { NavLink } from 'react-router-dom';
import pets from '../../../assets/pets.json';

import styles from './Pets.module.css';

const Pets = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>Available Pets</h3>
    <ul className={styles.cards}>
      {pets.map(pet => (
        <li className={styles.card} key={pet.id}>
          <NavLink to={`/pets/${pet.id}`}>
            <img src={pet.image} alt="" className={styles.image} />
            <p className={styles.name}>{pet.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Pets;
