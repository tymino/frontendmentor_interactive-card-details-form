import './Card.sass';

const Card = ({ cardData }) => {
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

          <div className="card__front-number">1231 2321 3231 2233</div>
          <div className="card__front-row">
            <div className="card__front-name">Qwerty Lenght</div>
            <div className="card__front-date">12/09</div>
          </div>
        </div>
      </div>

      <img src="./images/bg-card-back.png" alt="card-back" />
    </div>
  );
};

export default Card;
