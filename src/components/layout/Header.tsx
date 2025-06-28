import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="py-[24px] px-[40px] flex justify-between items-center  ">
        <Link href={"/"} className="logo flex items-center gap-[16px]">
          <img src="/icon/favicon.svg" alt="" />
          <h5 className="font-bold text-lg">Cloud Services</h5>
        </Link>
        <nav className="flex items-center gap-[36px]">
          <Link href={"/services"}>Dashboard</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/services"}>Alerts</Link>
          <Link href={"/services"}>Tickets</Link>
          <Link href={"/services"}>Documentation</Link>
          <button>
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
