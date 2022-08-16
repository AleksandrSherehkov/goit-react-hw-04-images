import s from './Button.module.css';

const Button = ({ cbOnClick }) => {
  return (
    <button className={s.Button} type="button" onClick={cbOnClick}>
      Load more
    </button>
  );
};

export default Button;
