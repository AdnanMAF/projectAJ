import React from "react";
import TOF from "../Photo/steps-of-the-strategic-planning-process.png";

function Home() {
  return (
    <div className="relative h-fit bg-slate-100">
      <img
        className="object-cover w-full h-full sticky"
        src={TOF}
        alt="Background foto"
      />
      <div className="absolute inset-0 flex items-center justify-center mb-14">
        <div className="text-center bg-transparent">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
            To-Do List
          </h1>
          <p>Make Your Plans More Organized With To-Do List</p>
          <div className="mt-4">
            <div>
            <a
              href="./Fitur"
              className="bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-900 font-bold py-2 px-4 mr-4 rounded"
            >
              Learn More
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;