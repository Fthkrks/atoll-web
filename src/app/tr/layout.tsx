import { RootShell } from "@/components/site-shell";
import { sharedMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = sharedMetadata;

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="tr">{children}</RootShell>;
}
