
// exports.contactUs = async (req, res) => {
//   try {
//     const { firstname, lastname, email, phone, message } = req.body;

//     if (!firstname || !email || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Required fields missing",
//       });
//     }

//     console.log("New Contact:", req.body);

//     return res.status(200).json({
//       success: true,
//       message: "Message received successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };


const Contact = require("../models/Contact");

exports.contactUs = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;

    if (!firstname || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const savedContact = await Contact.create({
      firstName: firstname,
      lastName: lastname,
      email,
      phone:  phone.toString(),
      message,
    });

    console.log("Saved Contact ID:", savedContact._id);

    return res.status(200).json({
      success: true,
      message: "Message saved successfully",
      data: savedContact,
    });
  } catch (error) {
    console.error("SAVE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
