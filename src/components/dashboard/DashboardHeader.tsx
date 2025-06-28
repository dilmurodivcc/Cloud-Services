import React from "react";

const DashboardHeader = () => (
  <div className="flex flex-col gap-[14px] text-start mb-6">
    <h2 className="font-bold text-[32px] leading-[125%] text-[#0d141c]  ">
      Dashboard
    </h2>
    <p
      className="font-normal text-[14px] leading-[150%] text-[#4a739c]
"
    >
      Overview of system health and performance
    </p>
  </div>
);

export default DashboardHeader;
