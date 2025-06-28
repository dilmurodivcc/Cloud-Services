import React from "react";

const healthData = [
  {
    label: "Service Uptime (24h)",
    value: "99.99%",
    diff: "+0.01%",
    color: "green",
  },
  {
    label: "Service Uptime (7d)",
    value: "99.95%",
    diff: "-0.05%",
    color: "red",
  },
  {
    label: "Service Uptime (30d)",
    value: "99.90%",
    diff: "-0.02%",
    color: "red",
  },

  { label: "Status", value: "Online", diff: "N/A", color: "blue" },
  { label: "Error Rates", value: "0.01%", diff: "+0.02%", color: "red" },
];

const SystemHealthCards = () => (
  <div>
    <h3
      className="font-bold text-[22px] leading-[127%] text-[#0d141c] my-[32px]
"
    >
      System Health
    </h3>
    <div className="flex flex-wrap justify-between gap-4 mb-4">
      {healthData.map((item, idx) => (
        <div
          key={idx}
          className="border border-[#cfdbe8] rounded-[8px] p-[24px]  w-[180px] h-[178px] min-w-[158px]
 flex flex-col items-start gap-[10px]"
        >
          <span
            className="font-medium text-[16px] leading-[150%] text-[#0d141c]
"
          >
            {item.label}
          </span>
          <span
            className="font-bold text-[24px] leading-[125%] text-[#0d141c]
"
          >
            {item.value}
          </span>
          <span
            className={`font-medium text-[16px] leading-[150%] 
 ${
   item.color === "green"
     ? "text-[#088738]"
     : item.color === "red"
     ? "text-[#f04438]"
     : "text-[#4a739c]"
 }`}
          >
            {item.diff}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default SystemHealthCards;
