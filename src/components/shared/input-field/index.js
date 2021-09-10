import React from 'react';

const InputField = ({title, type, value, onChangeHandler}) => {
  return (
    <>
      {title}
      <input
        type={type || 'text'}
        value={value}
        onChange={({target: {value}}) => onChangeHandler(value)}
      />
      <br/>
    </>
  )
};

export default React.memo(InputField);