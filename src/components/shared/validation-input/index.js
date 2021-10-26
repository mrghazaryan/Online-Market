import React from 'react';

const ValidationInput = ({title, type, placeholder, value, onChangeHandler, validationMsg}) => {
    return (
        <div className={"input"}>
            {title}
            <input
                placeholder={placeholder}
                type={type || 'text'}
                value={value}
                onChange={({target: {value}}) => onChangeHandler(value)}
            />
            {validationMsg && <span style={{color: 'red'}}>{validationMsg}</span>}
            <br/>
        </div>
    )
};

export default React.memo(ValidationInput);