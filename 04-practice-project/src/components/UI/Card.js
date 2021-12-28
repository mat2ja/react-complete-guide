import c from './Card.module.css';

const Card = ({ children, className }) => {
  return <div className={`${c.card} ${className}`}>{children}</div>;
};

export default Card;
