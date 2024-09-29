import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    const templateParams = {
      name: formData.firstName,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      SERVICE_ID, // Replace with your EmailJS service ID
      TEMPLATE_ID, // Replace with your EmailJS template ID
      templateParams, // Pass the templateParams object
      USER_ID // Replace with your EmailJS user ID
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );
  };


  return (
    <div className="box rounded-xl">
      <div className="w-full px-8 py-5 pb-10 mx-auto overflow-hidden bg-primary rounded-xl">
        <form className="mt-4 w-full" onSubmit={sendEmail}>
          <div className="flex-1">
            <label className="block mb-2 text-md text-textColor font-saira">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-md bg-gray-900 border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40 focus:outline-none focus:ring font-syne"
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-md text-textColor font-saira">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-md bg-gray-900 border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40 focus:outline-none focus:ring font-syne"
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-md text-textColor font-saira">
              Message
            </label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-secondary rounded-md md:h-48 bg-gray-900 focus:border-secondary focus:ring-secondary focus:ring-opacity-40 focus:outline-none focus:ring font-syne"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="w-full px-6 py-3 mt-6 text-md font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 font-saira">
            get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
