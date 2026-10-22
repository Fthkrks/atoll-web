import { PrivacyPage } from "@/components/privacy-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("tr", true);

export default function Privacy() {
  return <PrivacyPage locale="tr" />;
}
