import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <a href="/about"> <li> About Us </li> </a>
            <a href="/packages"> <li> Cookies </li> </a>
            <a href="/about"> <li> Privacy Policy </li> </a>
            <a href="/about"> <li> Terms & Condition </li> </a>
            <a href="/footer"> <li> FAQs & Help </li> </a>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="https://www.bing.com/maps/search?FORM=Z9LH2&style=r&q=Indore&ss=id.vdpid%3A7412356253659168769&cp=22.733238%7E75.866680&lvl=11.9" target="blank"> <p> 📍 Indore </p> </a>
          <p>📞 +91 8717817405</p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank"> <p>✉ Suyash181818@example.com</p> </a>

          <div className="social-icons">
            <a href="https://www.instagram.com/everyday._.adventure?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
              <span> <i class="fa-brands fa-instagram"></i> </span>
            </a>
            <a href="https://www.facebook.com/suyash.chouksey.18/" target="blank">
              <span> <i class="fa-brands fa-facebook"> </i> </span>
            </a>
            <a href="https://www.youtube.com/@suyashchouksey-sc5oz" target="blank">
              <span> <i class="fa-brands fa-youtube"></i> </span>
            </a>
            <a href="https://in.linkedin.com/in/suyash-chouksey-86b7aa24b" target="blank">
              <span> <i class="fa-brands fa-linkedin"></i> </span>
            </a>
         </div>
        </div>

        <div className="footer-col">
          <h4>Gallery</h4>
          <div className="footer-gallery">
            <a href="/packages"> <img src="/img/package-1.jpg" /> </a>
            <a href="/packages"> <img src="/img/package-2.jpg" /> </a>
            <a href="/packages"> <img src="/img/package-3.jpg" /> </a>
            <a href="/packages"> <img src="/img/package-4.jpg" /> </a>
            <a href="/packages"> <img src="/img/package-5.jpg" /> </a>
            <a href="/packages"> <img src="/img/package-7.jpg" /> </a>
          </div>
        </div>

       <div>
          <h4>Newsletter</h4>
          <p>
            Discover new destinations, Travel 
            tips, and Exclusive vacation deals
            with Dream Traveler.
          </p>

          <div className="newsletter">
           <a href="https://www.instagram.com/everyday._.adventure?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
           <button> Join Us <i class="fa-brands fa-instagram"></i> </button> </a> 
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Dream Traveler, All Right Reserved. Designed By{" "}
          <span> Suyash Chouksey </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
