"use client";
import SubHeadingBtn from "../SubHeadingBtn";
import exploreel1 from "@/public/img/explore-el-1.png";
import exploreel2 from "@/public/img/explore-el-2.png";
import exploreel3 from "@/public/img/explore-el-3.png";
import Image from "next/image";
import { PlayIcon } from "@/public/data/icons";
import ReactPlayer from "react-player";
import { useState } from "react";

const Explore = () => {
  const [playing, setPlaying] = useState(false);

  const Play = () => {
    return (
      <span
        onClick={() => setPlaying(true)}
        className="bg-[var(--tertiary)] text-white w-14 grid place-items-center h-14 rounded-full z-50 cursor-pointer relative">
        <PlayIcon />
      </span>
    );
  };
  return (
    <section className="bg-white pt-[60px] lg:pt-[120px] relative before:bg-[#04052F] before:w-full before:h-[30%] before:absolute before:bottom-0 before:left-0 before:-z-[-1]">
      <Image
        src={exploreel1}
        className="absolute hidden lg:block top-52 left-[20%]"
        alt="el"
      />
      <Image
        src={exploreel2}
        className="absolute hidden lg:block top-20 right-20"
        alt="el"
      />
      <Image
        src={exploreel3}
        className="absolute hidden lg:block top-[75%] right-20 z-30"
        alt="el"
      />

      <div className="container z-10">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3 ">
          <SubHeadingBtn
            text="Exploring Properties"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3 leading-tight">
            Take a Detailed Look Inside Our Properties
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <div
          className={`!rounded-2xl player-wrapper bg-gray-200 shadow-md mx-2 lg:mx-0 ${
            !playing &&
            "after:bg-[#363AEC] after:absolute after:w-full after:h-[100%] after:left-0 after:top-0 after:rounded-2xl after:bg-opacity-20 after:z-[-1]"
          }`}>
          <ReactPlayer
            url="/video/brandVideo.mp4"
            controls
            light="/img/mobile/mobile-app-woman.png"
            playIcon={<Play />}
            className={`react-player z-30 relative `}
            playing
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
