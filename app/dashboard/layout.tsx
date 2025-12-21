import DashboardLayout from '../components/DashboardLayout';

export default function DashboardPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}