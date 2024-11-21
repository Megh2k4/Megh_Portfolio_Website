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
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[500px] px-4 sm:px-6 md:px-10 py-6 bg-white shadow-lg rounded-lg"
      >
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
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
