type IconName = "offline" | "shield" | "document" | "scan" | "globe" | "text" | "windows" | "play" | "arrow" | "check";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    offline: <><path d="M4 9a13 13 0 0 1 16 0M7 12.5a8 8 0 0 1 10 0M10 16a3 3 0 0 1 4 0" /><path d="m3 3 18 18" /><circle cx="12" cy="20" r=".5" /></>,
    shield: <><path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
    document: <><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" /><path d="M14 3v5h5M9 12h6M9 16h6" /></>,
    scan: <><path d="M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m8 0h4a1 1 0 0 0 1-1v-4M3 12h18M8 7h8M8 17h8" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 7h14M5 17h14" /></>,
    text: <><path d="M3 5h12M9 3v2m-4 0c0 6 4 9 8 11M13 5c0 6-4 9-8 11m10 5 4-11 4 11m-6.5-4h5" /></>,
    windows: <path d="m3 5 8-1v7H3V5Zm10-1.3L22 2v9h-9V3.7ZM3 13h8v7l-8-1v-6Zm10 0h9v9l-9-1.7V13Z" fill="currentColor" stroke="none" />,
    play: <path d="m5 3 15 9-15 9V3Z" />,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name as IconName]}</svg>;
}
