---
title: Playout Integration Guide
description: Practical guide to integrating Tweenly graphics into playout systems via iframe and API.
---

This guide covers the practical steps for embedding and controlling Tweenly graphics in a playout or automation system. For the API method reference, see [API Control](/integration/api-control/).

:::note
API control in exported graphics requires the **Unlimited plan**.
:::

## How it works

Tweenly graphics are standard HTML files. A playout system loads the graphic in a browser or iframe, then uses JavaScript to control it:

1. **Load** the exported HTML in an iframe or browser instance.
2. **Discover** available editable fields from HTML meta tags.
3. **Set values** using the `tweenly` JavaScript API.
4. **Control playback** — play, pause, next, outro.

## Iframe setup

### Basic embedding

```html
<iframe
  id="graphic-frame"
  src="path/to/exported-graphic/index.html"
  width="1920"
  height="1080"
  frameborder="0"
  scrolling="no"
  style="overflow: hidden; background: transparent;"
></iframe>
```

### Transparent background

Tweenly graphics render with a transparent background by default. To composite them over video:

- Set the iframe background to `transparent`.
- In the playout system, configure the HTML renderer for alpha channel / chroma key, depending on your setup.

### Resolution and scaling

Exported graphics have a fixed resolution set in the Editor (default: 1920x1080). Match the iframe dimensions to the graphic's canvas size.

To get the exact resolution from the exported file, parse the meta tags:

```javascript
const frame = document.getElementById("graphic-frame");
const doc = frame.contentDocument || frame.contentWindow.document;

const width = doc.querySelector('meta[name="tweenly-width"]')?.content;
const height = doc.querySelector('meta[name="tweenly-height"]')?.content;
```

<!-- *TODO: Doplnit — Martina, ověřit v kódu:*

- *Jaký je přesný název meta tagů pro width/height? (`tweenly-width`? `canvas-width`? jiný?)*
- *Jaký je meta tag pro frame rate?*
- *Jaký je formát meta tagu pro editable fields?* -->

## Discovering editable fields

Exported graphics store field information in HTML `<meta>` tags. Parse them to discover what can be controlled:

```javascript
const frame = document.getElementById("graphic-frame");
const doc = frame.contentDocument || frame.contentWindow.document;

// Get all editable fields
const fieldsMeta = doc.querySelector('meta[name="tweenly-fields"]');
if (fieldsMeta) {
  const fields = JSON.parse(fieldsMeta.content);
  // fields = [{name: "headline", type: "text", value: "..."}, ...]
}
```

<!-- *TODO: Doplnit — Martina, ověřit:*

- *Přesný formát JSON pole v meta tagu — jaké properties má každý field objekt?*
- *Rozlišují se text vs image fields v meta datech, nebo jen typem?* -->

## Setting values

After the graphic loads, set field values before starting playback:

```javascript
const tw = frame.contentWindow;

// Wait for the graphic to initialize
frame.onload = function() {
  // Set text fields
  tw.tweenly.setText("headline", "Breaking News: Match Result");
  tw.tweenly.setText("score-home", "3");
  tw.tweenly.setText("score-away", "1");

  // Set image fields
  tw.tweenly.setImage("team-logo", "https://example.com/logos/team-a.png");

  // Start playback
  tw.tweenly.playAnimation();
};
```

:::caution
Always set values **before** calling `playAnimation()`. The API sets values that are applied before the first frame renders.
:::

## Controlling playback

### Standard commands

```javascript
const tw = frame.contentWindow;

tw.tweenly.playAnimation();       // Play from beginning
tw.tweenly.continueAnimation();   // Resume after pause label
tw.tweenly.next();                // Advance to next label
tw.tweenly.outro();               // Jump to outro and play exit
tw.tweenly.pauseAnimation();      // Pause at current position
tw.tweenly.stopAnimation();       // Stop and reset to 0
```

### Typical playout sequence

```javascript
// 1. Set content
tw.tweenly.setText("name", "John Smith");
tw.tweenly.setText("title", "Senior Reporter");

// 2. Play intro
tw.tweenly.playAnimation();
// Graphic plays intro, then pauses at "pause" label

// 3. When ready to remove — play outro
tw.tweenly.outro();
// Graphic plays outro animation and exits
```

### Working with labels

If your graphic has labeled sections:

```javascript
// Jump to a specific label
tw.tweenly.seekAnimationLabel("section-2");

// Disable all pause labels (play straight through)
tw.tweenly.disableAnimationPauseLabels();

// Disable jump/loop labels
tw.tweenly.disableAnimationJumpLabels();
```

## Advanced: Direct GSAP timeline access

For scenarios requiring frame-precise control:

```javascript
const tl = frame.contentWindow.masterTimeline;

tl.seek(2.5);                    // Jump to 2.5 seconds
tl.timeScale(0.5);               // Half speed
console.log(tl.duration());      // Get total duration
console.log(tl.progress());      // Get progress (0-1)
```

:::caution
Direct timeline manipulation bypasses Tweenly's label and event logic. Use `tweenly.*` methods for standard control.
:::

## Integration with specific playout systems

### CasparCG

<!-- *TODO: Doplnit — Martina/Kristian:*

- *CasparCG má HTML producer — jak přesně se Tweenly grafika nasadí? Stačí nahrát do media folder, nebo je potřeba speciální postup?*
- *Jak se volá `tweenly.setText()` z AMCP příkazů? Přes `CALL` s custom JavaScript?*
- *Jaký je doporučený postup pro update obsahu za běhu?*
- *Existují ukázkové AMCP příkazy pro typický workflow (PLAY, UPDATE, STOP)?* -->

### Generic HTML playout (Viz, XPression, other)

<!-- *TODO: Doplnit — Martina/Kristian:*

- *Existují ověřené integrace s jinými playout systémy?*
- *Jsou nějaké known issues (CORS, font loading, cross-origin iframe)?*
- *Podporuje Tweenly export pro specifické playout formáty, nebo je vždy generic HTML?* -->

### Browser-based / OBS

For browser-based setups (OBS Browser Source, vMix Web Browser Input):

1. Export the graphic as a **ZIP Package**.
2. Unzip and host the files on a local web server (e.g., `http://localhost:8080/graphic/index.html`).
3. Add the URL as a Browser Source in OBS / vMix.
4. Set the resolution to match the graphic's canvas size.

<!-- *TODO: Doplnit:*

- *Funguje přímé otevření HTML souboru (file:// protokol), nebo je potřeba web server?*
- *Jak se z OBS/vMix volají API příkazy (setText, play)? Je to vůbec možné bez custom pluginu?*
- *Existuje doporučený workflow pro OBS + Tweenly?* -->

## Troubleshooting integration

| Issue | Cause | Solution |
|-------|-------|----------|
| `tweenly` object not found | Graphic not fully loaded | Wait for `iframe.onload` before calling API methods. |
| Fields not updating | Field not marked as editable | Enable **isTextEditable** / **isImageEditable** in the Editor. |
| Graphic not transparent | Playout renderer doesn't support alpha | Configure chroma key or use a renderer with HTML alpha support. |
| Fonts not loading | ZIP not fully extracted, or path issue | Use ZIP Package export and ensure all files are in the same directory. |
| Animation doesn't start | Init state is `hide-and-pause` | Call `tweenly.playAnimation()` to trigger. This is expected behavior. |

## TL;DR

- Tweenly graphics are HTML files loaded in an iframe. Control them via the `tweenly` JavaScript API.
- Set field values **before** calling `playAnimation()`.
- Standard flow: `setText()` / `setImage()` → `playAnimation()` → `next()` / `outro()`.
- Parse `<meta>` tags to discover editable fields programmatically.
- Use ZIP Package export for production — it works offline and includes all assets.
- Match iframe dimensions to the graphic's canvas resolution.
