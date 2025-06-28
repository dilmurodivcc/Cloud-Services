import ExternalServicesHeader from "@/components/services/ExternalServicesHeader";
import HealthCheckDashboards from "@/components/services/HealthCheckDashboards";
import SSLCertificateExpiryTable from "@/components/services/SSLCertificateExpiryTable";
import UptimeTrends from "@/components/services/UptimeTrends";

const Services = () => {
  return (
    <div className="container py-8">
      <ExternalServicesHeader />
      <HealthCheckDashboards />
      <SSLCertificateExpiryTable />
      <UptimeTrends />
    </div>
  );
};

export default Services;
