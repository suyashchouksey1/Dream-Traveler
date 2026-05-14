const DestinationCard = ({ image, name, discount, size }) => {
  return (
    <a href="/booking">
      <div className={`destination-card ${size}`}>
        <img src={image} alt={name} />
        <span className="discount">{discount}</span>
        <span className="location">{name}</span>
      </div>
    </a>
  );
};

export default DestinationCard;
