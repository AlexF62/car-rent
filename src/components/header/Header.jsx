/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.scss';
import headerLogo from '../../images/header-logo.svg';
import ListItem from '../listItem/ListItem';
import headerItems from '../../data/headerItems';

const Header = () => {
    return (
        <header className='header '>
            <div className='container'>
                <div className='header__inner'>
                    <a href='index.html' className='header__logo'>
                        <img src={headerLogo} alt='' className='header__img' />
                    </a>
                    <nav className='menu'>
                        <ul className='menu__list'>
                            {headerItems.map((item) => (
                                <ListItem
                                    key={item.id}
                                    className='menu__item-list'
                                >
                                    <a href={item.link}>{item.text}</a>
                                </ListItem>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
