import { useState } from 'react';

import { Input } from './components';

const App = () => {
  const [name, setName] = useState({
    value: '',
    error: false,
    errorText: 'err name',
  });
  const [number, setNamber] = useState({
    value: '',
    error: false,
    errorText: 'err number',
  });

  return (
    <div className="app">
      Learn React
      <br />
      <Input value={name.value} handleChange={setName} />
      <br />
      <Input value={number.value} handleChange={setNamber} />
    </div>
  );
};

export default App;
