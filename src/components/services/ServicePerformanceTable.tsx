import React from "react";

interface ServicePerformanceItem {
  name: string;
  uptime: number;
  latency: string;
  errorRate: string;
  incidents: number;
}

interface ServicePerformanceTableProps {
  data: ServicePerformanceItem[];
}

const ServicePerformanceTable: React.FC<ServicePerformanceTableProps> = ({
  data,
}) => (
  <div className="mb-10">
    <h2 className="text-[22px] font-semibold mb-4">Service Performance</h2>
    <div className="border border-[#e5e8eb] rounded-lg overflow-hidden bg-white">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left font-medium">Service Name</th>
            <th className="px-6 py-3 text-left font-medium">Uptime</th>
            <th className="px-6 py-3 text-left font-medium">Latency</th>
            <th className="px-6 py-3 text-left font-medium">Error Rate</th>
            <th className="px-6 py-3 text-left font-medium">Incidents</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, i) => (
            <tr key={i} className="border-t border-[#e5e8eb]">
              <td className="px-6 py-4 w-[30%]">{s.name}</td>
              <td className="px-6 py-4 w-[20%]">
                <div className="flex items-center gap-2">
                  <div className="bg-[#e8edf5] h-2 w-24 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0d80f2] h-2 rounded-full"
                      style={{ width: `${s.uptime}%` }}
                    ></div>
                  </div>
                  <span className="font-bold">{s.uptime}</span>
                </div>
              </td>
              <td className="px-6 py-4 w-[15%]">{s.latency}</td>
              <td className="px-6 py-4 w-[15%]">{s.errorRate}</td>
              <td className="px-6 py-4 w-[10%]">{s.incidents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ServicePerformanceTable;
