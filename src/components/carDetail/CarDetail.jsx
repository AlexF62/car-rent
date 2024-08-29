import React, { useEffect, useState } from 'react';
import './cardetail.scss';
import { useParams } from 'react-router-dom';
import getCars from '../../helpers/getCars';
import carImages from '../../data/carImage';

const CarDetail = () => {
    const { carId } = useParams();

    const [state, setState] = useState({
        car: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchCar = () => {
            getCars((cars) => {
                const foundCar = cars.find((car) => car.id === parseInt(carId));

                if (foundCar) {
                    setState({ car: foundCar, loading: false, error: null });
                } else {
                    setState({
                        car: null,
                        loading: false,
                        error: 'Машина не найдена',
                    });
                }
            });
        };

        fetchCar();
    }, [carId]);

    if (state.loading) {
        return <p>Загрузка данных...</p>;
    }

    if (state.error) {
        return <p>Error</p>;
    }
    const imageSrc = carImages[state.car.id];

    return (
        <div className='car-detail'>
            <div className='container'>
                <div className='car-detail__content'>
                    <img
                        src={imageSrc}
                        alt={state.car.make}
                        className='car-detail__img'
                    />
                    <div className='car-detail'>
                        <h2 className='car-detail__title'>
                            {state.car.make} {state.car.model}
                        </h2>
                        <div>
                            <p className='car-detail__text'>
                                Year: {state.car.year}
                            </p>
                            <p className='car-detail__text'>
                                Fuel Type:
                                {state.car.fuelType}
                            </p>
                            <p className='car-detail__text'>
                                Price: {state.car.price}$
                            </p>
                            <p className='car-detail__description'>
                                {state.car.transmission} {state.car.engine}{' '}
                                {state.car.horsepower}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
