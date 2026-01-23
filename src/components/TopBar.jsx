import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="top-bar">
            <Link to="/">
                <img
                    src={`${import.meta.env.BASE_URL}beermateX4.png`}
                    alt="Beermate Logo"
                    className="top-bar-logo"
                />
            </Link>
        </div>
    );
};

export default TopBar;
