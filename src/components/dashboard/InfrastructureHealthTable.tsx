import React from "react";

const nodes = [
  { name: "Node 1", status: "Online", cpu: "20%", ram: "63%", disk: "75%" },
  { name: "Node 2", status: "Online", cpu: "21%", ram: "55%", disk: "60%" },
  { name: "Node 3", status: "Online", cpu: "15%", ram: "60%", disk: "60%" },
];

const InfrastructureHealthTable = () => (
  <>
    <div className="font-bold text-[22px] leading-[127%] text-[#0d141c] my-[32px]">
      Infrastructure Health
    </div>
    <div className="border border-[#cfdbe8] rounded-[8px] ">
    <table className="w-full text-sm">
      <thead>
        <tr className="text-[#0d141c] ">
          <th className="text-left py-[12px] px-[16px]">Node/VM</th>
          <th className="text-left py-[12px] px-[16px]">Status</th>
          <th className="text-left py-[12px] px-[16px]">CPU</th>
          <th className="text-left py-[12px] px-[16px]">RAM</th>
          <th className="text-left py-[12px] px-[16px]">Disk</th>
        </tr>
      </thead>
      <tbody className="">
        {nodes.map((n, i) => (
          <tr key={i} className="border-t border-[#cfdbe8]">
            <td className="py-[24px] px-[16px]">{n.name}</td>
            <td className="py-[24px] px-[16px] w-[158px]">
              <button className="rounded-[8px] py-[6px] px-[42px] min-w-[84px] max-w-[480px] bg-[#e8edf5]">
                {n.status}
              </button>
            </td>
            <td className="py-[24px] px-[16px] text-[#4a739c]">{n.cpu}</td>
            <td className="py-[24px] px-[16px] text-[#4a739c]">{n.ram}</td>
            <td className="py-[24px] px-[16px] text-[#4a739c]">{n.disk}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </>
);

export default InfrastructureHealthTable;
