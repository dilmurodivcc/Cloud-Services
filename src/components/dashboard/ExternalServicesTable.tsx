import React from "react";

const services = [
  { name: "Payment Gateway", status: "Online", details: "Operational" },
  { name: "DNS Provider", status: "Online", details: "Operational" },
  { name: "Mail Provider", status: "Online", details: "Operational" },
  { name: "SSL Certificate", status: "Online", details: "Expires in 30 days" },
  { name: "API Dependency A", status: "Online", details: "Operational" },
];

const ExternalServicesTable = () => (
  <>
    <div className="font-bold text-[22px] leading-[127%] text-[#0d141c] my-[32px]">
      External Services
    </div>
    <div className="border border-[#cfdbe8] rounded-[8px] ">
      <table className="w-full text-sm">
        <thead className="p-[24px] border-b border-[#cfdbe8]">
          <tr className="text-gray-500">
            <th className="text-left py-[12px] px-[16px]">Service</th>
            <th className="text-left py-[12px] px-[16px]">Status</th>
            <th className="text-left py-[12px] px-[16px]">Details</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={i} className="border-t border-[#cfdbe8]">
              <td className="py-[24px] px-[16px]">{s.name}</td>
              <td className="py-[24px] px-[16px]">
                <button
                  className="rounded-[8px] px-[16px] w-[188px] h-[32px] min-w-[84px] max-w-[480px] bg-[#e8edf5]
"
                >
                  {s.status}
                </button>
              </td>
              <td className="py-1">{s.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default ExternalServicesTable;
