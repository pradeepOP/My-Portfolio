import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center  items-center p-4 pt-28">
      <form
        method="POST"
        action="https://getform.io/f/nadomvpb"
        className="flex flex-col max-w-[1000px]  w-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below or send me an email - pradeepkazi38@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 placeholder:text-gray-700"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder:text-gray-700"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 placeholder:text-gray-700"
          name="message"
          rows="10"
          placeholder="Message"></textarea>
        <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600 hover:border-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
