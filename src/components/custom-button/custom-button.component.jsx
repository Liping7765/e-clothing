import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children,inverted, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${inverted ? 'inverted' : ''}
        ${inverted ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
    
);

export default CustomButton;