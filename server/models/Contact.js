const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
   {
      firstName: {
         type: String,
         required: true,
         trim: true,
      },
      lastName: {
         type: String,
         trim: true,
      },
      email: {
         type: String,
         required: true,
         trim: true,
      },
      // Store phone as string to preserve leading zeros/country codes
      phone: {
         type: String,
         required: true,
         trim: true,
      },
      message: {
         type: String,
         trim: true,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);