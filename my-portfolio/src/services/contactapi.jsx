import {toast} from "react-hot-toast"






import axios from "axios";

export async function sendContactApi(data) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/contactme",
      data
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    throw error;
  }
}
