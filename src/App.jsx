import './App.sass';
import { useCallback, useState } from 'react';

import { Alert, Button, Card, Input } from './components';

const errorNames = {
  empty: "Can't be blank",
  name: 'Wrong format, letters only',
  number: 'Wrong format, numbers only',
  date: 'Wrong date',
  format: 'Wrong format',
};

const App = () => {
  const [isSavedDetails, setIsSavedDetails] = useState(false);

  const [cardName, setCardName] = useState({
    value: '',
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
    if (value.length > 19) return;
    if (value.length === 0) {
      setCardName({ value, error: errorNames.empty });
      return;
    }

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
    } else if (updateValue.length < 19) {
      setCardNumber({ value: updateValue, error: errorNames.format });
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
      setCardMonth({ value: `0${value}`, error: '' });
      return;
    }

    if (value.length === 1 && nameInput === 'mon' && Number(value) < 2) {
      setCardMonth({ value, error: errorNames.date });
      return;
    }

    if (value.length === 2 && nameInput === 'mon' && Number(value) > 12) {
      setCardMonth({ value, error: errorNames.date });
      return;
    }

    if (nameInput === 'mon') {
      setCardMonth({ value, error: '' });
      return;
    }

    if (nameInput === 'year') {
      if (value.length < 2) {
        setCardYear({ value, error: errorNames.date });
        return;
      }

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

    if (value.length < 3) {
      setCardCVC({ value, error: errorNames.format });
      return;
    }

    setCardCVC({ value, error: '' });
  }, []);

  const handleConfirm = () => {
    const hasError =
      cardName.error ||
      cardNumber.error ||
      cardMonth.error ||
      cardYear.error ||
      cardCVC.error;

    const isEmptyField =
      cardName.value &&
      cardNumber.value &&
      cardMonth.value &&
      cardYear.value &&
      cardCVC.value;

    changeName(cardName.value);
    changeNumber(cardNumber.value);
    changeDate(cardMonth.value, 'mon');
    changeDate(cardYear.value, 'year');
    changeCVC(cardCVC.value);

    if (!hasError && isEmptyField) {
      setIsSavedDetails(true);
    }
  };

  const handleContinue = () => {
    setCardName({ value: '', error: '' });
    setCardNumber({ value: '', error: '' });
    setCardMonth({ value: '', error: '' });
    setCardYear({ value: '', error: '' });
    setCardCVC({ value: '', error: '' });

    setIsSavedDetails(false);
  };

  return (
    <div className="app">
      <picture className="app__background">
        <source
          srcSet="./images/bg-main-desktop.png"
          media="(min-width: 900px)"
        />
        <img src="./images/bg-main-mobile.png" alt="bg-main" />
      </picture>
      <div className="app__card">
        <Card
          data={[
            cardName.value,
            cardNumber.value,
            cardMonth.value,
            cardYear.value,
            cardCVC.value,
          ]}
        />
      </div>
      {isSavedDetails ? (
        <div className="app__info">
          <Alert handleBackTab={handleContinue} />
        </div>
      ) : (
        <div className="app__info info">
          <div className="info__name">
            <Input
              title="cardholder name"
              placeholder="e.g. Jane Appleseed"
              state={cardName}
              changeFunc={changeName}
            />
          </div>
          <div className="info__number">
            <Input
              title="card number"
              placeholder="e.g. 1234 5678 9123 0000"
              state={cardNumber}
              changeFunc={changeNumber}
            />
          </div>
          <div className="info__row-date-cvc">
            <div className="info__row-date">
              <Input
                double
                title="exp, date (mm/yy)"
                placeholder="MM"
                state={cardMonth}
                state2={cardYear}
                changeFunc={changeDate}
              />
            </div>
            <div className="info__row-cvc">
              <Input
                title="cvc"
                placeholder="e.g. 123"
                state={cardCVC}
                changeFunc={changeCVC}
              />
            </div>
          </div>
          <div className="info__confirm">
            <Button name="confirm" handleClick={handleConfirm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
