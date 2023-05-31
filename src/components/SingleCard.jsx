import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front image" />
        <img
          className="back"
          src="/images/back.png"
          alt="back image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
