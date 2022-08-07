import './Input.sass';

import { memo } from 'react';

const Input = ({ title = '', type = 'text', value, handleChange }) => {
  const handleChangeInput = ({ target }) => {
    handleChange((currentState) => ({ ...currentState, value: target.value }));
  };

  return <input type={type} value={value} onChange={handleChangeInput} />;
};

export default memo(Input);
