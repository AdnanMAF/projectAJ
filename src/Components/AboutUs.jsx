import React, { useState } from "react";
import profileImage1 from "../Photo/Swafoto.2.jpg";
import profileImage2 from "../Photo/IMG_20220711_192310_edit_240758458691386.png";

export default function ProfileCard() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const handleShowMore1 = () => {
    setShowMore1(!showMore1);
  };

  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[408px] mr-2 bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="">
          <img
            className="w-full h-80 object-cover object-top"
            src={profileImage1}
            alt="Profile"
          />
        </div>
        <div className="p-4">
          <p className="text-xl text-gray-800">Muhamad Adnan Fadillah</p>
          <p className="text-gray-800">2207411048</p>
          <div className="mt-2">
            <button
              className="text-black hover:underline focus:outline-none"
              onClick={handleShowMore1}
            >
              {showMore1 ? "Show Less.." : "Show More.."}
            </button>
          </div>
          {showMore1 && (
            <div className="mt-4">
              <p className="text-gray-600">Class: TI-2B</p>
              <p className="text-gray-600">Email: muhamad.adnan.fadillah.tik22@mhsw.pnj.ac.id</p>
              {/* Additional information goes here */}
            </div>
          )}
        </div>
      </div>
      <div className="w-[408px] ml-2 bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="">
          <img
            className="w-full h-80 object-cover object-top"
            src={profileImage2}
            alt="Profile"
          />
        </div>
        <div className="p-4">
          <p className="text-xl text-gray-800">Juan Graciano</p>
          <p className="text-gray-800">2207411040</p>
          <div className="mt-2">
            <button
              className="text-black hover:underline focus:outline-none"
              onClick={handleShowMore2}
            >
              {showMore2 ? "Show Less.." : "Show More.."}
            </button>
          </div>
          {showMore2 && (
            <div className="mt-4">
              <p className="text-gray-600">Class: Ti-2B</p>
              <p className="text-gray-600">Email: johndoe@example.com</p>
              {/* Additional information goes here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
