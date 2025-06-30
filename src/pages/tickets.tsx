import React, { useState } from "react";

const tabs = ["All Tickets", "Open Tickets", "Closed Tickets"];

const tickets = [
  {
    id: "TKT-001",
    summary: "Issue with login",
    status: "Open",
    priority: "High",
    assignee: "Alex Turner",
    created: "2024-01-15",
    updated: "2024-01-16",
  },
  {
    id: "TKT-002",
    summary: "Slow application performance",
    status: "In Progress",
    priority: "Medium",
    assignee: "Olivia Bennett",
    created: "2024-01-11",
    updated: "2024-01-15",
  },
  {
    id: "TKT-003",
    summary: "Data synchronization error",
    status: "Closed",
    priority: "Low",
    assignee: "Ethan Carter",
    created: "2024-01-13",
    updated: "2024-01-14",
  },
  {
    id: "TKT-004",
    summary: "User interface bug",
    status: "Open",
    priority: "High",
    assignee: "Sophia Davis",
    created: "2024-01-12",
    updated: "2024-01-13",
  },
  {
    id: "TKT-005",
    summary: "API integration failure",
    status: "In Progress",
    priority: "Medium",
    assignee: "Liam Evans",
    created: "2024-01-11",
    updated: "2024-01-12",
  },
  {
    id: "TKT-006",
    summary: "Security vulnerability",
    status: "Closed",
    priority: "Low",
    assignee: "Ava Foster",
    created: "2024-01-10",
    updated: "2024-01-10",
  },
  {
    id: "TKT-007",
    summary: "Feature request",
    status: "Open",
    priority: "High",
    assignee: "Noah Green",
    created: "2024-01-09",
    updated: "2024-01-09",
  },
  {
    id: "TKT-008",
    summary: "Documentation update",
    status: "In Progress",
    priority: "Medium",
    assignee: "Isabella Harris",
    created: "2024-01-08",
    updated: "2024-01-08",
  },
  {
    id: "TKT-009",
    summary: "Performance optimization",
    status: "Closed",
    priority: "Low",
    assignee: "Jackson Ingram",
    created: "2024-01-07",
    updated: "2024-01-07",
  },
  {
    id: "TKT-010",
    summary: "Accessibility issue",
    status: "Open",
    priority: "High",
    assignee: "Mia Johnson",
    created: "2024-01-06",
    updated: "2024-01-06",
  },
];

const Tickets = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");

  const filteredTickets = tickets
    .filter((t) => {
      if (activeTab === 1) return t.status === "Open";
      if (activeTab === 2) return t.status === "Closed";
      return true;
    })
    .filter(
      (t) =>
        t.id.toLowerCase().includes(search.toLowerCase()) ||
        t.summary.toLowerCase().includes(search.toLowerCase()) ||
        t.assignee.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      <h1 className="text-[32px] font-bold mb-1">Tickets</h1>
      <p className="text-[#4a739c] mb-6">
        Manage and track all client-specific tickets
      </p>
      {/* Search */}
      <div className="bg-[#e8edf5] text-[#4a739c]  rounded-lg flex items-center px-4 py-3    mb-6 w-full ">
        <svg
          className="w-5 h-5 text-[#4a739c] mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="bg-transparent outline-none w-full text-[15px]"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#e5e8eb] mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`py-3 px-1 text-[14px] font-bold border-b-[3px] ${
              activeTab === idx
                ? "border-[#e5e8eb] text-[#0d141c]"
                : "border-transparent text-[#4a739c]"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Table */}
      <div className="bg-white border border-[#e5e8eb] rounded-lg overflow-x-auto mt-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left font-medium">Ticket ID</th>
              <th className="px-6 py-3 text-left font-medium">Summary</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Priority</th>
              <th className="px-6 py-3 text-left font-medium">Assignee</th>
              <th className="px-6 py-3 text-left font-medium">Created</th>
              <th className="px-6 py-3 text-left font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((t, i) => (
              <tr key={i} className="border-t border-[#e5e8eb]">
                <td className="px-6 py-4 text-[#0d141c]">{t.id}</td>
                <td className="px-6 py-4 text-[#4a739c]">{t.summary}</td>
                <td className="px-6 py-4">
                  <button className="bg-[#e8edf5]  rounded-[16px] px-4 py-0 w-[116px] h-[32px] min-w-[84px] max-w-[480px]">
                    {t.status}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-[#e8edf5]  rounded-[16px] px-4 py-0 w-[116px] h-[32px] min-w-[84px] max-w-[480px]">
                    {t.priority}
                  </button>
                </td>
                <td className="px-6 py-4 text-[#4a739c]">{t.assignee}</td>
                <td className="px-6 py-4 text-[#4a739c]">{t.created}</td>
                <td className="px-6 py-4 text-[#4a739c]">{t.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
