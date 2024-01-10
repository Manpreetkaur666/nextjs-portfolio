/* eslint-disable react/no-unescaped-entities */
import React from "react";
import expImg from "../../public/images/expPage/expIntro.svg";
import Image from "next/image";
import { expData } from '../data/expData';

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
            Experinece
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-yellow-color">
            Work, Internship, Volunteership
          </h2>
          <p className="m-auto sm:w-3/4 text-center my-4 p-2">
            I have worked with many evolving startups as ML and DL Developer,
            Designer and Software Architect. I have also worked with some well
            established companies mostly as AI Developer. I love organising
            events and that is why I am also involved with many opensource
            communities as a representative.
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
                    <h2 className="font-bold text-black text-lg">
                      {data.leftTitle}
                    </h2>
                    <h2 className="font-bold text-black text-lg">
                      {data.leftYear}
                    </h2>
                  </div>

                  <ul className="text-gray-600">
                    {data.leftDesc.map((descList, index) => (
                      <li className="list-disc p-2" key={index}>
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
                      <h2 className="font-bold text-black text-lg">
                        {data.rgtTitle}
                      </h2>
                      <h2 className="font-bold text-black text-lg">
                        {data.rgtYear}
                      </h2>
                    </div>
                    <ul className="text-gray-600">
                      {data.rgtDesc?.map((descList, index) => (
                        <li className="list-disc p-2" key={index}>
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

      {/* <div className="exp-section mb-12 mt-20">
        <p className="text-md font-bold text-yellow-color text-center">
          What I've achieved?
        </p>
        <h2 className="text-5xl font-bold text-center mb-10">My Experience</h2>

        <div className="mb-12 mt-20">
          <div className="text-yellow-color">
            <div className="relative my-0 mx-auto after:content-[''] after:absolute after:w-[6px] after:bg-black after:inset-y-0 after:left-2/4 after:ml-[-3px] ">
              <div
                className="relative px-[40px] py-[10px] w-1/2 left-0
              after:absolute after:w-[25px] after:h-[25px] after:right-[-14px]
              after:bg-white after:border-4 after:border-orange-500 after:top-[15px]
              after:rounded-full after:z-10
              before-content[''] before:absolute before:h-0 before:top[22px] before:w-0 before:z-10
              before:right-[30px] before:border-2 before:border-white 
              before:border-x-[10px] before:border-"
              >
                <h2>2017</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <h2>2016</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <h2>2015</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <h2>2012</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <h2>2011</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <h2>2007</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default page;
