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

  return (
    <div className="app">
      Learn React
    </div>
  );
};

export default App;
