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

        // Validation
        if (
            !name ||
            !email ||
            !contact ||
            (!packageName && !destination) ||
            !fromDate ||
            !toDate
        ) {
            return res.status(400).json({
                message: "Please fill all required fields",
            });
        }

        // Create booking
        const booking = await Booking.create({
            name,
            email,
            contact,
            packageName,
            destination,
            fromDate,
            toDate,
            message,
            user: req.user?.id,
        });

        res.status(201).json({
            success: true,
            message: "Tour Booked Successfully",
            booking,
        });


        // ================= SEND EMAIL =================

        await sendEmail({
            to: email,

            subject: "Dream Traveler Booking Confirmation",

            html: ` 
            
    <h2>Tour Booking Confirmed ✈️</h2>

    <p>Dear ${name},</p>

    <p>Your booking has been successfully confirmed.</p>

    <h3>Booking Details:</h3>

    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Contact:</strong> ${contact}</li>
      <li><strong>Package:</strong> ${packageName}</li>
      <li><strong>Destination:</strong> ${destination}</li>
      <li><strong>From:</strong> ${fromDate}</li>
      <li><strong>To:</strong> ${toDate}</li>
      <li><strong>Special Request:</strong> ${message}</li>
    </ul>

    <p>Thank you for choosing Dream Traveler ❤️</p>
  `,
        });

    } catch (error) {

        console.log(error);

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

        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
        });
    }
}; 