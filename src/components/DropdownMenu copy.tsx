"use client";

import { useState, useEffect, useRef } from "react";
import FormContainer from "./FormContainer";

const InviteDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleResendInvite = () => {
    console.log("Invite resent");
  };

  const handleCancelInvite = () => {
    console.log("Invite canceled");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Close dropdown if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center p-1 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="h-1.5 w-1.5 bg-green-500 rounded-full mx-0.5"></span>
        <span className="h-1.5 w-1.5 bg-green-500 rounded-full mx-0.5"></span>
        <span className="h-1.5 w-1.5 bg-green-500 rounded-full mx-0.5"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-max bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="space-y-1 py-1">
            <li>
              <button
                onClick={handleResendInvite}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Resend Invite
              </button>
            </li>
            <li>
              <button
                onClick={handleCancelInvite}
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Cancel Invite
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InviteDropdown;
