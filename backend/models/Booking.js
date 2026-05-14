import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

    packageName: {
      type: String,
    },

    destination: {
      type: String
    },

    fromDate: {
      type: Date,
      required: true,
    },

    toDate: {
      type: Date,
    },

    message: {
      type: String,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema);