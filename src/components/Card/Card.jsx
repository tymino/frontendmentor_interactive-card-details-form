import './Card.sass';

const Card = ({ data }) => {
  const [name, number, month, year, cvc] = data;

  // name = 'Ivan Ivanov',
  // number = '0000 0000 0000 0000',
  // month = ,
  // year = '00',
  // cvc = '000',

  return (
    <div className="card">
      <div className="card__front">
        <img
          className="card__front-image"
          src="./images/bg-card-front.png"
          alt="card-front"
        />
        <div className="card__front-info-wrapper">
          <svg
            className="card__front-logo"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>

          <div className="card__front-number">
            {number || '0000 0000 0000 0000'}
          </div>
          <div className="card__front-row">
            <div className="card__front-name">{name || 'Ivan Ivanov'}</div>
            <div className="card__front-date">
              {`${month || '00'}/${year || '00'}`}
            </div>
          </div>
        </div>
      </div>

      <div className="card__back">
        <img
          className="card__back-image"
          src="./images/bg-card-back.png"
          alt="card-back"
        />
        <div className="card__back-cvc">{cvc || '000'}</div>
      </div>
    </div>
  );
};

export default Card;
