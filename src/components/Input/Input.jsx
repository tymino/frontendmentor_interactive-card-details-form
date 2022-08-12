import './Input.sass';

import { memo } from 'react';

const Input = ({
  double = false,
  title = 'block',
  state = {},
  state2 = {},
  changeFunc,
}) => {
  const { value: valMon, error: errMon } = state;
  const { value: valYear, error: errYear } = state2;
  const error = errMon || errYear;

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    changeFunc(value, name);
  };

  return (
    <div className="block">
      <div className="block__title">{title}</div>
      <div className="block__wrapper">
        <input
          name="mon"
          type="text"
          value={valMon}
          onChange={handleInputChange}
        />
        {double && (
          <input
            name="year"
            type="text"
            value={valYear}
            onChange={handleInputChange}
          />
        )}
      </div>
      <div className="block__error">{error}</div>
    </div>
  );
};

export default memo(Input);
