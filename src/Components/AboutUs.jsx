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
          <ul className="mt-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center text-gray-600 focus:outline-none">
                    {open ? (
                      <MinusIcon className="h-5 w-5 fill-current mr-2" />
                    ) : (
                      <PlusIcon className="h-5 w-5 fill-current mr-2" />
                    )}
                    <span>Location: New York, USA</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-600">
                    <p>Location details go here...</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center text-gray-600 focus:outline-none">
                    {open ? (
                      <MinusIcon className="h-5 w-5 fill-current mr-2" />
                    ) : (
                      <PlusIcon className="h-5 w-5 fill-current mr-2" />
                    )}
                    <span>Email: johndoe@example.com</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-600">
                    <p>Email details go here...</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center text-gray-600 focus:outline-none">
                    {open ? (
                      <MinusIcon className="h-5 w-5 fill-current mr-2" />
                    ) : (
                      <PlusIcon className="h-5 w-5 fill-current mr-2" />
                    )}
                    <span>Phone: +1 123-456-7890</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-600">
                    <p>Phone details go here...</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </ul>
        </div>
      </div>
    </div>
  );
}
