import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SystemHealthCards from "@/components/dashboard/SystemHealthCards";
import SystemStatsCards from "@/components/dashboard/SystemStatsCards";
import ExternalServicesTable from "@/components/dashboard/ExternalServicesTable";
import InfrastructureHealthTable from "@/components/dashboard/InfrastructureHealthTable";
import ClusterStatsCards from "@/components/dashboard/ClusterStatsCards";
import AlertSummary from "@/components/dashboard/AlertSummary";
import TicketsSummary from "@/components/dashboard/TicketsSummary";

export default function Home() {
  return (
    <div className="container mt-[120px] px-8">
      <DashboardHeader />
      <SystemHealthCards />
      <SystemStatsCards />
      <ExternalServicesTable />
      <InfrastructureHealthTable />
      <ClusterStatsCards />
      <AlertSummary />
      <TicketsSummary />
    </div>
  );
}
