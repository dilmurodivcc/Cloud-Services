import React from "react";

const SystemStatsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div className="border border-[#cfdbe8] rounded-[8px] p-[24px] h-[112px] min-w-[158px] flex flex-col items-start gap-[10px]">
      <span className="font-medium text-[16px] leading-[150%] text-[#0d141c]
">
        Average Response Time
      </span>
      <div className="font-bold text-[24px] leading-[125%] text-[#0d141c]">
        250ms
      </div>
    </div>
    <div className="border border-[#cfdbe8] rounded-[8px] p-[24px] h-[112px] min-w-[158px] flex flex-col items-start gap-[10px]">
      <span className="font-medium text-[16px] leading-[150%] text-[#0d141c]
">
        Last Deployment
      </span>
      <div className="font-bold text-[24px] leading-[125%] text-[#0d141c]">
        2023-11-15 14:30 UTC
      </div>
    </div>
  </div>
);

export default SystemStatsCards;
