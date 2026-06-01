---
title: Troubleshooting On Air
description: Solutions to common issues with Tweenly On Air — graphics not appearing, playback problems, and field editing.
---

## Graphics not appearing in the sidebar

**Symptom:** You created a graphic in the Editor, but it doesn't show in the On Air sidebar.

**Possible causes:**

1. **Not marked as Final.** Only graphics with the **Final** flag appear in On Air. Open the Editor, click the filename to open metadata, and enable the Final flag.

2. **Wrong workspace filter.** Check the company/workspace dropdown at the top of the sidebar. Select **ALL** or the correct workspace.

3. **Not saved.** Tweenly does not auto-save. Make sure the graphic has been saved (look for it in the Gallery).

<!-- *TODO: Doplnit — Martina:*

- *Existuje prodleva mezi označením jako Final a zobrazením v On Air (cache, sync interval)?*
- *Záleží na licenci? Zobrazují se grafiky z Free workspace v On Air?* -->

## Graphic loads but doesn't animate

**Symptom:** The graphic appears in the preview but playback doesn't start.

**Possible causes:**

1. **Init state is `hide-and-pause` or `pause`.** This is expected behavior — the graphic waits for a trigger. Click **IN** to start, then use **NEXT** to advance.

2. **No animations added.** The graphic has no animation blocks on the timeline. **NEXT** and **OUTRO** buttons are disabled in this case.

3. **Pause label at the beginning.** If there's a pause label at time 0, the graphic stops immediately. Use **NEXT** to continue past it.

## Editable fields not showing

**Symptom:** You expected text/image fields to be editable in On Air, but they appear as static.

**Cause:** The fields are not marked as editable in the Editor.

**Fix:** In the Editor, select the object → Right Sidebar → enable **isTextEditable** (text) or **isImageEditable** (images) → Save → re-mark as Final if needed.

## Preview not updating

**Symptom:** You changed a field value in standby, but the preview doesn't reflect the change.

**Possible causes:**

1. **Browser cache.** Try a hard refresh (`Ctrl + Shift + R` / `Cmd + Shift + R`).
2. **Graphic is in the Live column.** Fields can only be edited in **standby**. Once live, changes require loading a new instance in standby.

<!-- *TODO: Doplnit — Martina:*

- *Existují známé problémy s preview renderingem (font loading, image CORS)?*
- *Je potřeba specifické nastavení prohlížeče pro On Air preview?* -->

## Data source not refreshing

**Symptom:** A data-bound graphic shows stale data.

**Possible causes:**

1. **Auto-refresh not enabled.** In the Editor, open the Data Source settings and enable refresh with an interval.
2. **Data source URL unreachable.** Verify the JSON/XML URL is accessible from the On Air environment (check network, firewall, CORS).
3. **Refresh label not configured.** If using label-triggered refresh, ensure a **refresh** label exists on the timeline.

## Playback controls (NEXT, OUTRO) disabled

**Cause:** The graphic has no animations or no timeline labels.

**Fix:** In the Editor, add animations and/or labels to the timeline. Re-save and mark as Final.

## Connection issues

<!-- *TODO: Doplnit — Martina:*

- *Co se stane, když On Air ztratí spojení se serverem? Reconnect automaticky?*
- *Jak se chová live grafika při výpadku spojení — zůstane na outputu, nebo zmizí?*
- *Existuje indikátor stavu připojení v On Air UI?*
- *Jak řešit situaci, kdy dva operátoři ovládají stejnou session?* -->

## Performance issues

<!-- *TODO: Doplnit — Martina:*

- *Jaké jsou limity (max počet grafik v session, max velikost grafiky, max počet simultánních sessions)?*
- *Doporučený hardware/browser pro plynulý provoz?*
- *Známé performance bottlenecky (velké image sequences, příliš mnoho animací)?* -->

## Getting help

If your issue is not listed here, contact support at **[info@tweenly.io](mailto:info@tweenly.io)** with:
- A description of the problem
- Steps to reproduce
- Browser and OS version
- Screenshot of the issue (if applicable)
