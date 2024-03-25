// LazyLoadComponent.js
import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyLoadComponent = ({ children }) => {
    return (
        <LazyLoad height={200} offset={100}>
            {children}
        </LazyLoad>
    );
};

export default LazyLoadComponent;