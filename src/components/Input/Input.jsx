import './Input.sass';

import { memo } from 'react';

const Input = ({ double = false, title = 'block', state, setState }) => {
  const { value, error } = state;
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setState();
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
      <div className="block__error">err</div>
    </div>
  );

  return;
};

export default memo(Input);
