import React from "react";
import TOF from "../Photo/planning-schedule-time-management-with-calendar-business-meeting-activities-events-organizing-process-office-working-background-vector-illustration_2175-1009.png";

function Home() {
  return (
    <div className="relative h-fit">
      <img
        className="object-cover w-full h-full sticky -z-10"
        src={TOF}
        alt="Background foto"
      />
      <div className="absolute inset-0 flex items-center justify-center mb-14 ">
        <div className="text-center bg-transparent">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
            To-Do List
          </h1>
          <p>Make Your Plans More Organized With To-Do List</p>
          <div className="mt-4">
            <a
              href="./Fitur"
              className="rounded-full ring-2 ring-pink-500 px-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;