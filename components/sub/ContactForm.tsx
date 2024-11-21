"use client";

import { useState } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceID || !templateID || !userID) {
      toast.error("EmailJS environment variables are missing.");
      return;
    }

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {/* Left Side: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full p-6 sm:p-8 bg-gray-900 text-white md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={userInput.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>

          {/* Right Side: Placeholder for an Image or Illustration */}
          <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
            {/* Replace with your actual image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
