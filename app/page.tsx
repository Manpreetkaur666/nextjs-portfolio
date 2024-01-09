import React, { useState } from "react";
import { mainData } from "./data/mainData";
import Image from "next/image";
import codingImg from "../public/images/homePage/coding.svg";

export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-2 sm:mx-6">
        <div className="intro-section flex flex-col sm:flex-row h-full">
          <div className="w-full sm:w-1/2 my-2 sm:my-auto sm:ml-8 text-center md:text-left backdrop-blur-sm bg-white/10 md:bg-transparent md:backdrop-blur-none p-4 mt-20 mb-6">
            <h1 className="text-2xl sm:text-5xl font-bold mb-2">
              Manpreet Kaur
            </h1>
            <p className="text-lg sm:text-xl font-bold mb-6 text-yellow-color">
              (Web Developer)
            </p>
            <p className="text-md sm:text-lg">
              A passionate individual who always thrives to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact.
            </p>
            <div className="my-4">
              <a
                target="_blank"
                href="https://github.com/Manpreetkaur666?tab=repositories"
                className="bg-main-light hover:bg-yellow-color text-main-color font-bold py-2 px-4 my-4 sm:my-4 rounded"
              >
                See My work on GitHub!
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 sm:p-10">
            <Image
              className="w-full h-full sm:h-5/6"
              src={codingImg}
              alt="vector image"
            />
            <a
              className="block text-xs text-slate-300 md:absolute md:right-36 text-center"
              href="https://storyset.com/web"
            >
              Image source: Web illustrations by Storyset
            </a>
          </div>
        </div>

        {/***************************** Skills ******************************/}

        <div className="skills-section my-24 sm:my-12 sm:my-4">
          <p className="text-md font-bold text-yellow-color text-center">
            What I know?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-center sm:mb-8">
            My Expertise
          </h2>

          {mainData.map((data, index) => (
            <div
              className="skills flex sm:flex-row flex-col-reverse justify-between sm:my-10 my-4"
              key={index}
            >
              <div className="image-section relative flex-auto w-max my-auto text-center">
                <Image
                  width={300}
                  height={300}
                  src={data.img}
                  className="sm:w-10/12 h-full"
                  alt="test image"
                />
                <div className="text-center">
                  <a
                    className="md:absolute text-center sm:bottom-4 sm:right-14 md:right-8 text-xs"
                    href={data.source}
                  >
                    {data.sourcetext}
                  </a>
                </div>
              </div>
              <div className="desc-section sm:flex-auto flex-none sm:w-1/3">
                <h2 className="text-2xl sm:text-4xl sm:mb-12 mb-4 mt-8 text-center sm:text-left font-medium underline underline-offset-8 decoration-2">
                  {data.title}
                </h2>
                {data.desc.map((listData, index) => (
                  <ul key={index}>
                    <li className="my-2 sm:my-4 py-2 sm:py-4 px-4">
                      <p className="font-normal">{listData}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
