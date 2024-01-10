"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import contactIntro from "../../public/images/contactPage/contactIntro.svg";
// import resume from '../../public/doc/Manpreet.docx';

const Page = () => {
  const scriptURL = "https://api.apispreadsheets.com/data/XwqmzuzFzYzEfomo/";
  const [messageColor, setMessageColor] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("I am executed!");
  }, [message, messageColor, setMessage, setMessageColor]);

  const submitHandler = async (e) => {
    console.log("I am submitted!");
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      setMessageColor("green-600");
      setMessage("Message Sent Successfully!");
      setTimeout(function () {
        setMessage("");
        setMessageColor("");
      }, 5000);
    } catch (err) {
      console.error(err);
      setMessageColor("rose-600");
      setMessage("Error sending message!");
    }
  };

  return (
    <div className="overscroll-x-none">
      <div className="top-section flex flex-col sm:flex-row">
        <div className="img-section w-full sm:w-6/12 p-26">
          <Image
            src={contactIntro}
            className="mt-0 pt-0 sm:ml-12"
            width={600}
            height={600}
            alt="profile intro image"
          />
          <a
            href="https://storyset.com/work"
            className="block text-xs text-slate-300 sm:absolute sm:left-72 text-center"
          >
            Work illustrations by Storyset
          </a>
        </div>
        <div className="desc-section w-full sm:w-6/12">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mt-14 sm:mb-10 text-center">
            Contact
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-yellow-color">
            Get in Touch: Reach Out and Connect
          </h2>
          <p className="m-auto sm:w-3/4 text-center py-4">
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with Javascript, React,
            Java, MySql, MongoDB, frontend and backend Development.
          </p>
          <div className="social-icons w-fit mx-auto my-2 text-center">
            <a
              className="contact-btn text-center w-8 h-8 m-4 p-3 rounded-full bg-yellow-color hover:bg-orange-400"
              target="_blank"
              href="https://www.linkedin.com/in/manpreet-kaur-%F0%9F%91%88%F0%9F%8F%BC-41b104199/"
            >
              <i className="fa-brands fa-linkedin-in w-5 h-5"></i>
            </a>
            <a
              className="contact-btn text-center w-8 h-8 m-4 p-3 rounded-full bg-yellow-color hover:bg-orange-400"
              target="_blank"
              href="https://github.com/Manpreetkaur666?tab=repositories"
            >
              <i className="fa-brands fa-github w-5 h-5"></i>
            </a>
          </div>
          <div className="w-fit mx-auto my-8">
            <a
              href="https://drive.google.com/file/d/1y4hwqhG3vLZUPxtal2ywLpICCwZ59qPF/view?usp=sharing"
              target="_blank"
              className="bg-main-light hover:bg-yellow-color text-main-color font-bold py-2 px-8 my-4 rounded"
            >
              See My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form my-16 mx-0">
        <p className="text-md font-bold text-yellow-color text-center">
          Are You Interested?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>
        <form
          className="mx-auto flex flex-col items-center"
          name="submit-to-google-sheet"
          method="post"
          encType="text/plain"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            className="sm:w-8/12 w-full my-5 mx-4 p-2 bg-[#262626] rounded-md"
          />
          <input
            type="text"
            name="Email"
            placeholder="Your Email"
            className="sm:w-8/12 w-full my-5 mx-4 p-2 bg-[#262626] rounded-md"
          />
          <textarea
            name="Message"
            className="h-48 sm:w-8/12 w-full my-5 mx-4 p-2 bg-[#262626] rounded-md"
            placeholder="Your Message"
            id=""
          ></textarea>
          <button
            type="submit"
            className="bg-main-light hover:bg-yellow-color text-main-color font-bold py-2 px-8 my-4  rounded w-48"
          >
            Send
          </button>
          <span className={`text-${messageColor}`}>{message}</span>
        </form>
      </div>
    </div>
  );
};

export default Page;
