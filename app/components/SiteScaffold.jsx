import Footer from "./Footer";
import LeadCapture from "./LeadCapture";
import Navbar from "./Navbar";

export default function SiteScaffold({ children, showLeadCapture = true }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8faf9]">
      <Navbar />
      <main className="w-full flex-1 pt-[92px]">{children}</main>
      {showLeadCapture ? <LeadCapture /> : null}
      <Footer />
      <div className="pointer-events-none fixed inset-0 z-[999] border-[32px] border-[#04241b]/[0.02]" />
    </div>
  );
}
