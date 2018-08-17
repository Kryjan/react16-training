import React from 'react';

export const FormGroup = ({ children, bgColor, color }) => (
    <div className="form-group"
        style={{
            backgroundColor: bgColor,
            color: color
        }}>
        {children}
    </div>
)