const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={`service-card`}>
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
