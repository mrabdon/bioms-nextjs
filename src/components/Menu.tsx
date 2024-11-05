import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "secretary"],
      },
      {
        icon: "/user.png",
        label: "Biofuel Participants",
        href: "/list/biofuels",
        visible: ["admin", "companyAdmin"],
      },
      {
        icon: "/user.png",
        label: "Users",
        href: "/list/users",
        visible: ["admin", "companyAdmin"],
      },
      {
        icon: "/volume.png",
        label: "Volumes",
        href: "/list/volumes",
        visible: ["admin", "companyAdmin", "secretary"],
      },
      {
        icon: "/subject.png",
        label: "Forms",
        href: "/list/forms",
        visible: ["admin", "companyAdmin"],
      },
      // {
      //   icon: "/class.png",
      //   label: "Bid Management",
      //   href: "/list/bid",
      //   visible: ["admin", "remb", "secretary"],
      // },
      // {
      //   icon: "/parent.png",
      //   label: "Transactions",
      //   href: "",
      //   visible: ["admin", "remb", "oimb", "epap", "sra"],
      // },
      // {
      //   icon: "/attendance.png",
      //   label: "Attendance",
      //   href: "",
      //   visible: ["admin", "remb", "oimb", "epap", "sra"],
      // },
      // {
      //   icon: "/calendar.png",
      //   label: "Events",
      //   href: "",
      //   visible: ["admin", "remb", "oimb", "epap", "sra"],
      // },
      // {
      //   icon: "/message.png",
      //   label: "Messages",
      //   href: "",
      //   visible: ["admin", "remb", "oimb", "epap", "sra"],
      // },
      {
        icon: "/report.png",
        label: "Reports",
        href: "",
        visible: ["admin", "companyAdmin", "secretary"],
      },
      {
        icon: "/activity.png",
        label: "Activity Log",
        href: "",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "",
        visible: ["admin", "companyAdmin", "secretary"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "",
        visible: ["admin", "companyAdmin", "secretary"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "",
   
      },
    ],
  },
];


const Menu = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible?.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
