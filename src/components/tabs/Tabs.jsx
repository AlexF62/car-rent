/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import './tabs.scss';
import Select from 'react-select';
import Title from '../title/Title';
import Button from '../button/Button';
import Modal from '../Modal/Modal';
import Card from '../card/Card';
import getCars from '../../helpers/getCars.js';

const INITIAL_STATE = {
    cars: [],
    selectMake: null,
    selectedFuelType: null,
    selectedModel: null,
    filteredCars: [],
    showModal: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload,
            };
        case 'SET_SELECT_MAKE':
            return {
                ...state,
                selectMake: action.payload,
            };
        case 'SET_SELECT_FUEL_TYPE':
            return {
                ...state,
                selectedFuelType: action.payload,
            };
        case 'SET_SELECT_MODEL':
            return {
                ...state,
                selectedModel: action.payload,
            };
        case 'SET_FILTERED_CARS':
            return {
                ...state,
                filteredCars: action.payload,
            };
        case 'SET_SHOW_MODAL':
            return {
                ...state,
                showModal: action.payload,
            };
        default:
            return state;
    }
};

const Tabs = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        getCars((cars) => {
            dispatch({ type: 'SET_CARS', payload: cars });
            dispatch({ type: 'SET_FILTERED_CARS', payload: cars }); // Установка начального состояния filteredCars
        });
    }, []);

    const customStyles = {
        container: (provided) => ({
            ...provided,
            width: 200,
            margin: 70,
        }),
    };

    const uniqueOptions = (options) => {
        const filterAllOptions = new Set();

        for (const car of state.cars) {
            filterAllOptions.add(car[options]);
        }

        return Array.from(filterAllOptions).map((value) => ({
            value: value,
            label: value,
        }));
    };

    const handleMakeChange = (selectedOption) => {
        dispatch({ type: 'SET_SELECT_MAKE', payload: selectedOption }); // Исправлено
    };

    const handleModelChange = (selectedOption) => {
        dispatch({ type: 'SET_SELECT_MODEL', payload: selectedOption });
    };

    const handleFuelTypeChange = (selectedOption) => {
        dispatch({ type: 'SET_SELECT_FUEL_TYPE', payload: selectedOption });
    };

    const filterCars = (cars, field, value) => {
        if (!field || !value) {
            return cars;
        } else {
            return cars.filter((car) => car[field] === value);
        }
    };

    const applyFilters = () => {
        let filtered = state.cars;

        if (state.selectMake) {
            filtered = filterCars(filtered, 'make', state.selectMake.value);
        }
        if (state.selectedFuelType) {
            filtered = filterCars(
                filtered,
                'fuelType',
                state.selectedFuelType.value
            );
        }
        if (state.selectedModel) {
            filtered = filterCars(filtered, 'model', state.selectedModel.value);
        }

        dispatch({ type: 'SET_FILTERED_CARS', payload: filtered });
    };

    useEffect(() => {
        applyFilters();
    }, [state.selectMake, state.selectedFuelType, state.selectedModel]);

    const resetFilter = () => {
        dispatch({ type: 'SET_SELECT_MAKE', payload: null });
        dispatch({ type: 'SET_SELECT_FUEL_TYPE', payload: null });
        dispatch({ type: 'SET_SELECT_MODEL', payload: null });
        dispatch({ type: 'SET_FILTERED_CARS', payload: state.cars });
    };

    const handleAddCar = (newCar) => {
        const updateCar = [newCar, ...state.cars];

        dispatch({ type: 'SET_CARS', payload: updateCar });
        dispatch({ type: 'SET_FILTERED_CARS', payload: updateCar });
    };

    const openModel = (value) => {
        dispatch({ type: 'SET_SHOW_MODAL', payload: value });
    };

    return (
        <section className='choes'>
            <div className='container'>
                <Title text='Choose your car' className='section__title' />
                <div className='tabs'>
                    <div className='tabs__btn'>
                        <Button
                            className='tabs__btn-item tabs__btn-item--active'
                            text=' Car and Minivan'
                        />
                        <Button className='tabs__btn-item' text='Trucks' />
                        <Button
                            className='tabs__btn-item'
                            text=' Crossovers & SUVs'
                        />
                        <Button className='tabs__btn-item' text='Electrified' />
                    </div>
                    <div className='select__filter'>
                        <Select
                            styles={customStyles}
                            options={uniqueOptions('make')}
                            placeholder='Марка авто'
                            onChange={handleMakeChange}
                            value={state.selectMake}
                        />
                        <Select
                            styles={customStyles}
                            options={uniqueOptions('fuelType')}
                            placeholder='Тип топлива'
                            onChange={handleFuelTypeChange}
                            value={state.selectedFuelType}
                        />
                        <Select
                            styles={customStyles}
                            options={uniqueOptions('model')}
                            placeholder='Модель авто'
                            onChange={handleModelChange}
                            value={state.selectedModel}
                        />
                        <Button
                            text='reset filters'
                            className='button__reset'
                            onClick={resetFilter}
                        />

                        <Button
                            text='add car'
                            className='button__reset'
                            onClick={() => openModel(true)}
                        />
                    </div>
                    <div>
                        {state.showModal && (
                            <Modal
                                setActive={openModel}
                                onSubmit={handleAddCar}
                            />
                        )}
                        <div className='card__container-item'>
                            {state.filteredCars.map((car) => (
                                <Card car={car} key={car.id} />
                            ))}
                        </div>
                    </div>
                    <div className='button'>
                        <Button text='SHOW MORE' className='blog__link' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tabs;
