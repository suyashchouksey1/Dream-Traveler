const GuideCard = ({ image, name, role }) => {
  return (
    <div className="guide-card">
      <div className="guide-img">
        <img src={image} alt={name} />
      </div>

      <div className="guide-socials">
        <span>
          <a href="https://www.instagram.com/suyash__18_?igsh=MTFzd3o3dXFpMzdvNw==" target="blank">
            <i class="fa-brands fa-instagram"></i> 
          </a>
        </span>

        <span>
          <a href="https://www.facebook.com/suyash.chouksey.18/" target="blank">
            <i class="fa-brands fa-facebook"></i> 
          </a>
        </span>

        <span> 
          <a href="https://www.youtube.com/@suyashchouksey-sc5oz" target="blank">
            <i class="fa-brands fa-youtube"></i> 
          </a>
          </span>
      </div>

      <div className="guide-info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default GuideCard;
