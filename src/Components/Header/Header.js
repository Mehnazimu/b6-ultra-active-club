import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <FontAwesomeIcon className='font' icon={faDumbbell}></FontAwesomeIcon>
                <h2 className='header-text'>Fit-Club</h2>
            </nav>
        </div>
    );
};

export default Header;