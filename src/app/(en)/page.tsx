import { Landing } from "@/components/landing";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en");

export default function Home() {
  return <Landing locale="en" />;
}
