import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pets from '../../../assets/pets.json';
import petFindById from '../../../helpers/petFindById';
import styles from './Pet.module.css';

class Pet extends Component {
  state = {
    pet: null,
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        petId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { match } = this.props;
    const { petId } = match.params;
    const pet = petFindById(pets, petId);
    this.setState({ pet });
  }

  handleReturn = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.returnButton}
          onClick={this.handleReturn}
        >
          <i className="fa fa-arrow-left" />
          &ensp;Return
        </button>
        {pet && (
          <div>
            <h3 className={styles.title}>All about {pet.name}</h3>
            <div className={styles.infoWrapper}>
              <img src={pet.image} alt="" className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.infoTitle}>
                  Age: <span className={styles.infoText}>{pet.age}</span>
                </p>
                <p className={styles.infoTitle}>
                  Gender: <span className={styles.infoText}>{pet.gender}</span>
                </p>
                <p className={styles.infoTitle}>
                  Color: <span className={styles.infoText}>{pet.color}</span>
                </p>
                <p className={styles.infoTitle}>
                  Breed: <span className={styles.infoText}>{pet.breed}</span>
                </p>
              </div>
            </div>
            <p className={styles.description}>{pet.description}</p>
          </div>
        )}
        {!pet && (
          <h3 className={styles.title}>
            Sorry, this pet is no longer available
          </h3>
        )}
      </div>
    );
  }
}

export default Pet;
