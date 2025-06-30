import React from "react";
import ServicePerformanceTable from "../components/services/ServicePerformanceTable";
import ServiceMetrics from "../components/services/ServiceMetrics";

const servicePerformance = [
  {
    name: "Authentication Service",
    uptime: 99,
    latency: "25ms",
    errorRate: "0.05%",
    incidents: 2,
  },
  {
    name: "Database Service",
    uptime: 99,
    latency: "10ms",
    errorRate: "0.01%",
    incidents: 0,
  },
  {
    name: "API Gateway",
    uptime: 99,
    latency: "15ms",
    errorRate: "0.02%",
    incidents: 1,
  },
  {
    name: "User Management",
    uptime: 99,
    latency: "20ms",
    errorRate: "0.03%",
    incidents: 1,
  },
  {
    name: "Reporting Service",
    uptime: 99,
    latency: "30ms",
    errorRate: "0.04%",
    incidents: 3,
  },
];

const ServicesOverview = () => {
  return (
    <div className="min-h-screen  ">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[32px] font-bold mt-8 mb-2">Services Overview</h1>
        <p className="text-[#4a739c] mb-6">
          Detailed performance metrics for each service within the system.
        </p>
        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#e5e8eb] mb-8">
          <button className="py-3 px-1 text-[14px] font-bold border-b-[3px] border-[#e5e8eb] text-[#0d141c]">
            All Services
          </button>
          <button className="py-3 px-1 text-[14px] font-bold text-[#4a739c]">
            Active Services
          </button>
          <button className="py-3 px-1 text-[14px] font-bold text-[#4a739c]">
            Inactive Services
          </button>
        </div>

        {/* Service Performance Table */}
        <ServicePerformanceTable data={servicePerformance} />

        {/* Service Metrics Section */}
        <ServiceMetrics />
      </div>
    </div>
  );
};

export default ServicesOverview;
