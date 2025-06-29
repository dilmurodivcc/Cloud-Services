import React from "react";

interface SettingsTabsProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const SettingsTabs: React.FC<SettingsTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="flex space-x-6 " aria-label="Tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`cursor-pointer py-3 px-1 text-sm font-bold border-b-2 transition-colors duration-150 ${
              activeTab === idx
                ? "font-bold text-[14px] leading-[150%] border-b-[3px] border-[#e5e8eb] "
                : "border-transparent text-[#4a739c]  "
            }`}
            onClick={() => onTabChange(idx)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SettingsTabs;
