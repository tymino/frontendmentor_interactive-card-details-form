import './Alert.sass';
import { Button } from '../';

const Alert = ({ handleBackTab }) => {
  return (
    <div className="alert">
      <svg className="alert__svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <div className="alert__title">thank you!</div>
      <div className="alert__describe">we've added your card details</div>
      <div className="alert__button">
        <Button name="continue" handleClick={handleBackTab} />
      </div>
    </div>
  );
};

export default Alert;
