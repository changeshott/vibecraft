import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard";
import { getDashboardData } from "@/app/actions/analytics";

export const metadata = {
  title: "Analytics | Admin | VibeCraft",
  description: "View VibeCraft generation analytics and telemetry data.",
};

export default async function AnalyticsPage() {
  const data = await getDashboardData();
  
  if (!data) {
    return <div className="min-h-screen bg-[#050505] p-6 lg:p-8 flex items-center justify-center text-white">Error loading analytics data. Did you run the SQL migration?</div>;
  }

  return <AnalyticsDashboard data={data} />;
}
