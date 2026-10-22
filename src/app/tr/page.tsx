import { Landing } from "@/components/landing";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("tr");

export default function Home() {
  return <Landing locale="tr" />;
}
