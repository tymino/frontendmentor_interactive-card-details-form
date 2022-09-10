import './Button.sass';
import { memo } from 'react';

const Button = ({ name = 'click', handleClick = null }) => {
  return (
    <button className="button" onClick={handleClick}>
      {name}
    </button>
  );
};

export default memo(Button);
