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
  const { value: val1, error: err1 } = state;
  const { value: val2, error: err2 } = state2;
  const error = err1 || err2;

  const setStyleInput = () => {
    return `block__input ${error ? 'block__input--error' : ''}`;
  };

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    changeFunc(value, name);
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
            autoComplete="disabled"
            placeholder={placeholder}
            value={val1}
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
              autoComplete="disabled"
              placeholder="YY"
              value={val2}
              onChange={handleInputChange}
              onBlur={handleInputChange}
            />
          </div>
        )}
      </div>
      <div className="block__error">{error}</div>
    </div>
  );
};

export default memo(Input);
