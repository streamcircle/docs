---
title: Graphics Export Options
description: How to export graphics from Tweenly for online or offline use.
---

:::note
**ZIP Package export is available only with the Unlimited plan.** In the **Free plan**, only Plain HTML export is supported.
:::

Graphics in Tweenly can be exported in two formats.

## How to export

1. Open the **More** menu in the top bar.
2. Select **Export Package** (ZIP) or **Export HTML**.
3. The file downloads to your computer.

## Plain HTML export

*Usage: testing, lightweight graphics without heavy assets.*

- Exports a single **HTML file** with references to assets stored in the Tweenly cloud.
- Recommended for simple graphics or testing purposes in environments with **stable internet access**.
- Produces a single HTML file with a small file size.

:::danger
Since **assets remain online**, graphics may not work properly without internet access.
:::

## ZIP Package export

*Usage: full, offline-ready export.*

- Exports a **self-contained ZIP package** that includes:
  - the HTML file
  - all images, image sequences, and fonts
  - required libraries
- Graphics run offline without internet connectivity.
- Recommended when working with **custom fonts**, **image sequences**, or any graphics with heavy assets.

## Choosing the right format

| Criteria | Plain HTML | ZIP Package |
|----------|-----------|-------------|
| **File size** | Small | Larger |
| **Offline playback** | No (requires internet) | Yes |
| **Image sequences** | Choppy (network-dependent) | Smooth |
| **Custom fonts** | May not load reliably | Included |
| **Production use** | Not recommended | Recommended |
| **License** | Free + Unlimited | Unlimited only |

## What's included in exports by plan

| Feature | Free export | Unlimited export |
|---------|-----------|-----------------|
| HTML file with graphics | Yes | Yes |
| Code trigger bodies | Removed (empty functions) | Included |
| `setText()` / `setImage()` API | Not available | Available |
| ZIP Package format | Not available | Available |

For plan details, see [Free vs Unlimited](/getting-started/free-vs-unlimited/).

## After exporting

- **For On Air playout:** You don't need to export — On Air loads graphics directly. See [From Design to Broadcast](/getting-started/design-to-broadcast/).
- **For playout system integration:** Load the exported HTML in an iframe and control via API. See [Playout Integration Guide](/integration/playout-integration/).
- **For API control reference:** See [API Control](/integration/api-control/).
