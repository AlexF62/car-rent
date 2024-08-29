import React from 'react';
import './card.scss';
import { NavLink } from 'react-router-dom';
import carImages from '../../data/carImage';

const Card = ({ car }) => {
    const imageSrc = carImages[car.id];

    return (
        <div className='card'>
            <div className='container'>
                <div className='card'>
                    <div className='card__content'>
                        <img
                            src={imageSrc}
                            alt={car.make}
                            className='card__img'
                        />

                        <h4 className='card__title'>
                            {car.make} {car.model}
                        </h4>

                        <div>
                            <p className='card__text'>{car.year}</p>
                            <p className='card__text'>
                                {car.fuelType ? car.fuelType : 'Топливо нет'}
                            </p>
                            <p className='card__price'>{car.price}$</p>
                        </div>

                        <NavLink
                            to={`/detail/${car.id}`}
                            className='card__link'
                        >
                            see details
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
