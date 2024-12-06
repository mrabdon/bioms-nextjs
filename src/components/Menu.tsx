import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "producer"],
      },
      {
        icon: "/producer.png",
        label: "Producers",
        href: "/list/producers",
        visible: ["admin", "companyAdmin"],
      },
      {
        icon: "/consumer.png",
        label: "Consumers",
        href: "/list/producers",
        visible: ["admin", "companyAdmin"],
      },
      {
        icon: "/user.png",
        label: "User Management",
        href: "/list/users",
        visible: ["admin", "companyAdmin"],
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
        href: "/list/newvolume",
        visible: ["admin", "companyAdmin", "producer"],
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
      // {
      //   icon: "/report.png",
      //   label: "Reports",
      //   href: "",
      //   visible: ["admin", "producer"],
      // },
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
        href: "",
        visible: ["admin", "producer"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "",
        visible: ["admin", "producer"],
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
