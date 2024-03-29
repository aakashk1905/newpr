import React from "react";
import hernia from "../../Assests/Specialities/hernia.png";
import gallstones from "../../Assests/Specialities/gallstones.png";
import appendicities from "../../Assests/Specialities/Appendicitis.png";
import InguinalHernia from "../../Assests/Specialities/Inguinal Hernia.png";
import UmbilicalHernia from "../../Assests/Specialities/Umbilical Hernia.png";
import { FaArrowRightLong } from "react-icons/fa6";

const OurSpecialities = () => {
  return (
    <div className="w-full flex bg-[#F2F4F5] justify-center py-16 my-10">
      <div className=" w-[95%] md:w-4/5">
        <h1 className="text-2xl font-semibold mb-4 text-center font-lato">
          Our Specialities
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
          {/* card */}
          <div className="bg-white rounded-2xl shadow-md">
            <img
              className="border-b border-gray-300 mb-4 rounded-t-2xl"
              src={hernia}
              alt=""
            />
            <div className="px-4">
              <h1 className="text-sm mdtext-sm md:text-lg font-semibold mb-1 font-lato">Hernia</h1>
              <p className="mb-2 font-lato text-xs md:text-base">
                Specialised & advanced <br />
                treatment for Anorectal Disease…
              </p>
              <div className="flex justify-end mb-2 text-2xl text-[#5854A8]">
                <FaArrowRightLong></FaArrowRightLong>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="bg-white rounded-2xl shadow-md">
            <img
              className="border-b border-gray-300 mb-4 rounded-t-2xl"
              src={gallstones}
              alt=""
            />
            <div className="px-4">
              <h1 className="text-sm md:text-lg font-semibold mb-1 font-lato">Gallstones</h1>
              <p className="mb-2 font-lato text-xs md:text-base">
                Specialised & advanced <br />
                treatment for Anorectal Disease…
              </p>
              <div className="flex justify-end mb-2 text-2xl text-[#5854A8]">
                <FaArrowRightLong></FaArrowRightLong>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="bg-white rounded-2xl shadow-md">
            <img
              className="border-b border-gray-300 mb-4 rounded-t-2xl"
              src={appendicities}
              alt=""
            />
            <div className="px-4">
              <h1 className="text-sm md:text-lg font-semibold mb-1 font-lato">Appendicitis</h1>
              <p className="mb-2 font-lato text-xs md:text-base">
                Specialised & advanced <br />
                treatment for Anorectal Disease…
              </p>
              <div className="flex justify-end mb-2 text-2xl text-[#5854A8]">
                <FaArrowRightLong></FaArrowRightLong>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="bg-white rounded-2xl shadow-md">
            <img
              className="border-b border-gray-300 mb-4 rounded-t-2xl"
              src={InguinalHernia}
              alt=""
            />
            <div className="px-4">
              <h1 className="text-sm md:text-lg font-semibold mb-1 font-lato">Inguinal Hernia</h1>
              <p className="mb-2 font-lato text-xs md:text-base">
                Specialised & advanced <br />
                treatment for Anorectal Disease…
              </p>
              <div className="flex justify-end mb-2 text-2xl text-[#5854A8]">
                <FaArrowRightLong></FaArrowRightLong>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="bg-white rounded-2xl shadow-md">
            <img
              className="border-b border-gray-300 mb-4 rounded-t-2xl"
              src={UmbilicalHernia}
              alt=""
            />
            <div className="px-4">
              <h1 className="text-sm md:text-lg font-semibold mb-1 font-lato">Umbilical Hernia</h1>
              <p className="mb-2 font-lato text-xs md:text-base">
                Specialised & advanced <br />
                treatment for Anorectal Disease…
              </p>
              <div className="flex justify-end mb-2 text-2xl text-[#5854A8]">
                <FaArrowRightLong></FaArrowRightLong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialities;
