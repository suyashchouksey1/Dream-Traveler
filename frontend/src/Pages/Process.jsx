import "../Styles/Process.css";

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <span className="process-tag">PROCESS</span>
        <h2>3 Easy Steps</h2>
      </div>

      <div className="process-grid">
        {/* STEP 1 */}
        <div className="process-card">
          <div className="process-icon">🌍</div>
          <h4>Choose A Destination</h4>
          <p>
            Choosing a destination for your trip involves considering several
            factors, including your interests.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="process-card">
          <div className="process-icon">💲</div>
          <h4>Pay Online</h4>
          <p>
            Paying online is a common and convenient way to complete
            transactions process for goods and services.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="process-card">
          <div className="process-icon">✈️</div>
          <h4>Fly Today</h4>
          <p>
            If you need to book a flight for today, you can follow these steps
            to quickly and efficiently secure a ticket.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
