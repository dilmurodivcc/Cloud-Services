import React from "react";

const alerts = [
  { label: "Active Alerts", value: "5" },
  { label: "SLA Breaches", value: "2" },
  { label: "Resolved (24h)", value: "10" },
  { label: "Acknowledged", value: "3" },
];

const AlertSummary = () => (
  <>
    <h3 className="font-bold text-[22px] leading-[127%] text-[#0d141c] my-[32px]">
      Alert Summary
    </h3>
    <div className="flex flex-wrap justify-between gap-4 mb-[32px]">
      {alerts.map((item, idx) => (
        <div
          key={idx}
          className="border border-[#cfdbe8] rounded-[8px] p-[24px] w-[220px] h-[112px] min-w-[158px] flex flex-col items-start gap-[10px]"
        >
          <span className="font-medium text-[16px] leading-[150%] text-[#0d141c]">
            {item.label}
          </span>
          <span className="font-bold text-[24px] leading-[125%] text-[#0d141c]">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </>
);

export default AlertSummary;
