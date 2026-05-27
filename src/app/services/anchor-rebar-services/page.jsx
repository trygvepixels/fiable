import ServiceLandingPage from "@/components/ServiceLandingPage";
import { getServiceMetadata, getServicePageData } from "@/lib/servicePages";

const slug = "anchor-rebar-services";

export const metadata = getServiceMetadata(slug);

export default function AnchorRebarServicesPage() {
  return <ServiceLandingPage service={getServicePageData(slug)} />;
}
