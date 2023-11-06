import { Dashboard } from "@/dev-ui/dashboard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="App">
      <div className="relative">
        <div className="grid grid-cols-12 gap-5">
          <section className="col-span-2 border">
            <nav>
              <Dashboard />
            </nav>
          </section>
          <div className="col-span-9 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
