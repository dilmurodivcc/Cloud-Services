import React, { useState } from "react";
import SettingsTabs from "../components/settings/SettingsTabs";
import RolesSection from "../components/settings/RolesSection";
import ClientScopeSection from "../components/settings/ClientScopeSection";
import ApiKeysSection from "../components/settings/ApiKeysSection";
import PreferencesSection from "../components/settings/PreferencesSection";

const tabs = ["Roles", "Client Scope", "API Keys", "Preferences"];

interface Role {
  name: string;
  permissions: string;
}

interface ApiKey {
  name: string;
  status: "Active" | "Inactive";
}

const roles: Role[] = [
  {
    name: "Administrator",
    permissions: "Full access to all features and data",
  },
  {
    name: "Manager",
    permissions: "Access to reports, customers, and products",
  },
  {
    name: "Support",
    permissions: "Access to customer data and basic product information",
  },
];

const apiKeys: ApiKey[] = [
  { name: "Key 1", status: "Active" },
  { name: "Key 2", status: "Inactive" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [clientScope, setClientScope] = useState("");
  const [language, setLanguage] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleCreateNewRole = () => {
    console.log("Create new role clicked");
  };

  const handleEditRole = (role: Role) => {
    console.log("Edit role:", role);
  };

  const handleGenerateNewKey = () => {
    console.log("Generate new key clicked");
  };

  const handleRevokeKey = (key: ApiKey) => {
    console.log("Revoke key:", key);
  };

  const handleActivateKey = (key: ApiKey) => {
    console.log("Activate key:", key);
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold my-[32px]">Settings</h1>

      <SettingsTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === 0 && (
        <RolesSection
          roles={roles}
          onCreateNewRole={handleCreateNewRole}
          onEditRole={handleEditRole}
        />
      )}

      {activeTab === 1 && (
        <ClientScopeSection value={clientScope} onChange={setClientScope} />
      )}

      {activeTab === 2 && (
        <ApiKeysSection
          apiKeys={apiKeys}
          onGenerateNewKey={handleGenerateNewKey}
          onRevokeKey={handleRevokeKey}
          onActivateKey={handleActivateKey}
        />
      )}

      {activeTab === 3 && (
        <PreferencesSection
          language={language}
          timezone={timezone}
          onLanguageChange={setLanguage}
          onTimezoneChange={setTimezone}
        />
      )}
    </div>
  );
};

export default Settings;
