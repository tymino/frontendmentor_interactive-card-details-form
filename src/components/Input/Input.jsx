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
      <div className="block__container">
        <div className={setStyleInput()}>
          <input
            className="block__input"
            name="mon"
            type="text"
            placeholder={placeholder}
            value={valMon}
            onChange={handleInputChange}
            onBlur={handleInputChange}
          />
        </div>
        {double && (
          <div className={setStyleInput()}>
            <input
              className="block__input"
              name="year"
              type="text"
              placeholder="YY"
              value={valYear}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>
      <div className="block__error">{error}</div>
    </div>
  );
};

export default memo(Input);
