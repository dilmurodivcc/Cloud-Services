import Image from "next/image";

const dashboards = [
  { icon: "/icon/healthcheck1.svg", name: "Service A" },
  { icon: "/icon/healthcheck2.svg", name: "Database B" },
  { icon: "/icon/healthcheck3.svg", name: "Cloud Provider C" },
  { icon: "/icon/healthcheck4.svg", name: "Security Service D" },
  { icon: "/icon/healthcheck5.svg", name: "Global Network E" },
  { icon: "/icon/healthcheck6.svg", name: "SSL Certificate Monitor" },
];

const HealthCheckDashboards = () => (
  <div>
    <h3 className="font-semibold text-lg mb-[24px]">Health Check Dashboards</h3>
    <div className="flex flex-wrap justify-between gap-[12px] mb-8">
      {dashboards.map((d, i) => (
        <div
          key={i}
          className="border border-[#cfdbe8] rounded-[8px] p-[16px] w-[176px]  flex flex-col  items-start    "
        >
          <Image
            className=" mb-[12px]"
            src={d.icon}
            alt={d.name}
            width={32}
            height={32}
          />
          <span
            className="font-bold text-[16px] leading-[125%] text-[#0d141c]
"
          >
            {d.name}
          </span>
          <span
            className="font-normal text-[14px] leading-[150%] text-[#4a739c]
"
          >
            View dashboard
          </span>
        </div>
      ))}
    </div>
  </div>
);
export default HealthCheckDashboards;
