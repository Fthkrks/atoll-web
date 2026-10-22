import { PrivacyPage } from "@/components/privacy-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", true);

export default function Privacy() {
  return <PrivacyPage locale="en" />;
}
