const certs = [
  {
    service: "Service A",
    domain: "service-a.example.com",
    expiry: "2024-12-31",
    days: 120,
    status: "Valid",
  },
  {
    service: "Service B",
    domain: "service-b.example.com",
    expiry: "2024-11-15",
    days: 85,
    status: "Valid",
  },
  {
    service: "Service C",
    domain: "service-c.example.com",
    expiry: "2024-10-01",
    days: 50,
    status: "Expiring Soon",
  },
];

const statusColor = (status: string) =>
  status === "Valid"
    ? "bg-green-100 text-green-700"
    : "bg-yellow-100 text-yellow-700";

const SSLCertificateExpiryTable = () => (
  <div className="mb-8">
    <h3 className="font-semibold text-lg mb-3">SSL Certificate Expiry</h3>
    <div className="overflow-x-auto border border-[#e5e8eb] rounded-[16px]">
      <table className="min-w-full bg-white   rounded-[18px]">
        <thead>
          <tr className="text-left  text-gray-500">
            <th className="p-3">Service</th>
            <th className="py-3">Domain</th>
            <th className="py-3">Expiry Date</th>
            <th className="py-3">Days Remaining</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {certs.map((c, i) => (
            <tr
              key={i}
              className="border-t border-[#e5e8eb]
 font-normal text-[14px] leading-[150%] "
            >
              <td
                className="py-[25px] px-[16px] text-[#0d141c]
"
              >
                {c.service}
              </td>
              <td
                className=" w-[200px] text-[#4a739c]
"
              >
                {c.domain}
              </td>
              <td
                className=" text-[#4a739c]
"
              >
                {c.expiry}
              </td>
              <td
                className=" text-[#4a739c]
"
              >
                {c.days}
              </td>
              <td className="">
                <button
                  className="rounded-[8px] px-4 py-0 w-[149px] h-[32px] min-w-[84px] max-w-[480px] bg-[#e8edf5]

"
                >
                  {c.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
export default SSLCertificateExpiryTable;
