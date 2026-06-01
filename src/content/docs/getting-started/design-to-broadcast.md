---
title: From Design to Broadcast
description: End-to-end walkthrough — create a graphic in the Editor, export it, and use it in your broadcast workflow.
---

This guide walks you through the complete Tweenly workflow — from creating a graphic to using it in broadcast. It connects all the pieces documented in separate sections into one continuous path.

Tweenly supports multiple playout scenarios. Choose the path that matches your setup:

- **Path A** — Export and load into your playout system (most common)
- **Path B** — Use Tweenly On Air as your playout interface
- **Path C** — Control via API from an automation system

All three paths share the same first three steps.

---

## Step 1: Design your graphic

Open the [Editor](/user-guide/editor-overview/) and build your graphic layout.

1. Add objects from the **Left Sidebar** — rectangles, text, images.
2. Arrange and style them on the **Canvas** using the **Right Sidebar** properties.
3. Add [animations](/user-guide/animations-timeline/) — fade, slide, scale, reveal — and adjust timing on the **Timeline**.

Set the correct **resolution** and **frame rate** in [Canvas settings](/user-guide/canvas/) before you start. Frame rate cannot be changed later.

:::tip
If you're new to the Editor, start with [Create Your First Graphic](/getting-started/create-your-first-graphics/) for a step-by-step introduction.
:::

## Step 2: Prepare for broadcast

Depending on your playout scenario, configure the graphic for the level of control you need.

### Add timeline structure

Set up how the graphic behaves during playout:

1. Add animations for **intro** (how the graphic appears) and **outro** (how it exits).
2. Set the **Intro end** and **Outro start** markers in the [Timeline settings](/user-guide/animations-timeline/).
3. Add **pause** labels where the graphic should wait for a command to continue (e.g., between intro and outro).
4. Set the **Init state**:
   - `play` — graphic starts animating immediately when loaded.
   - `pause` — graphic is visible but paused at frame 0.
   - `hide-and-pause` — graphic is invisible until triggered (recommended for playout systems).

### Mark fields as editable (optional)

If text or images need to change at playout time (player names, scores, logos):

1. Select the object on the Canvas.
2. In the **Right Sidebar**, enable **isTextEditable** (for text) or **isImageEditable** (for images).

These fields can then be updated via [On Air](/on-air/overview/), the [API](/integration/api-control/), or any system that controls the exported HTML.

### Connect data sources (optional)

If your graphic displays live data (scores, standings, weather):

1. Create a [Data Source](/main-features/data-source-api-control/) in the Left Sidebar.
2. Point it to your JSON or XML feed URL.
3. Select the attributes you need and bind them to text or image objects.
4. Enable **auto-refresh** at the desired interval.

## Step 3: Save your graphic

1. Click **Save** in the top bar. Fill in title, description, tags, and workspace.
2. The graphic is now stored in the [Gallery](/user-guide/gallery-overview/).

If you plan to use On Air (Path B), also enable the **Final** flag:

1. Click the filename to open the metadata form.
2. Enable the **Final** flag.

:::caution
Only graphics marked as **Final** appear in On Air. For Path A and C (export-based), the Final flag is not required.
:::

## Step 4: Export

Export your graphic for use outside the Editor.

1. Open the **More** menu in the top bar.
2. Choose your export format:

| Format | Best for | License |
|--------|----------|---------|
| **Export Package** (ZIP) | Production playout — includes all assets, works offline. **Recommended.** | Unlimited |
| **Export HTML** | Quick testing — lightweight, assets stay online. | Free + Unlimited |

:::tip
Always use **ZIP Package** for production broadcast. It guarantees smooth playback and doesn't depend on internet connectivity.
:::

For full details on export formats, see [Export Options](/getting-started/export-options/).

---

## Step 5: Use in broadcast

### Path A: Export into your playout system

This is the most common workflow. You export the graphic and load it into your existing playout or CG system.

1. **Export** the graphic as a ZIP Package.
2. **Unzip** the package to a location accessible by your playout system.
3. **Load** the HTML file in your playout system's HTML/web renderer.
4. **Control playback** from the playout system using its native commands.

The exported graphic is a self-contained HTML page. Most modern playout systems support HTML graphics natively — the graphic runs its timeline automatically based on the Init state and labels you configured.

<!-- *TODO: Doplnit — Martina/Kristian, konkrétní příklady pro jednotlivé playout systémy:*

- *CasparCG: Kam se uloží soubory? Jak se přidá jako template? Jaký AMCP příkaz se použije (PLAY, ADD, LOAD)?*
- *Viz/XPression: Podporují HTML import? Jaký je postup?*
- *Další playout systémy, se kterými máte zkušenosti?* -->

:::note
If your playout system supports JavaScript execution in the HTML renderer, you can also use the Tweenly API to control the graphic programmatically. See Path C below.
:::

### Path B: Use Tweenly On Air

[On Air](/on-air/overview/) is Tweenly's built-in live control interface. No export needed — On Air loads graphics directly from the Tweenly backend.

1. **Mark the graphic as Final** in the Editor (Step 3 above).
2. Open **On Air** and log in.
3. **Drag** the graphic from the sidebar into a session's **standby** slot.
4. **Edit** text and image fields as needed (player names, scores, logos).
5. **Preview** the graphic to verify appearance and animation.
6. Click **IN** to send the graphic live.
7. Use **NEXT** to advance through labels, or **OUTRO** to play the outro animation.
8. Click **OUT** to remove the graphic from the live output.

For setup and configuration, see [On Air Setup](/on-air/setup/).

### Path C: Control via API

For automation systems or custom integrations that need programmatic control over the graphic.

1. **Export** as a ZIP Package (Step 4 above).
2. **Load** the HTML file in an iframe or browser instance.
3. **Set values** before playback:
   ```javascript
   tweenly.setText("headline", "Breaking News");
   tweenly.setImage("team-logo", "https://example.com/logo.png");
   ```
4. **Start playback**:
   ```javascript
   tweenly.playAnimation();
   ```
5. **Control** during playout:
   ```javascript
   tweenly.next();              // Advance to next label
   tweenly.outro();             // Play outro and exit
   tweenly.continueAnimation(); // Resume after a pause label
   ```

For the full integration walkthrough, see [Playout Integration Guide](/integration/playout-integration/). For the API method reference, see [API Control](/integration/api-control/).

---

## Common workflow patterns

### Lower third (Path A — export to playout)

1. Create a rectangle container with two text objects (name, title).
2. Add a slide-in animation for intro, slide-out for outro.
3. Set Intro end and Outro start markers.
4. Set Init state to `hide-and-pause`.
5. Export as ZIP Package.
6. Load in your playout system. Trigger play to show, trigger outro to hide.

<!-- *TODO: Doplnit — Martina: Jak typicky playout systém triggeruje play/outro? Přes AMCP PLAY/STOP, přes GPI, přes hotkey?* -->

### Lower third with live editing (Path B — On Air)

1. Same design as above, but also enable **isTextEditable** on name and title.
2. Mark as Final.
3. In On Air: drag to standby → type the name and title → IN → (when done) → OUTRO → OUT.

### Data-driven scoreboard (Path A or B)

1. Create the scoreboard layout with text objects for team names, scores, time.
2. Create a Data Source pointing to your scores JSON feed. Enable auto-refresh (e.g., every 5 seconds).
3. Bind data attributes to the text objects.
4. Add animations for intro/outro.
5. Export (Path A) or mark as Final (Path B).

Scores update automatically via the data source refresh — no manual intervention needed during the match.

### Automated graphics (Path C — API control)

1. Design the graphic with editable fields.
2. Export as ZIP Package.
3. Load in your automation system's HTML renderer.
4. Use `tweenly.setText()` / `tweenly.setImage()` to set content from your data system.
5. Use `tweenly.playAnimation()` to trigger, `tweenly.outro()` to remove.

Ideal for automated workflows where graphics are triggered by external events (goal scored, breaking news, ad insertion).

## TL;DR

- **Design** in the Editor → **Prepare** (animations, labels, editable fields) → **Save** → **Export** → **Use in broadcast**.
- **Path A (most common):** Export ZIP → load in playout system → control with native playout commands.
- **Path B (On Air):** Mark as Final → drag to session → edit fields → IN/OUT.
- **Path C (API):** Export ZIP → load in iframe → setText/setImage → playAnimation.
- Use **ZIP Package** for production. HTML export is for testing only.
- Set **Init state** to `hide-and-pause` for playout-triggered graphics.
- Use **pause labels** to create controllable stop points in the animation.
- Use **Data Sources** with auto-refresh for live-updating content.
