import '../Styles/Header.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className='nav'>
        <FaLocationDot /> &nbsp; <span> Indore </span>
        <IoCall /> &nbsp; <span> +91 8717817405 </span>
        {/* <i className="fas fa-envelope"></i> &nbsp; <span> <a href="https://mail.google.com/mail/u/0/#inbox" target='blank' className='gmail'> Suyash181818@gmai.com </a> </span> */}
        <div className='nav-circles'>
          <a href="https://mail.google.com/mail/u/0/#inbox" target='blank' className='nav-a'> <i className="fas fa-envelope"></i> </a>
          <a href="https://www.facebook.com/" target='blank' className='nav-a'> <i className="fab fa-facebook-f"></i> </a>
          <a href="https://www.linkedin.com/?trk=guest_homepage-" target='blank' className='nav-a'> <i className="fab fa-linkedin-in"></i> </a>
          <a href="https://www.instagram.com/" target='blank' className='nav-a'> <i className="fab fa-instagram"></i> </a>
          <a href="https://www.youtube.com/" target='blank' className='nav-a'> <i className="fab fa-youtube"></i> </a>
        </div>
      </div>
    </>
  )
}

export default Header
