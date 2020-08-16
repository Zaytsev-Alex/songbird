import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.scss'

const Navigation = ({ current }) => {
    const navItems = [
        {
            id: 0,
            name: 'Разминка',
            active: true,
            className: ['nav__item', 'nav__item-active'],
        },
        {
            id: 1,
            name: 'Воробьиные',
            active: false,
            className: ['nav__item'],
        },
        {
            id: 2,
            name: 'Лесные птицы',
            active: false,
            className: ['nav__item'],
        },
        {
            id: 3,
            name: 'Певчие птицы',
            active: false, 
            className: ['nav__item'],
        },
        {
            id: 4,
            name: 'Хищные птицы',
            active: false,
            className: ['nav__item'],
        },
        {
            id: 5,
            name: 'Морские птицы',
            active: false,
            className: ['nav__item'],
        },
    ];

    navItems.forEach((item, idx) => {
        if (item.className.indexOf('nav__item-active') > 0) {
            item.className.splice(item.className.indexOf('nav__item-active'), 1);
        }

        if (idx === current) {
            item.className.push('nav__item-active');
        }
    });

    return (
        <nav className="nav">
            {navItems.map((item) => 
                <li className={item.className.join(' ')} key={item.id}>{item.name}</li>
            )}
        </nav>
    )
}

Navigation.propTypes  = {
    current: PropTypes.number
}

Navigation.defaultProps = {
    current: 0
}

export default Navigation;
