/* eslint-disable default-case */
import React, { useReducer } from 'react';
import Button from '../button/Button';
import './modal.scss';

const initialState = {
    make: '',
    model: '',
    year: '',
    fuelType: '',
    price: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MAKE':
            return {
                ...state,
                make: action.payload,
            };
        case 'SET_MODEL':
            return {
                ...state,
                model: action.payload,
            };
        case 'SET_YEAR':
            return {
                ...state,
                year: action.payload,
            };

        case 'SET_FUEL_TYPE':
            return {
                ...state,
                fuelType: action.payload,
            };

        case 'SET_PRICE':
            return {
                ...state,
                price: action.payload,
            };
    }
};

const Modal = ({ setActive, onSubmit }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        const newCar = {
            make: state.make,
            model: state.model,
            year: state.year,
            fuelType: state.fuelType,
            price: state.price,
            id: Date.now(),
        };

        onSubmit(newCar);
        setActive(false);
    };

    return (
        <div className={'modal active'}>
            <div className='modal__content'>
                <span onClick={() => setActive(false)} className='modal__close'>
                    &times;
                </span>
                <form onSubmit={handleSubmit}>
                    <input
                        label='Make'
                        value={state.make}
                        type='text'
                        onChange={(e) =>
                            dispatch({
                                type: 'SET_MAKE',
                                payload: e.target.value,
                            })
                        }
                        required={true}
                        className='modal__input'
                    />

                    <input
                        label='Model'
                        value={state.model}
                        type='text'
                        onChange={(e) =>
                            dispatch({
                                type: 'SET_MODEL',
                                payload: e.target.value,
                            })
                        }
                        required={true}
                        className='modal__input'
                    />

                    <input
                        label='Year'
                        value={state.year}
                        type='text'
                        onChange={(e) =>
                            dispatch({
                                type: 'SET_YEAR',
                                payload: e.target.value,
                            })
                        }
                        required={true}
                        className='modal__input'
                    />

                    <input
                        label='fuelType'
                        value={state.fuelType}
                        type='text'
                        onChange={(e) =>
                            dispatch({
                                type: 'SET_FUEL_TYPE',
                                payload: e.target.value,
                            })
                        }
                        required={true}
                        className='modal__input'
                    />

                    <input
                        label='Price'
                        value={state.price}
                        type='text'
                        onChange={(e) =>
                            dispatch({
                                type: 'SET_PRICE',
                                payload: e.target.value,
                            })
                        }
                        required={true}
                        className='modal__input'
                    />

                    <Button text='Add' type='submit' className='form__button' />
                </form>
            </div>
        </div>
    );
};

export default Modal;
