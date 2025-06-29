import React from "react";

interface Role {
  name: string;
  permissions: string;
}

interface RolesSectionProps {
  roles: Role[];
  onCreateNewRole?: () => void;
  onEditRole?: (role: Role) => void;
}

const RolesSection: React.FC<RolesSectionProps> = ({
  roles,
  onCreateNewRole,
  onEditRole,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-[22px] font-semibold mb-2">Roles</h2>
      <p className="  my-[22px]">
        Manage roles and permissions within the admin panel. Define new roles or
        modify existing ones to control access to <br /> different features and data.
      </p>
      <div className="bg-white border border-[#e5e8eb] rounded-lg overflow-hidden mb-4">
        <table className="min-w-full text-sm">
          <thead >
            <tr>
              <th className="px-[16px] py-[12px] text-left font-medium">
                Role Name
              </th>
              <th className="px-[16px] py-[12px] text-left font-medium ">
                Permissions
              </th>
              <th className="px-[16px] py-[12px] text-[#4a739c] text-left font-medium ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.name} className="border-t border-[#e5e8eb]">
                <td className="px-[16px] py-[25px] w-[38%] ">{role.name}</td>
                <td className="px-[16px] py-[25px] text-[#4a739c] w-[38%]">{role.permissions}</td>
                <td className="px-[16px] py-[25px] ">
                  <button
                    className="text-[#4a739c] cursor-pointer hover:text-[#3d5b7a] font-bold"
                    onClick={() => onEditRole?.(role)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="bg-[#0d80f2] text-[#f7fafc] font-bold px-4 py-2 rounded-[8px]  text-[14px] hover:bg-blue-700"
        onClick={onCreateNewRole}
      >
        Create New Role
      </button>
    </section>
  );
};

export default RolesSection;
