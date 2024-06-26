/* eslint-disable react/no-unescaped-entities */
import React from "react";
import expImg from "../../public/images/expPage/expIntro.svg";
import Image from "next/image";
import { expData } from "../data/expData";

const page = () => {
  return (
    <div>
      <div className="exp-intro flex flex-col sm:flex-row">
        <div className="img-section w-full sm:w-6/12">
          <Image
            src={expImg}
            alt="experience intro image"
            className="py-2 sm:pl-12 w-full sm:w-10/12"
          />
          <a
            href="https://storyset.com/business"
            className="block text-xs text-slate-300 sm:absolute sm:left-72 text-center"
          >
            Business illustrations by Storyset
          </a>
        </div>
        <div className="w-full sm:w-6/12 my-9">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-24 sm:mb-10 text-center">
            Experience
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-yellow-color">
            Work, Internship, Volunteership
          </h2>
          <p className="m-auto sm:w-3/4 text-center my-4 p-2">
            I've played pivotal roles in the dynamic world of startups,
            contributing my expertise as a Developer, Designer, and Software
            Architect to foster their growth. In addition, I've seamlessly
            transitioned into collaborating with reputable, established
            companies, primarily functioning as a Web Developer. My versatile
            skill set, honed through experiences with both evolving startups and
            established enterprises, positions me as a valuable asset ready to
            tackle diverse challenges in the ever-evolving tech landscape.
          </p>
        </div>
      </div>

      <div className="exp-section mb-12 mt-20">
        <p className="text-md font-bold text-yellow-color text-center">
          What I've achieved?
        </p>
        <h2 className="text-4xl sm:text-5xlfont-bold text-center mb-10">
          My Experience
        </h2>

        <div className="mb-12 sm:mt-20">
          {expData.map((data, index) => (
            <div className="timeline text-yellow-color relative" key={index}>
              <div className="exp-container left">
                <div className="content">
                  <div className="flex justify-between my-2">
                    <h2 className="font-bold text-black text-sm sm:text-md">
                      {data.leftTitle}
                    </h2>
                    <h2 className="font-bold text-black text-sm sm:text-md">
                      {data.leftYear}
                    </h2>
                  </div>

                  <ul className="text-gray-600">
                    {data.leftDesc.map((descList, index) => (
                      <li className="list-disc p-2 text-sm" key={index}>
                        {descList}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {data.rgtTitle && (
                <div className="exp-container right">
                  <div className="content">
                    <div className="flex justify-between my-2">
                      <h2 className="font-bold text-black text-sm sm:text-md">
                        {data.rgtTitle}
                      </h2>
                      <h2 className="font-bold text-black text-sm sm:text-md">
                        {data.rgtYear}
                      </h2>
                    </div>
                    <ul className="text-gray-600">
                      {data.rgtDesc?.map((descList, index) => (
                        <li className="list-disc p-2 text-sm" key={index}>
                          {descList}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
