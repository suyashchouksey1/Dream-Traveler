import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-bg">
      <div className="home-content">
        <div className="heading1"> Enjoy Your Vacation </div>
        <div className="heading2"> Where Dreams Meet Destinations </div>

        <div className="search-box">
          <input type="text" placeholder="Search destinations..." />
          <button
            className="search-btn"
            onClick={() => (window.location.href = "/packages")}
          >
            Sea
          </button>
        </div>

        {/* <div  className="search-box">
          <input type="text" placeholder="Search destinations..." />
          <button className="search-btn">
            <a href="/packages"> Search </a>
          </button>
        </div> */}
        
      </div>
    </div>
  );
};

export default Home;
