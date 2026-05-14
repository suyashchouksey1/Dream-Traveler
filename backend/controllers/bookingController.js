import sendEmail from "../utils/sendEmail.js";
import Booking from "../models/Booking.js";

// ================= CREATE BOOKING =================

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      packageName,
      destination,
      fromDate,
      toDate,
      message,
    } = req.body;

    // ================= VALIDATION =================

    if (
      !name ||
      !email ||
      !contact ||
      (!packageName && !destination) ||
      !fromDate ||
      !toDate
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // ================= CREATE BOOKING =================

    const booking = await Booking.create({
      name,
      email,
      contact,
      packageName,
      destination,
      fromDate,
      toDate,
      message,
      user: req.user?.id || null,
    });

    // ================= SEND EMAIL =================

    try {
      await sendEmail({
        to: email,

        subject: "Dream Traveler Booking Confirmation ✈️",

        html: `
          <div style="font-family: Arial, sans-serif; padding:20px;">

            <h2 style="color:#f4b400;">
              Tour Booking Confirmed ✈️
            </h2>

            <p>Dear <strong>${name}</strong>,</p>

            <p>
              Your booking has been successfully confirmed.
            </p>

            <h3>Booking Details:</h3>

            <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width:100%;">
              
              <tr>
                <td><strong>Name</strong></td>
                <td>${name}</td>
              </tr>

              <tr>
                <td><strong>Email</strong></td>
                <td>${email}</td>
              </tr>

              <tr>
                <td><strong>Contact</strong></td>
                <td>${contact}</td>
              </tr>

              <tr>
                <td><strong>Package</strong></td>
                <td>${packageName || "Not Selected"}</td>
              </tr>

              <tr>
                <td><strong>Destination</strong></td>
                <td>${destination || "Not Selected"}</td>
              </tr>

              <tr>
                <td><strong>From Date</strong></td>
                <td>${fromDate}</td>
              </tr>

              <tr>
                <td><strong>To Date</strong></td>
                <td>${toDate}</td>
              </tr>

              <tr>
                <td><strong>Special Request</strong></td>
                <td>${message || "No special request"}</td>
              </tr>

            </table>

            <br />

            <p>
              Thank you for choosing 
              <strong>Dream Traveler ❤️</strong>
            </p>

          </div>
        `,
      });

      console.log("Booking email sent successfully");
    } catch (emailError) {
      console.log("EMAIL ERROR:", emailError);
    }

    // ================= RESPONSE =================

    res.status(201).json({
      success: true,
      message: "Tour Booked Successfully",
      booking,
    });

  } catch (error) {
    console.log("BOOKING ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Booking failed",
    });
  }
};

// ================= GET ALL BOOKINGS =================

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.log("FETCH BOOKING ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
};