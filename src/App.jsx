import { useCallback, useState } from 'react';

import { Input, Card } from './components';

const errorNames = {
  empty: "Can't be blank",
  name: 'Wrong format, letters only',
  number: 'Wrong format, numbers only',
  date: 'Wrong date',
};

const App = () => {
  const [cardName, setCardName] = useState({
    value: 'Qwerty Alex',
    error: '',
  });
  const [cardNumber, setCardNumber] = useState({
    value: '',
    error: '',
  });
  const [cardMonth, setCardMonth] = useState({
    value: '',
    error: '',
  });
  const [cardYear, setCardYear] = useState({
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

  const changeDate = useCallback((value, nameInput) => {
    if (value.match(/[^0-9|\s]+/gi)) return;
    if (value.length > 2) return;

    if (value.length === 0) {
      if (nameInput === 'mon') {
        setCardMonth({ value, error: errorNames.empty });
        return;
      }
      if (nameInput === 'year') {
        setCardYear({ value, error: errorNames.empty });
        return;
      }
    }

    if (value.length === 1 && nameInput === 'mon' && Number(value) > 1) {
      setCardMonth({ value, error: errorNames.date });
      return;
    }
    if (value.length === 2 && nameInput === 'mon' && Number(value) > 12) {
      setCardMonth({ value, error: errorNames.date });
      return;
    }

    if (nameInput === 'mon') {
      setCardMonth({ value, error: '' });
    } else if (nameInput === 'year') {
      setCardYear({ value, error: '' });
    }
  }, []);

  const changeCVC = useCallback((value) => {
    if (value.match(/[^0-9|\s]+/gi)) return;
    if (value.length > 3) return;

    if (value.length === 0) {
      setCardCVC({ value, error: errorNames.empty });
      return;
    }

    setCardCVC({ value, error: '' });
  }, []);

  return (
    <div className="app">
      <div className="app__background"></div>
      <div className="app__card">
        <Card />
      </div>
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
              state={cardMonth}
              state2={cardYear}
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
