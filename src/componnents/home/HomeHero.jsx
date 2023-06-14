import React from "react";
import SearchBar from "@/componnents/SearchBar";

const HomeHero = () => {
  return (
    <div className="div1 h-screen overflow-hidden w-full image-bg">
      <div className=" div2 w-full h-full bg-gradient-to-b px-6 from-primary flex flex-col lg:justify-center justify-end lg:pb-0 pb-20 items-center to-transparent gap-20">
        <h1 className="text-white font-bold text-3xl lg:text-5xl max-w-2xl leading-normal text-center">
          Your Way Your Trip
        </h1>
        <SearchBar />
        <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-2 lg:gap-10">
          <a
            href="#"
            className="rounded-xl bg-white py-2 px-3 max-w-[180px] lg:w-full justify-center flex items-center"
          >
            <span className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-10 lg:w-10 h-8 w-8 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" />
              </svg>
            </span>
            <span className="block">
              <span className="text-xs block">Disponible sur</span>
              <span className="lg:text-lg text-sm font-bold block">
                Google Play
              </span>
            </span>
          </a>
          <a
            href="#"
            className="rounded-xl bg-white py-2 px-3 max-w-[180px] lg:w-full justify-center flex items-center"
          >
            <span className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-10 lg:w-10 h-8 w-8 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z" />
                <path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z" />
              </svg>
            </span>
            <span className="block">
              <span className="text-xs block">Disponible sur</span>
              <span className="lg:text-lg text-sm font-bold block">App Store</span>
            </span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .image-bg {
            background-image: url('/images/traveller.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }
        @media screen and (max-width: 430px) {
          div.div1{
            height: fit-content;
          }
          div.div2{
          justify-content: flex-start;
          padding-top: 128px;
          gap: 60px;
          }
        }
      `}</style>

    </div>
  );
};

export default HomeHero;
