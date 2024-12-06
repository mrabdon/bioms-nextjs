"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import { role } from "@/lib/data";

type User = {
  id: number;
  date: Date;
  committedVolume: number;
  actualProduction: number;
  begInventory: number;
  totalStock: number;
  sold: number;
  unsold: number;
};
type Invitation = {
  id: number;
  date: Date;
  committedVolume: number;
  actualProduction: number;
  begInventory: number;
  totalStock: number;
  sold: number;
  unsold: number;
};

interface UsersTabProps {
  allUsers: User[];
  invitations: Invitation[];
  activeTab: "All" | "Invitations"; // Receive the active tab as a prop
}

export default function UsersTab({
  allUsers,
  invitations,
  activeTab,
}: UsersTabProps) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<"All" | "Invitations">(
    activeTab
  );

  // Update the tab state when the activeTab prop changes
  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleTabChange = (tab: "All" | "Invitations") => {
    setCurrentTab(tab);
    if (tab === "Invitations") {
      router.push("/list/newvolume/reports"); // Redirect to the invitations path
    } else {
      router.push("/list/newvolume"); // Redirect to the main users page
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-4">
        <button
          onClick={() => handleTabChange("All")}
          className={`pb-2 text-sm font-medium ${
            currentTab === "All"
              ? "text-gray-800 border-b-2 border-purple-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleTabChange("Invitations")}
          className={`pb-2 text-sm font-medium ${
            currentTab === "Invitations"
              ? "text-gray-800 border-b-2 border-purple-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Reports
        </button>
      </div>

      {/* Content */}
      <div>
        {currentTab === "All" && (
          <div className="bg-white shadow-sm rounded-lg">
            {/* Render All Users */}
            <div className="hidden sm:grid grid-cols-4 font-medium text-sm text-gray-500 border-b border-gray-200 p-4">
              <div>Date</div>
              <div>Committed Volume</div>
              <div className="hidden lg:block">Actual Production</div>
              <div className="hidden lg:block">Created by</div>
            </div>
            <div className="divide-y divide-gray-200">
              {allUsers.map((user, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-4 items-center text-sm text-gray-700 p-4 gap-y-4 sm:gap-y-0"
                >
                  <div className="flex items-center space-x-3">
                    {" "}
                    {new Intl.DateTimeFormat("en-US").format(user.date)}{" "}
                  </div>
                  <div>{user.committedVolume}</div>
                  <div className="hidden lg:block">{user.actualProduction}</div>
                  <div className="hidden lg:block">{user.committedVolume}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentTab === "Invitations" && (
          <div className="bg-white shadow-sm rounded-lg">
            {/* Render Invitations */}
            <div className="hidden sm:grid grid-cols-7 font-medium text-sm text-gray-500 border-b border-gray-200 p-4">
              <div>Date</div>
              <div>Committed Volume</div>
              <div>Actual Production</div>
              <div>Beg. Inventory</div>
              <div>Total Stock</div>
              <div>Sold</div>
              <div>Unsold</div>
            </div>
            <div className="divide-y divide-gray-200">
              {allUsers.map((user, index) => (
                <div
                  key={index}
                  className="grid grid-cols-7 items-center text-sm text-gray-700 p-4 gap-y-4 sm:gap-y-0"
                >
                  <div>
                    {new Intl.DateTimeFormat("en-US").format(user.date)}
                  </div>
                  <div>{user.committedVolume || 0}</div>
                  <div>{user.actualProduction || 0}</div>
                  <div>{user.begInventory}</div>
                  <div>{user.totalStock}</div>
                  <div>{user.sold || 0}</div>
                  <div>{user.unsold || 0}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
