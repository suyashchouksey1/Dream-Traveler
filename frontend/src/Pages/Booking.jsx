import "../Styles/Booking.css";
import { useState } from "react";
import { createBooking } from "../api/bookingApi";

const Booking = () => {
  // ================= STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    packageName: "",
    destination: "",
    fromDate: "",
    toDate: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (
      !formData.name ||
      !formData.email ||
      (!formData.packageName && !formData.destination) ||
      !formData.fromDate
    ) {
      setError("Please fill all required fields");
      setSuccess("");
      return;
    }

    try {
      const res = await createBooking(formData);

      setSuccess(res.data.message);
      setError("");

      // Clear form after successful booking
      setFormData({
        name: "",
        email: "",
        contact: "",
        packageName: "",
        destination: "",
        fromDate: "",
        toDate: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
      setSuccess("");
    }
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        {/* LEFT CONTENT */}
        <div className="booking-info">
          <h5 className="booking-subtitle">BOOKING</h5>
          <h2 className="booking-title">Online Booking</h2>

          <p className="booking-text">
            Online booking refers to the process of scheduling and paying for
            services or accommodations via the internet.
          </p>

          <ul className="booking-list">
            <li>Flights: Booking airline tickets</li>
            <li>Hotels: Reserving rooms</li>
            <li>Car Rentals: Hiring vehicles</li>
          </ul>

          <h4 className="booking-benefits-title">Benefits of Online Booking</h4>

          <ul className="booking-benefits">
            <li>24/7 access to booking systems</li>
            <li>Instant confirmation</li>
            <li>Flexible cancellation</li>
          </ul>

          <button className="booking-read-btn">
            <a href="/services" className="booking-read-a">
              Read More
            </a>
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="booking-form">
          <h2 className="form-title">Book A Tour</h2>

          {/* SUCCESS / ERROR MESSAGE */}
          <marquee behavior="scroll" className="success-msg"> {success} </marquee>
          <marquee behavior="scroll" className="error-msg"> {error} </marquee>

          <form onSubmit={handleSubmit}>
            {/* NAME + EMAIL + CONTACT */}
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="number"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* PACKAGE + PREFERRED DESTINATION */}
            <div className="form-row">
              <select
                name="packageName"
                value={formData.packageName}
                onChange={handleChange}
              >
                <option value="">Packages</option>
                <option value="Rishikesh">Rishikesh</option>
                <option value="Singapore">Singapore</option>
                <option value="Leh & Ladakh">Leh & Ladakh</option>
                <option value="Srinagar">Srinagar</option>
                <option value="Goa">Goa</option>
                <option value="SriLanka">SriLanka</option>
                <option value="Kerala">Kerala</option>
                <option value="Dubai">Dubai</option>
                <option value="Punjab">Punjab</option>
              </select>

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Preferred Destinations</option>
                <option value="Goa">Goa</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            {/* DATES */}
            <div className="form-row">
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
              />

              <p className="to">→</p>

              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Special Request"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {/* SUBMIT */}
            <button type="submit" className="booking-btn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
