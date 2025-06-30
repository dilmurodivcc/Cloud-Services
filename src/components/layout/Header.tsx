import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header
        className="fixed top-0 w-[100%] bg-white
 py-[20px] px-[40px]  flex justify-between items-center border-b border-[#cfdbe8] "
      >
        <Link href={"/"} className="logo flex items-center gap-[16px]">
          <Image src="/icon/favicon.svg" alt="" width={32} height={32} />
          <h5 className="font-bold text-lg">Cloud Services</h5>
        </Link>
        <nav className="flex items-center gap-[36px]">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/servicesover"}>Alerts</Link>
          <Link href={"/tickets"}>Tickets</Link>
          <Link href={"/settings"}>Documentation</Link>
          <button className="flex items-center justify-center rounded-[10px] bg-[#e8edf5] w-[40px] h-[40px]">
            <Image src="/icon/ring.svg" alt="" width={24} height={24} />
          </button>
          <button>
            <Image src="/icon/avatar.svg" alt="" width={32} height={32} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
