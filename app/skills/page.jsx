import React from "react";
import skillImg from "../../public/images/skillsPage/skill.svg";
import { skillsData } from "../data/skillsData";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="skills-intro flex flex-col sm:flex-row">
        <div className="img-section w-full sm:w-6/12">
          <Image
            className="w-full p-8"
            src={skillImg}
            alt="image for skills intro section"
          />
          <a
            className="block text-xs text-slate-300 sm:absolute sm:left-72 text-center"
            href="https://storyset.com/work"
          >
            Work illustrations by Storyset
          </a>
        </div>
        <div className="w-full sm:w-6/12 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-24 sm:mb-10 text-center">
            Skills
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-yellow-color">
            Basic Qualifications and Certification
          </h2>
          <p className="m-auto sm:w-3/4 text-center my-4 p-2">
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

      <div className="sm:my-8 my-20">
        <p className="text-md font-bold text-yellow-color text-center">
          What I do?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          My Skills
        </h2>
        <div className="skills-list m-8">
          {/* <h2 className="text-4xl m-4">Frontend Technologies</h2> */}
          <div className="flex flex-wrap justify-between">
            {skillsData?.map((data, index) => (
              <a
                key={index}
                href="#"
                class="flex flex-col items-center m-4 w-full h-full sm:h-28 sm:w-78 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  class="object-cover p-4 w-fit rounded-t-lg h-32 sm:h-fit sm:fit md:h-fit md:w-32 md:rounded-none md:rounded-s-lg"
                  src={data.image}
                  width={50}
                  height={50}
                  alt=""
                />
                <div class="flex flex-col justify-between text-center sm:text-left p-4 leading-normal w-52">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
