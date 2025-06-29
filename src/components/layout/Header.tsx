import Link from "next/link";

const Header = () => {
  return (
    <>
      <header
        className="fixed top-0 w-[100%] bg-white
 py-[20px] px-[40px]  flex justify-between items-center border-b border-[#cfdbe8] "
      >
        <Link href={"/"} className="logo flex items-center gap-[16px]">
          <img src="/icon/favicon.svg" alt="" />
          <h5 className="font-bold text-lg">Cloud Services</h5>
        </Link>
        <nav className="flex items-center gap-[36px]">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/alerts"}>Alerts</Link>
          <Link href={"/tickets"}>Tickets</Link>
          <Link href={"/settings"}>Documentation</Link>
          <button className="flex items-center justify-center rounded-[10px] bg-[#e8edf5] w-[40px] h-[40px]">
            <img src="/icon/ring.svg" alt="" />
          </button>
          <button>
            <img src="/icon/avatar.svg" alt="" />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
