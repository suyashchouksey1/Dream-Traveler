import "../Styles/Destination.css";
import destinations from "../Data/destinationsData";
import DestinationCard from "../Components/DestinationCard";

const Destination = () => {
  const large = destinations.find((d) => d.type === "large");
  const small = destinations.filter((d) => d.type === "small");
  const tall = destinations.find((d) => d.type === "tall");

  return (
    <section className="destination-section">
      <div className="destination-header">
        <span className="destination-subtitle">DESTINATION</span>
        <h2 className="destination-title">Popular Destination</h2>
      </div>

      <div className="destination-grid">
        {/* LEFT */}
        <div className="destination-left">
          <DestinationCard {...large} size="large" />

          <div className="destination-bottom">
            {small.map((item) => (
              <DestinationCard key={item.id} {...item} size="small" />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <DestinationCard {...tall} size="tall" />
      </div>
    </section>
  );
};

export default Destination;
