// import express from "express";
// import { createBooking } from "../controllers/bookingController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Protected Route
// router.post("/", authMiddleware, createBooking);

// router.get("/", authMiddleware, getBookings);

// export default router;


import express from "express";
import {
    createBooking,
    getBookings,
} from "../controllers/bookingController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE BOOKING
router.post("/", authMiddleware, createBooking);

// GET BOOKINGS
router.get("/", authMiddleware, getBookings);

export default router;