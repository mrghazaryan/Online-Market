import React from 'react';

const ValidationInput = ({title, type, value, onChangeHandler, validationMsg}) => {
  return (
    <>
      {title}
      <input
        type={type || 'text'}
        value={value}
        onChange={({target: {value}}) => onChangeHandler(value)}
      />
      {validationMsg && <span style={{color: 'red'}}>{validationMsg}</span>}
      <br/>
    </>
  )
};

export default React.memo(ValidationInput);