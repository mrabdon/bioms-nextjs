"use client"; // Mark as a client component to enable useState

import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link from Next.js

type Tab = {
  label: string;
  value: string;
  link: string; // Add a link property to each tab
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const pathname = usePathname(); // Get the current URL path

  return (
    <div className="flex border-b mb-4">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          href={tab.link}
          className={`px-4 py-2 ${
            pathname === tab.link
              ? "border-b-2 border-purple-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
