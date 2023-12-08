/* eslint-disable react/jsx-key */
import React from "react";
import { certData, eduData, logoData } from "../data/eduData";
import Image from "next/image";
import gradHat from "../../public/images/educationPage/gradHat.svg";

const page = () => {
  return (
    <div className="p-2 overscroll-x-none">
      <div className="edu-intro flex flex-col sm:flex-row">
        <div className="img-section w-full sm:w-6/12">
          <Image
            className="w-full pt-0 mt-0"
            src={gradHat}
            alt="image for education intro section"
          />
          <a
            href="https://storyset.com/education"
            className="block text-xs text-slate-300 absolute left-72"
          >
            Education illustrations by Storyset
          </a>
        </div>
        <div className="w-full sm:w-6/12 sm:mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-24 mb-10 text-center">
            Education
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-yellow-color">
            Basic Qualifications and Certification
          </h2>
          <div className="w-max m-auto my-4">
            {logoData.map((data, index) => (
              <Image
                width={70}
                height={70}
                className="rounded-full bg-contain bg-center m-auto inline-block h-20 w-20 p-2"
                src={data.source}
                alt="logo"
              />
            ))}
          </div>
          <p className="m-auto sm:w-3/4 text-center">
            My journey in web development began in 2016 after completing my
            degree in Computer Science,then in 2020 I completed my further
            studdies in Canada and since then, I have been on a relentless
            pursuit of mastering the ever-evolving landscape of web
            technologies. I have a strong command over a wide range of
            programming languages, which allows me to bridge the gap between
            design and technical implementation.
          </p>
        </div>
      </div>

      {/* Degree Section */}

      <div className="degree-section mb-12 mt-20">
        <p className="text-md font-bold text-yellow-color text-center">
          What is my qualification?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Degrees Received
        </h2>
        {eduData.map((data, key) => (
          <div className="flex flex-col justify-items-center sm:justify-around sm:flex-row my-6 p-0 sm:p-10">
            <div className="sm:my-2 my-4">
              <Image
                className="bg-contain mx-auto bg-center mt-16 shadow-2xl rounded-full w-64 h-64"
                src={data.image}
                width={200}
                height={200}
                alt="college logo"
              />
            </div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-9/12 rounded-xl bg-clip-border">
              <div className="p-6 flex justify-between bg-slate-300">
                <div>
                  <h3 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.collegeName}
                  </h3>
                  <h3 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.courseName}
                  </h3>
                </div>
                <div>
                  <h3 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.year}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="py-4 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {data.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Section */}

      <div className="certification-section mb-12 mt-20">
        <p className="text-md font-bold text-yellow-color text-center">
          What is my qualification?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Certifications
        </h2>

        <div className="flex flex-wrap justify-around">
          {certData.map((data, index) => (
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/TGGZFECNGDTB"
              className="mx-2 my-8 sm:m-8 shadow-md block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="h-48 border-b-2 bg-cover bg-center">
                <Image
                  className="w-full h-full p-4"
                  width={300}
                  height={300}
                  src={data.img}
                  alt="meta logo"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-gray-700 dark:text-gray-400 text-center">
                  {data.title}
                </p>
                <p className="text-gray-700 my-4">
                  <span className="font-bold">Skills:</span> {data.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
