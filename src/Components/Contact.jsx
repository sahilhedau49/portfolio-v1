import React, { useState } from "react";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <div id="contact" className="contact py-20">
      <div className="w-[50%] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            CONTACT
          </h1>
          <p className="text-lg mt-4">
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="mt-10 bg-gray-50 p-10 text-lg font-medium rounded-xl contact-shadow">
          <form
            action="https://getform.io/f/c78e956c-14c5-4154-bb2f-6b633f7e88ee"
            method="POST"
          >
            <div className="w-full flex flex-col">
              <label className="text-xl mb-2">Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                required
                placeholder="Enter Your Name"
                className="w-full text-gray-600 mb-6 border-[1px] outline-none rounded-md border-[#ebebeb] bg-[#f0f0f0] px-8 py-2 text-lg"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="text-xl mb-2">Email</label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
                placeholder="Enter Your Email"
                className="w-full text-gray-600 mb-6 border-[1px] outline-none rounded-md border-[#ebebeb] bg-[#f0f0f0] px-8 py-2 text-lg"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="text-xl mb-2">Message</label>
              <textarea
                name="message"
                // value={formData.message}
                // onChange={handleChange}
                required
                placeholder="Enter Your Message"
                className="w-full text-gray-600 h-40 mb-6 border-[1px] outline-none rounded-md border-[#ebebeb] bg-[#f0f0f0] px-8 py-2 text-lg"
              />
            </div>
            <div className="mx-auto w-fit">
              <button
                className="btn text-gray-200 mt-10 duration-300 hover:-translate-y-1 px-10 py-3 rounded-lg text-xl font-semibold bg-[#2f3335]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
