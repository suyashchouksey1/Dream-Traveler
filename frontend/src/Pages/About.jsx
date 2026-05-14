import "../Styles/About.css";

const About = () => {
  return (
    <div className="main-div">
      <img src= "../img/about.jpg" alt="About image" className="about-img" />

      <div className="content-div">
        <span className="color AboutUs"> About Us </span>
        <h1>
          {" "}
          Welcome to <span className="color"> Dream Traveler </span>
        </h1>

        <p>
          Where every journey leads to a discovery. Embrace the unknown, explore
          the unseen, and find yourself in every corner of the world. Your
          adventure awaits let your dreams guide you.
        </p>

        <div className="both-div-point">
          <div className="point">
            <i class="fa-solid fa-angles-right icon"></i> First Class Flights
            <br />
            <i class="fa-solid fa-angles-right icon "></i> 5 Star Accommodations{" "}
            <br />
            <i class="fa-solid fa-angles-right icon"></i> Handpicked Hotels
          </div>
          <div className="point">
            <i class="fa-solid fa-angles-right icon"></i> Latest Model Vehicles{" "}
            <br />
            <i class="fa-solid fa-angles-right icon"></i> 150+ Premium City
            Tours <br />
            <i class="fa-solid fa-angles-right icon"></i> 24/7 Service <br />
          </div>
        </div>

        <button>
          <a href="/Services"> Read More </a>
        </button>
      </div>
    </div>
  );
};

export default About;
