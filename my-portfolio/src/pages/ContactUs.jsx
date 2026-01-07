// import React, { useState } from "react";
// import { Contactdata } from "../data/Contactdata";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// export default function ContactUs() {
//   const [formdata, setFormdata] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     countrycode: "",
//   });
//   const [phone, setPhone] = useState("");

//   function changehandler(event) {
//     const { name, value } = event.target;
//     setFormdata((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   function submithandler(event) {
//     event.preventDefault();
//     Contact(firstname, lastname, email, phone, message, navigate)
//   }

//   return (
//     <section className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-xl">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <p className="text-xs tracking-[0.25em] uppercase text-emerald-400">
//             Contact
//           </p>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
//             Let&apos;s <span className="text-emerald-400">Build</span> Something
//           </h1>
//           <p className="mt-3 text-sm sm:text-base text-gray-300">
//             Have an idea, project, or just want to say hi? Drop your details and
//             I’ll get back to you.
//           </p>
//         </div>

//         {/* Card */}
//         <form
//           className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 shadow-[0_18px_45px_rgba(15,23,42,0.9)] flex flex-col gap-4 sm:gap-5 text-white"
//           onSubmit={submithandler}
//         >
//           {/* Name row */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="w-full">
//               <label className="block text-xs sm:text-sm mb-1 text-gray-300">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Ayush"
//                 name="firstname"
//                 value={formdata.firstname}
//                 onChange={changehandler}
//                 className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/80"
//               />
//             </div>
//             <div className="w-full">
//               <label className="block text-xs sm:text-sm mb-1 text-gray-300">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Khoke"
//                 name="lastname"
//                 value={formdata.lastname}
//                 onChange={changehandler}
//                 className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/80"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="w-full">
//             <label className="block text-xs sm:text-sm mb-1 text-gray-300">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               name="email"
//               value={formdata.email}
//               onChange={changehandler}
//               className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/80"
//             />
//           </div>

//           {/* Optional: country dropdown (using your Contactdata) */}
//           <div className="w-full">
//             <label className="block text-xs sm:text-sm mb-1 text-gray-300">
//               Country
//             </label>
//             <select
//               name="countrycode"
//               value={formdata.countrycode}
//               onChange={changehandler}
//               className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/80"
//             >
//               <option value="">Select country</option>
//               {Contactdata.map((element, index) => (
//                 <option key={index} value={element.code}>
//                   {element.country} ({element.code})
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Phone */}
//           <div className="w-full">
//             <label className="block text-xs sm:text-sm mb-1 text-gray-300">
//               Mobile Number
//             </label>
//             <div className="bg-black/40 rounded-lg border border-white/10 px-2 py-1">
//               <PhoneInput
//                 country={"in"}
//                 value={phone}
//                 onChange={(phone) => setPhone(phone)}
//                 inputClass="!w-full !bg-transparent !border-none !text-white !text-sm sm:!text-base"
//                 buttonClass="!bg-transparent !border-none"
//                 dropdownClass="!text-black"
//               />
//             </div>
//           </div>

//           {/* Message (optional, makes form look more complete) */}
//           <div className="w-full">
//             <label className="block text-xs sm:text-sm mb-1 text-gray-300">
//               Message (optional)
//             </label>
//             <textarea
//               rows={3}
//               placeholder="Tell me a bit about your project or question..."
//               className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/80 resize-none"
//             />
//           </div>

//           {/* Submit button */}
//           <button
//           onSubmit={submithandler}
//             type="submit"
//             className="mt-2 w-full sm:w-auto sm:self-end inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm sm:text-base font-semibold text-black shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { Contactdata } from "../data/Contactdata";
// import { sendContactApi } from "../services/contactapi";

// export default function ContactUs() {
//   const [formdata, setFormdata] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     countrycode: "",
//   });

//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   function changehandler(e) {
//     const { name, value } = e.target;
//     setFormdata((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   async function submithandler(e) {
//     e.preventDefault();

//     if (!formdata.firstname || !formdata.email || !phone) {
//       alert("Please fill required fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       await sendContactApi({
//         firstname: formdata.firstname,
//         lastname: formdata.lastname,
//         email: formdata.email,
//         countrycode: formdata.countrycode,
//         phone: phone,
//         message: message,
//       });

//       alert("Message sent successfully!");

//       setFormdata({
//         firstname: "",
//         lastname: "",
//         email: "",
//         countrycode: "",
//       });
//       setPhone("");
//       setMessage("");
//     } catch (error) {
//       alert("Failed to send message");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-black px-4">
//       <form
//         onSubmit={submithandler}
//         className="w-full max-w-lg bg-gray-900 p-6 rounded-lg flex flex-col gap-4 text-white"
//       >
//         <h2 className="text-2xl font-bold text-center">Contact Us</h2>

//         <input
//           type="text"
//           name="firstname"
//           placeholder="First Name"
//           value={formdata.firstname}
//           onChange={changehandler}
//           className="p-2 rounded bg-black border border-gray-600"
//         />

//         <input
//           type="text"
//           name="lastname"
//           placeholder="Last Name"
//           value={formdata.lastname}
//           onChange={changehandler}
//           className="p-2 rounded bg-black border border-gray-600"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formdata.email}
//           onChange={changehandler}
//           className="p-2 rounded bg-black border border-gray-600"
//         />

//         <select
//           name="countrycode"
//           value={formdata.countrycode}
//           onChange={changehandler}
//           className="p-2 rounded bg-black border border-gray-600"
//         >
//           <option value="">Select Country</option>
//           {Contactdata.map((el, idx) => (
//             <option key={idx} value={el.code}>
//               {el.country} ({el.code})
//             </option>
//           ))}
//         </select>

//         <PhoneInput
//           country={"in"}
//           value={phone}
//           onChange={setPhone}
//           inputClass="!w-full !bg-black !text-white"
//         />

//         <textarea
//           rows={3}
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="p-2 rounded bg-black border border-gray-600"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-emerald-500 text-black font-semibold py-2 rounded"
//         >
//           {loading ? "Sending..." : "Submit"}
//         </button>
//       </form>
//     </section>
//   );
// }




import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Contactdata } from "../data/Contactdata";
import { sendContactApi } from "../services/contactapi";
import {toast} from 'react-hot-toast';
export default function ContactUs() {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    countrycode: "",
  });

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function changehandler(e) {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }

  async function submithandler(e) {
    e.preventDefault();

    if (!formdata.firstname || !formdata.email || !phone) {
       toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      await sendContactApi({
        ...formdata,
        phone,
        message,
      });

      toast.success("Contact message sent successfully!");
      setFormdata({ firstname: "", lastname: "", email: "", countrycode: "" });
      setPhone("");
      setMessage("");
    } catch {
       toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center px-4 py-10">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%)] pointer-events-none" />

      <form
        onSubmit={submithandler}
        className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-white flex flex-col gap-5"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-xs tracking-[0.35em] uppercase text-yellow-400">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Let’s <span className="text-yellow-500">Connect</span>
          </h2>
          <p className="text-sm text-gray-400">
            Share your idea and let’s build something impactful.
          </p>
        </div>

        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            value={formdata.firstname}
            onChange={changehandler}
            className="input-style"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formdata.lastname}
            onChange={changehandler}
            className="input-style"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formdata.email}
          onChange={changehandler}
          className="input-style"
        />

       

        {/* Phone */}
        <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !bg-transparent !border-none !text-white"
            buttonClass="!bg-transparent !border-none"
          />
        </div>

        {/* Message */}
        <textarea
          rows={4}
          placeholder="Tell me about your project or idea..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-style resize-none"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-full bg-yellow-500 py-3 text-black font-semibold tracking-wide transition-all hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Tailwind reusable input style */}
      <style>
        {`
          .input-style {
            width: 100%;
            border-radius: 0.75rem;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(0,0,0,0.4);
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            outline: none;
            color: white;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .input-style:focus {
            border-color: rgb(16,185,129);
            box-shadow: 0 0 0 1px rgba(16,185,129,0.6);
          }
        `}
      </style>
    </section>
  );
}
