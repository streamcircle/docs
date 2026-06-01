---
title: API Control
description: How to control Tweenly graphics at runtime from a playout or automation system.
---

Tweenly graphics exported as HTML can be controlled at runtime — updating text, images, and playback state from an external system. This page covers the JavaScript API available inside exported graphics.

:::note
API control features are included **in exports only with the Unlimited plan**. In the Free plan, editable fields and API commands are available in the Editor but not in exported files.
:::

## Overview

When a Tweenly graphic is loaded in a browser (or an iframe in a playout system), it exposes a `tweenly` JavaScript object on the window. Inside [Code Triggers](/main-features/code-triggers/), the same functions are available as globals without the `tweenly.` prefix. This object provides methods to:

- Update **text** and **image** fields at runtime
- Control **playback** (play, pause, continue, next, outro)
- Access the **GSAP timeline** directly for advanced control

## Editable fields

For a field to be controllable via API, it must be marked as editable in the Tweenly Editor:

- **Text**: Enable **isTextEditable** in the object properties.
- **Image**: Enable **isImageEditable** in the object properties.

Each editable field has a **name** (the object's identifier) that you use when calling API methods.

See [Objects](/user-guide/objects/) for details on enabling editable fields.

## Text control

### `tweenly.setText(name, value)`

Updates the text content of an editable text field.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | The name of the text field (object identifier). |
| `value` | string | The new text content. |

**Example:**
```javascript
tweenly.setText("headline", "Breaking News: Match Result 3-1");
tweenly.setText("score-home", "3");
tweenly.setText("score-away", "1");
```

## Image control

### `tweenly.setImage(name, url)`

Updates the image source of an editable image field.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | The name of the image field (object identifier). |
| `url` | string | The URL of the new image. |

**Example:**
```javascript
tweenly.setImage("team-logo", "https://example.com/logos/team-a.png");
```

## Playback control

### `tweenly.playAnimation()`

Starts playback from the beginning of the timeline.

### `tweenly.pauseAnimation(value)`

Pauses playback. Optionally pass a time value to pause at a specific position.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | number (optional) | Timeline position to pause at. |

### `tweenly.continueAnimation()`

Resumes playback from the current position after a pause.

### `tweenly.seekAnimation(time)`

Jumps the timeline to a specific time position without starting playback.

| Parameter | Type | Description |
|-----------|------|-------------|
| `time` | number | Timeline position in seconds. |

### `tweenly.replayAnimation()`

Restarts playback from the beginning of the timeline.

### `tweenly.stopAnimation()`

Stops playback and returns the timeline to position 0.

### `tweenly.next()`

Advances the timeline to the next label or marker.

### `tweenly.outro()`

Jumps to the outro marker and plays the outro animation.

### `tweenly.goToBegin()`

Moves the playhead to the beginning of the timeline without starting playback.

## Label control

### `tweenly.seekAnimationLabel(name)`

Jumps the timeline to a named label.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | The label name as defined in the Editor. |

### `tweenly.disableAnimationPauseLabels()`

Converts all **pause** labels to **continue**, so playback no longer stops at pause points.

### `tweenly.disableAnimationJumpLabels()`

Converts all **jump** labels to **continue**, so playback no longer loops at jump points.

### `tweenly.disableAnimationLabels()`

Converts all labels (pause, jump) to **continue**.

## Direct timeline access

### `masterTimeline`

The GSAP timeline object is available as `masterTimeline` on the iframe's `contentWindow`. This provides full GSAP API access for advanced control scenarios.

**Example (from parent page controlling an iframe):**
```javascript
const frame = document.getElementById("graphic-frame");
const tl = frame.contentWindow.masterTimeline;

// Seek to 2 seconds
tl.seek(2);

// Get total duration
console.log(tl.duration());
```

:::caution
Direct timeline manipulation bypasses Tweenly's control logic. Use the `tweenly.*` methods for standard operations and only access `masterTimeline` when needed for advanced use cases.
:::

## Graphic metadata

Exported graphics store metadata in HTML `<meta>` tags, including:

- **Canvas size** (width, height)
- **Frame rate** (25 or 50 FPS)
- **Editable fields** — a JSON array listing all text and image fields with their names and current values

A playout system can parse these meta tags to discover available fields before sending updates.

## Integration pattern

A typical integration with a playout system:

1. **Load** the exported HTML graphic in an iframe or browser instance.
2. **Parse** metadata to discover editable fields.
3. **Set values** using `tweenly.setText()` and `tweenly.setImage()`.
4. **Control playback** using `tweenly.playAnimation()`, `next()`, `outro()`.
5. **React to timeline events** using labels and code triggers configured in the Editor.

## On Air integration

[Tweenly On Air](/on-air/overview/) provides a ready-made interface that wraps this API. It handles session management, field editing, and playback control through a visual interface — no custom integration code needed.

For custom integrations, use the API methods documented above. See the [Playout Integration Guide](/integration/playout-integration/) for a practical step-by-step walkthrough.

## TL;DR

- Exported graphics expose a `tweenly` JavaScript object for runtime control.
- `tweenly.setText(name, value)` and `tweenly.setImage(name, url)` update editable fields.
- `tweenly.playAnimation()`, `pauseAnimation()`, `continueAnimation()`, `seekAnimation()`, `replayAnimation()`, `stopAnimation()`, `next()`, `outro()`, `goToBegin()` control playback.
- `tweenly.seekAnimationLabel()`, `disableAnimationPauseLabels()`, `disableAnimationJumpLabels()` control labels.
- Fields must be marked as **isTextEditable** or **isImageEditable** in the Editor.
- `masterTimeline` provides direct GSAP access for advanced scenarios.
- API control requires the **Unlimited plan** in exported graphics.
