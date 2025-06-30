import React from "react";

const ServiceMetrics: React.FC = () => (
  <>
    <h2 className="text-[22px] font-semibold mb-4">Service Metrics</h2>
    <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Uptime Trend Card */}
      <div className="bg-white border border-[#e5e8eb] rounded-lg p-6 flex flex-col">
        <div className="font-bold text-[22px] mb-2">Uptime Trend</div>
        <div className="text-[32px] font-bold">99.97%</div>
        <div className="text-[#4a739c] mb-2">
          Last 30 Days <span className="text-green-600 font-bold">+0.02%</span>
        </div>
        <div className="flex-1 flex items-end">
          {/* Placeholder for chart */}
          <div className="w-full h-24 bg-[#f5f8fa] rounded"></div>
        </div>
        <div className="flex justify-between text-xs text-[#4a739c] mt-2">
          <span>Day 1</span>
          <span>Day 5</span>
          <span>Day 10</span>
          <span>Day 15</span>
          <span>Day 20</span>
          <span>Day 25</span>
          <span>Day 30</span>
        </div>
      </div>
      {/* Latency Distribution Card */}
      <div className="bg-white border border-[#e5e8eb] rounded-lg p-6 flex flex-col">
        <div className="font-bold text-[22px] mb-2">Latency Distribution</div>
        <div className="text-[32px] font-bold">18ms</div>
        <div className="text-[#4a739c] mb-2">
          Last 30 Days <span className="text-red-600 font-bold">-2ms</span>
        </div>
        <div className="flex-1 flex items-end gap-2">
          {/* Placeholder for bar chart */}
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="w-8 h-12 bg-[#e8edf5] rounded"></div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-[#4a739c] mt-2">
          <span>
            0-1
            <br />
            0ms
          </span>
          <span>
            10-2
            <br />
            0ms
          </span>
          <span>
            20-3
            <br />
            0ms
          </span>
          <span>
            40-5
            <br />
            0ms
          </span>
          <span>
            50+
            <br />
            ms
          </span>
        </div>
      </div>
    </div>
    {/* Error Rate by Service Card */}
    <div className="bg-white border border-[#e5e8eb] rounded-lg p-6">
      <div className="font-bold text-[22px] mb-2">Error Rate by Service</div>
      <div className="text-[32px] font-bold">0.03%</div>
      <div className="text-[#4a739c] mb-2">
        Last 30 Days <span className="text-red-600 font-bold">-0.01%</span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {[
          { name: "Auth", value: 30 },
          { name: "DB", value: 24 },
          { name: "API", value: 10 },
          { name: "Users", value: 8 },
          { name: "Reports", value: 5 },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-16 text-[#4a739c]">{s.name}</span>
            <div className="flex-1 h-2 bg-[#e8edf5] rounded">
              <div
                className="h-2 bg-[#0d80f2] rounded"
                style={{ width: `${s.value * 2}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default ServiceMetrics;
