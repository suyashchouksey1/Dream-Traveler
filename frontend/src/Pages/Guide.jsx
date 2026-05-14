import "../Styles/Guide.css";
import GuideCard from "../Components/GuideCard";
import guides from "../data/guidesData";

const Guide = () => {
  return (
    <section className="guide-section">
      <div className="guide-header">
        <span className="guide-subtitle">TRAVEL GUIDE</span>
        <h2>Meet Our Guide</h2>
      </div>

      <div className="guide-grid">
        {guides.map((guide) => (
          <GuideCard key={guide.id} {...guide} />
        ))}
      </div>
    </section>
  );
};

export default Guide;
