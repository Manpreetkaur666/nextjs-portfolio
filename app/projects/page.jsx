import React from "react";
import projIntro from "../../public/images/projPage/projIntro.svg";
import Image from "next/image";
import { projData } from "../data/projData";
import arrow from "../../public/images/projPage/arrow.svg";

const page = () => {
  return (
    <div>
      <div className="proj-intro flex flex-col sm:flex-row">
        <div className="img-section w-full sm:w-6/12 px-8 pt-0">
          <Image
            src={projIntro}
            className="mt-0 pt-0"
            width={600}
            height={600}
            alt="project intro image"
          />
          <a
            href="https://storyset.com/work"
            className="block text-xs text-slate-300 sm:absolute sm:left-72 text-center"
          >
            Work illustrations by Storyset
          </a>
        </div>
        <div className="desc-section w-full sm:w-6/12 my-9">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-14 sm:mb-10 text-center">
            Projects
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-yellow-color">
            Showcasing My Passion: Personal Projects
          </h2>
          <p className="m-auto sm:w-3/4 text-center my-4">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create visually appealing and user-friendly
            interfaces to designing robust server-side architecture. In addition
            to mastering languages like HTML, CSS, JavaScript, and frameworks
            such as React on the front end, I am equally adept at working with
            server-side technologies like Node.js and Java.
          </p>
        </div>
      </div>

      <div className="mb-12 mt-20">
        <p className="text-md font-bold text-yellow-color text-center">
          What is my qualification?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          My Work
        </h2>
        <div className="work-list-container">
          {projData.map((data, index) => (
            <div className="work work-1" key={index}>
              <Image src={data.image} alt="" width={500} height={500} />
              <div className="overlay">
                <h3 className="text-lg font-bold">{data.title}</h3>
                <p className="text-md font-semibold">{data.desc}</p>
                <a target="_blank" href={data.href}>
                  <i className="fa-solid fa-arrow-up-right-from-square text-black"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          target="_blank"
          href="https://github.com/Manpreetkaur666?tab=repositories"
          className="btn bg-main-light hover:bg-yellow-color text-main-color font-bold py-2 px-4 my-4 rounded"
        >
          see more
        </a>
      </div>
    </div>
  );
};

export default page;
