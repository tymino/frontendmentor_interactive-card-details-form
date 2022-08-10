import { useCallback, useState } from 'react';

import { Input } from './components';

const errorNames = {
  empty: "Can't be blank",
  name: 'Wrong format, letters only',
  number: 'Wrong format, numbers only',
};

const App = () => {
  const [cardName, setCardName] = useState({
    value: '',
    error: '',
  });
  const [cardNumber, setCardNumber] = useState({
    value: '',
    error: '',
  });
  const [cardDate, setCardDate] = useState({
    value: '',
    error: '',
  });
  const [cardCVC, setCardCVC] = useState({
    value: '',
    error: '',
  });

  const changeName = useCallback((value) => {
    value.match(/[^a-z|\s]+/gi)
      ? setCardName({ value, error: errorNames.name })
      : setCardName({ value, error: '' });
  }, []);

  const changeNumber = useCallback((value) => {
    if (value.length > 19) return;
    if (value.length === 0) {
      setCardNumber({ value, error: errorNames.empty });
      return;
    }

    const updateValue = value
      .replace(/\W/gi, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();

    if (updateValue.match(/[^0-9|\s]+/gi)) {
      setCardNumber({ value: updateValue, error: errorNames.number });
    } else {
      setCardNumber({ value: updateValue, error: '' });
    }
  }, []);

  const changeDate = useCallback((value) => {}, []);

  const changeCVC = useCallback((value) => {}, []);

  return (
    <div className="app">
      <div className="app__info info">
        <div className="info__name">
          <Input
            title="cardholder name"
            state={cardName}
            changeFunc={changeName}
          />
        </div>
        <div className="info__number">
          <Input
            title="card number"
            state={cardNumber}
            changeFunc={changeNumber}
          />
        </div>
        <div className="info__wrapper">
          <div className="info__row-date">
            <Input
              double
              title="exp, date (mm/yy)"
              state={cardDate}
              changeFunc={changeDate}
            />
          </div>
          <div className="app__row-cvc">
            <Input title="cvc" state={cardCVC} changeFunc={changeCVC} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
