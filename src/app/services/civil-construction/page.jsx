import ServiceLandingPage from "@/components/ServiceLandingPage";
import { getServiceMetadata, getServicePageData } from "@/lib/servicePages";

const slug = "civil-construction";

export const metadata = getServiceMetadata(slug);

export default function CivilConstructionPage() {
  return <ServiceLandingPage service={getServicePageData(slug)} />;
}
