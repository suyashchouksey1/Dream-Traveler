import PackageCard from "../Components/PackageCard";
import "../Styles/Package.css";
import packages from "../Data/packagesData";

const Package = () => {
  return (
    <section className="packages-section">
      <div className="packages-header">
        <span className="packages-subtitle">PACKAGES</span>
        <h2 className="packages-title">Awesome Packages</h2>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default Package;
