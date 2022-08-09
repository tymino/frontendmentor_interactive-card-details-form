import { useState } from 'react';

import { Input } from './components';

const App = () => {
  const [cardName, setCardName] = useState({
    value: '',
    error: false,
    errorText: 'err name',
  });
  const [cardNumber, setCardNumber] = useState({
    value: '',
    error: false,
    errorText: 'err number',
  });
  const [cardDate, setCardDate] = useState({
    value: '',
    error: false,
    errorText: 'err date',
  });
  const [cardCVC, setCardCVC] = useState({
    value: '',
    error: false,
    errorText: 'err CVC',
  });

  const changeName = (e) => {
    setCardName({ ...cardName, value: e.target.value });
  };

  const changeNumber = (e) => {
    setCardNumber({ ...cardNumber, value: e.target.value });
  };

  const changeDate = () => {};

  const changeCVC = () => {};

  return (
    <div className="app">
      <Input title="cardholder name" state={cardName} setState={changeName} />

      <Input
        double
        title="exp, date (mm/yy)"
        state={cardDate}
        setState={changeNumber}
      />
    </div>
  );
};

export default App;
