import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import MenuLink from "./MenuLink";

const user = await currentUser();
const role = user?.publicMetadata.role as string;

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href:
          role === "admin"
            ? "/admin"
            : role === "producer"
            ? "/producer"
            : role === "staff"
            ? "/staff"
            : "/",
        visible: ["admin", "producer", "staff"],
      },
      {
        icon: "/producer.png",
        label: "Producers",
        href: "/list/producers",
        visible: ["admin"],
      },
      {
        icon: "/consumer.png",
        label: "Oil Companies",
        href: "/list/consumers",
        visible: ["admin"],
      },
      // {
      //   icon: "/consumer.png",
      //   label: "Consumers",
      //   href: "/list/producers",
      //   visible: ["admin", "companyAdmin"],
      // },
      {
        icon: "/user.png",
        label: "User Management",
        href: "/list/users",
        visible: ["admin", "producer"],
      },
      // {
      //   icon: "/volume.png",
      //   label: "Volumes",
      //   href: "/list/volumes",
      //   visible: ["admin", "companyAdmin", "producer"],
      // },
      {
        icon: "/volume.png",
        label: "Volumes",
        href: "/list/volumes",
        visible: ["producer"],
      },
      // {
      //   icon: "/volume.png",
      //   label: "Subjects",
      //   href: "/list/subjects",
      //   visible: ["admin", "companyAdmin", "producer"],
      // },
      // {
      //   icon: "/subject.png",
      //   label: "Forms",
      //   href: "/list/forms",
      //   visible: ["admin", "producer"],
      // },
      {
        icon: "/report.png",
        label: "Reports",
        href: "/list/reports",
        visible: ["admin", "producer", "staff"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin"],
      },
      // {
      //   icon: "/report.png",
      //   label: "User Management",
      //   href: "/list/usermanagement",
      //   visible: ["admin", "producer"],
      // },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "producer", "staff"],
      },
      {
        icon: "/setting.png",
        label: "Change Password",
        href: "/change",
        visible: ["admin", "producer", "staff"],
      },
      // {
      //   icon: "/logout.png",
      //   label: "Logout",
      //   href: "/logout",
      //   visible: ["admin", "producer"],
      // },
    ],
  },
];

const Menu = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) =>
            item.visible?.includes(role) ? (
              <MenuLink
                key={item.label}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            ) : null
          )}
        </div>
      ))}
      {/* Logout Button */}
      <div className="flex flex-col gap-4 my-2">
        <SignOutButton>
          <button
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            type="submit"
          >
            <Image src="/logout.png" alt="Logout" width={20} height={20} />
            <span className="hidden lg:block">Logout</span>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default Menu;
