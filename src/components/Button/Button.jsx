import './Button.sass';

const Button = ({ name = 'click', handleClick = null }) => {
  return (
    <button className="button" onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
