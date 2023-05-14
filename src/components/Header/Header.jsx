/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
        </div>
    );
};

export default Header;