import { RootShell } from "@/components/site-shell";
import { sharedMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = sharedMetadata;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
