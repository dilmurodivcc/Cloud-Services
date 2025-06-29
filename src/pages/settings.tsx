import React, { useState } from "react";

const tabs = ["Roles", "Client Scope", "API Keys", "Preferences"];

const roles = [
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

const apiKeys = [
  { name: "Key 1", status: "Active" },
  { name: "Key 2", status: "Inactive" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold mb-2">Settings</h1>
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-6" aria-label="Tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`py-2 px-1 text-sm font-medium border-b-2 transition-colors duration-150 ${
                activeTab === idx
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Roles Tab */}
      {activeTab === 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Roles</h2>
          <p className="text-sm text-gray-600 mb-4">
            Manage roles and permissions within the admin panel. Define new
            roles or modify existing ones to control access to different
            features and data.
          </p>
          <div className="bg-white border rounded-lg overflow-hidden mb-4">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">
                    Role Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">
                    Permissions
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.name} className="border-t">
                    <td className="px-4 py-3">{role.name}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {role.permissions}
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-blue-600 hover:underline font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium text-sm hover:bg-blue-700">
            Create New Role
          </button>
        </section>
      )}

      {/* Client Scope Tab */}
      {activeTab === 1 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Client Scope</h2>
          <p className="text-sm text-gray-600 mb-4">
            Select the client scope for this admin panel instance. This setting
            is relevant for systems managing multiple clients.
          </p>
          <input
            type="text"
            className="w-full max-w-md border rounded px-3 py-2 text-sm"
            placeholder="Client scope..."
          />
        </section>
      )}

      {/* API Keys Tab */}
      {activeTab === 2 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">API Keys</h2>
          <p className="text-sm text-gray-600 mb-4">
            Manage API keys for accessing the system's API. Generate new keys or
            revoke existing ones.
          </p>
          <div className="bg-white border rounded-lg overflow-hidden mb-4">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">
                    Key Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiKeys.map((key) => (
                  <tr key={key.name} className="border-t">
                    <td className="px-4 py-3">{key.name}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          key.status === "Active"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {key.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {key.status === "Active" ? (
                        <button className="text-blue-600 hover:underline font-medium">
                          Revoke
                        </button>
                      ) : (
                        <button className="text-blue-600 hover:underline font-medium">
                          Activate
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium text-sm hover:bg-blue-700">
            Generate New Key
          </button>
        </section>
      )}

      {/* Preferences Tab */}
      {activeTab === 3 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Preferences</h2>
          <p className="text-sm text-gray-600 mb-4">
            Customize the admin panel's interface, including language and
            timezone settings.
          </p>
          <input
            type="text"
            className="w-full max-w-md border rounded px-3 py-2 text-sm mb-2"
            placeholder="Language..."
          />
          <input
            type="text"
            className="w-full max-w-md border rounded px-3 py-2 text-sm"
            placeholder="Timezone..."
          />
        </section>
      )}
    </div>
  );
};

export default Settings;
