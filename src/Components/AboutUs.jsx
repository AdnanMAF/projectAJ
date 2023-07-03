import React from "react";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import profile1 from "../Photo/Swafoto.2.jpg";
import profile2 from "../Photo/Swafoto.2.jpg";

export default function ProfileCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-4 bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-56 object-cover object-top"
          src={profile1}
          alt="Profile"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Web Developer</p>
          <Disclosure>
            {({ open }) => (
              <>
                <ul className="mt-2">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 fill-current mr-2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Location icon SVG path */}
                    </svg>
                    <span>Location: New York, USA</span>
                  </li>
                  {open && (
                    <>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 fill-current mr-2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Email icon SVG path */}
                        </svg>
                        <span>Email: johndoe@example.com</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 fill-current mr-2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Phone icon SVG path */}
                        </svg>
                        <span>Phone: +1 123-456-7890</span>
                      </li>
                    </>
                  )}
                </ul>
                <Disclosure.Button className="flex items-center mt-2 text-gray-600 focus:outline-none">
                  {open ? (
                    <>
                      <MinusIcon className="h-4 w-4 mr-1" />
                      <span>Less</span>
                    </>
                  ) : (
                    <>
                      <PlusIcon className="h-4 w-4 mr-1" />
                      <span>More</span>
                    </>
                  )}
                </Disclosure.Button>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="max-w-md mx-4 bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-56 object-cover object-top"
          src={profile1}
          alt="Profile"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Web Developer</p>
          <ul className="mt-2">
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 fill-current mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Location icon SVG path */}
              </svg>
              <span>Location: New York, USA</span>
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 fill-current mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Email icon SVG path */}
              </svg>
              <span>Email: johndoe@example.com</span>
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 fill-current mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Phone icon SVG path */}
              </svg>
              <span>Phone: +1 123-456-7890</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
