import React from "react";

interface ClientScopeSectionProps {
  value?: string;
  onChange?: (value: string) => void;
}

const ClientScopeSection: React.FC<ClientScopeSectionProps> = ({
  value,
  onChange,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-[22px]  font-semibold ">Client Scope</h2>
      <p className=" my-[22px]">
        Select the client scope for this admin panel instance. This setting is
        relevant for systems managing multiple clients.
      </p>
      <input
        type="text"
        className="w-full max-w-md border border-[#cfdbe8] rounded-[8px] px-3 py-2 text-sm"
        // placeholder="Client scope..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </section>
  );
};

export default ClientScopeSection;
