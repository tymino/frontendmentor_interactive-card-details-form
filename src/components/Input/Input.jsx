import './Input.sass';

import { memo } from 'react';

const Input = ({
  double = false,
  title = 'block',
  placeholder = 'Enter',
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

  const setStyleInput = () => {
    return `block__input ${error ? 'block__input--error' : ''}`;
  };

  return (
    <div className="block">
      <div className="block__title">{title}</div>
      <div className="block__wrapper">
        <input
          className={setStyleInput()}
          name="mon"
          type="text"
          placeholder={placeholder}
          value={valMon}
          onChange={handleInputChange}
        />
        {double && (
          <input
            className={setStyleInput()}
            name="year"
            type="text"
            placeholder='YY'
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
