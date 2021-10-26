import React from 'react';

const ProductInput = ({title, type, value, onChangeHandler, validationMsg}) => {
    return (
        <>
            {title}
            <input className={'inputs'}
                   type={type || 'text'}
                   value={value}
                   onChange={({target: {value}}) => onChangeHandler(value)}
            />
            {validationMsg && <span style={{color: 'red'}}>{validationMsg}</span>}
            <br/>
        </>
    )
};

export default React.memo(ProductInput);