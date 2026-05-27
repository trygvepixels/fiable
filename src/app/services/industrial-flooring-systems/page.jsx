import ServiceLandingPage from "@/components/ServiceLandingPage";
import { getServiceMetadata, getServicePageData } from "@/lib/servicePages";

const slug = "industrial-flooring-systems";

export const metadata = getServiceMetadata(slug);

export default function IndustrialFlooringSystemsPage() {
  return <ServiceLandingPage service={getServicePageData(slug)} />;
}
