import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const menu = [
  { name: "Overview", icon: "/icon/favicon.svg", href: "/" },
  { name: "Clients", icon: "/icon/healthcheck5.svg", href: "/clients" },
  { name: "Services", icon: "/icon/healthcheck1.svg", href: "/servicesover" },
  { name: "Tickets", icon: "/icon/healthcheck6.svg", href: "/tickets" },
  { name: "Settings", icon: "/icon/healthcheck4.svg", href: "/settings" },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className="fixed  left-0 top-0 h-full w-[18vw] bg-white border-r border-[#e5e8eb] flex flex-col py-8 px-4 z-50 ">
      <div className="mb-8 px-2">
        <span className="font-bold text-lg">Admin Panel</span>
      </div>
      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const isActive =
            router.pathname === item.href ||
            (item.href !== "/" && router.pathname.startsWith(item.href));
          return (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a
                className={`flex items-center gap-3 px-3 py-2 rounded-[20px] transition-colors font-medium text-[15px] leading-[150%] hover:bg-[#f5f8fa] ${
                  isActive ? "bg-[#e8edf5]  font-bold" : "text-[#0d141c]"
                }`}
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                {item.name}
              </a>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
