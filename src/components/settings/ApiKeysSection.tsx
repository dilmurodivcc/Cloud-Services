import React from "react";

interface ApiKey {
  name: string;
  status: "Active" | "Inactive";
}

interface ApiKeysSectionProps {
  apiKeys: ApiKey[];
  onGenerateNewKey?: () => void;
  onRevokeKey?: (key: ApiKey) => void;
  onActivateKey?: (key: ApiKey) => void;
}

const ApiKeysSection: React.FC<ApiKeysSectionProps> = ({
  apiKeys,
  onGenerateNewKey,
  onRevokeKey,
  onActivateKey,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-[22px] font-semibold mb-2">API Keys</h2>
      <p className=" my-[22px]">
        Manage API keys for accessing the system's API. Generate new keys or
        revoke existing ones.
      </p>
      <div className="bg-white border border-[#e5e8eb] rounded-lg overflow-hidden mb-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="px-[16px] py-[12px] text-left font-medium">
                Key Name
              </th>
              <th className="px-[16px] py-[12px] text-left font-medium ">
                Status
              </th>
              <th className="px-[16px] py-[12px] text-left font-medium text-[#4a739c]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((key) => (
              <tr key={key.name} className="border-t border-[#e5e8eb]">
                <td className="px-[16px] py-[25px] w-[45%]">{key.name}</td>
                <td className="px-[16px] py-[25px] w-[27%]">
                  <button
                    className="rounded-[8px] px-4 py-0 w-[221px] h-[32px] min-w-[84px] max-w-[480px] bg-[#e8edf5]"
                  >
                    {key.status}
                  </button>
                </td>
                <td className="px-4 py-3">
                  {key.status === "Active" ? (
                    <button
                      className="text-[#4a739c]  font-bold"
                      onClick={() => onRevokeKey?.(key)}
                    >
                      Revoke
                    </button>
                  ) : (
                    <button
                      className="text-[#4a739c]  font-bold"
                      onClick={() => onActivateKey?.(key)}
                    >
                      Activate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="bg-[#0d80f2] text-[#f7fafc] font-bold px-4 py-2 rounded-[8px]  text-[14px] hover:bg-blue-700"
        onClick={onGenerateNewKey}
      >
        Generate New Key
      </button>
    </section>
  );
};

export default ApiKeysSection;
