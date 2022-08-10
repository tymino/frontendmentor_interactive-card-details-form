import './Input.sass';

import { memo } from 'react';

const Input = ({ double = false, title = 'block', state, changeFunc }) => {
  const { value, error } = state;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(e.target.value.length);

    changeFunc(value);
  };

  return (
    <div className="block">
      <div className="block__title">{title}</div>
      <div className="block__wrapper">
        <input
          name="0"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
        {double && (
          <input
            name="1"
            type="text"
            value={value}
            onChange={handleInputChange}
          />
        )}
      </div>
      <div className="block__error">{error}</div>
    </div>
  );
};

export default memo(Input);
