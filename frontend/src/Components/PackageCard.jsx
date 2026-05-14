import "../Styles/Package.css";

const PackageCard = ({
  image,
  location,
  days,
  persons,
  price,
  description,
}) => {
  return (
    <div className="package-card">
      <img src={image} alt={location} className="package-image" />

      <div className="package-meta">
        <span>📍 {location}</span>
        <span>📅 {days} days</span>
        <span>👤 {persons} Person</span>
      </div>

      <div className="package-body">
        <h3 className="package-price">{price} INR</h3>
        <div className="package-stars">★★★★★</div>
 
        <p className="package-desc">{description}</p>

        <div className="actions-Btn">
          <a href="/about">   <button className="read-btn">Read More</button> </a>
          <a href="/booking"> <button className="book-btn">Book Now </button> </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
