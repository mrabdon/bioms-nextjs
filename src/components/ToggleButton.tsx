// components/ToggleCreateButton.tsx
"use client"; // Ensures this component is treated as a client-side component

import { useState } from "react";
import FormContainer from "@/components/FormContainer"; // Import FormContainer

interface ToggleCreateButtonProps {
  role: string; // The user role passed down from the parent component
}

const ToggleCreateButton: React.FC<ToggleCreateButtonProps> = ({ role }) => {
  const [isCreateButtonVisible, setIsCreateButtonVisible] = useState(
    role === "admin"
  );

  // Toggle the visibility of the "Create" button
  const toggleCreateButton = () => {
    setIsCreateButtonVisible((prev) => !prev); // Toggle the state
  };

  return (
    <div className="flex flex-col gap-4">
      {isCreateButtonVisible && <FormContainer table="volume" type="create" />}

      {/* Button to toggle the visibility of the "Create" button */}
      {role === "admin" && (
        <button
          onClick={toggleCreateButton}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {isCreateButtonVisible ? "Hide Create Button" : "Show Create Button"}
        </button>
      )}
    </div>
  );
};

export default ToggleCreateButton;
