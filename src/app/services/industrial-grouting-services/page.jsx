import ServiceLandingPage from "@/components/ServiceLandingPage";
import { getServiceMetadata, getServicePageData } from "@/lib/servicePages";

const slug = "industrial-grouting-services";

export const metadata = getServiceMetadata(slug);

export default function IndustrialGroutingServicesPage() {
  return <ServiceLandingPage service={getServicePageData(slug)} />;
}
