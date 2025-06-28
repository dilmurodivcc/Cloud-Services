import React from "react";

const stats = [
  { label: "Cluster Uptime", value: "99.98%" },
  { label: "Last Infrastructure Incident", value: "None" },
];

const ClusterStatsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-[32px]">
    {stats.map((item, idx) => (
      <div
        key={idx}
        className="border border-[#cfdbe8] rounded-[8px] p-[24px] h-[112px] min-w-[158px] flex flex-col items-start gap-[10px]"
      >
        <span className="font-medium text-[16px] leading-[150%] text-[#0d141c]">
          {item.label}
        </span>
        <div className="font-bold text-[24px] leading-[125%] text-[#0d141c]">
          {item.value}
        </div>
      </div>
    ))}
  </div>
);

export default ClusterStatsCards;
