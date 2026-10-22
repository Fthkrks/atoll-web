import { downloads } from "@/config/downloads";
import { content, type Locale } from "@/lib/content";
import { Icon } from "./icon";

export function DownloadButtons({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const c = content[locale].download;
  const windowsContent = <><Icon name="windows" /><span>{c.windows}{!downloads.windows.url && <small>{c.soon}</small>}</span>{downloads.windows.url && <Icon name="arrow" />}</>;
  const playContent = <><Icon name="play" /><span>{c.play}{!downloads.android.url && <small>{c.soon}</small>}</span></>;
  return <div className="download-group">
    <div className="download-buttons">
      {downloads.windows.url ? <a className="button button-primary" href={downloads.windows.url}>{windowsContent}</a> : <button className="button button-primary" type="button" disabled aria-label={`${c.windows} — ${c.soon}`}>{windowsContent}</button>}
      {!compact && (downloads.android.url ? <a className="button button-secondary" href={downloads.android.url}>{playContent}</a> : <button className="button button-secondary" type="button" disabled aria-label={c.playSoon}>{playContent}</button>)}
    </div>
    <p className="download-meta">{downloads.windows.version && <>{downloads.windows.version}<span aria-hidden="true"> · </span></>}{downloads.windows.size[locale]}<span aria-hidden="true"> · </span>{c.included}</p>
    {!compact && <p className="android-note">{c.closed}</p>}
  </div>;
}
