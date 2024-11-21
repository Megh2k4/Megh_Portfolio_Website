"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceID || !templateID || !userID) {
      toast.error("EmailJS environment variables are missing.");
      setLoading(false);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
    className="w-screen h-screen bg-cover bg-center flex items-center justify-center" id='contact'>
    <ToastContainer />
    <div 
      style={{ backgroundImage: "url(atombg-comp.webp)" }}
      className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex items-center justify-start"
    >
      <div className="p-10 bg-opacity-80 bg-black rounded-lg w-[40%] ml-10">
        <p className="text-secondary mb-2 text-lg">Get in touch</p>
        <h3 className="text-2xl font-bold mb-5 text-white">Contact Me</h3>
  
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={userInput.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-800 py-3 px-4 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-gray-800 py-3 px-4 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={userInput.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-gray-800 py-3 px-4 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
  
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 py-3 px-6 rounded-lg text-white font-bold shadow-md hover:bg-blue-600 focus:outline-none"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  </div>
  );  
};

export default Contact;
