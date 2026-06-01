---
title: On Air Overview
description: How to use Tweenly On Air to control and play out broadcast graphics in real time.
---

**Tweenly On Air** is the live control interface for playing out graphics created in the Tweenly Editor. It allows operators to select graphics, edit text and image fields in real time, and control playback across one or more broadcast sessions.

On Air is a separate web application accessible at your On Air instance URL. It requires a Tweenly account.

## Interface layout

The On Air interface consists of three main areas:

1. **Left Panel (Graphics Sidebar)** — Browse and select available graphics.
2. **Top Right (Preview Frames)** — Live preview of selected graphics.
3. **Bottom Right (Sessions)** — Active broadcast sessions with standby and live graphics.

<!-- ![TODO: screenshot of On Air full interface](../../../assets/on-air/onair-overview.png) -->

## Graphics sidebar

The left panel displays all graphics available for playout.

Each graphic card shows:
- **Thumbnail** preview
- **Name** and **company**
- **Last updated** date and **author**
- **File size**
- **Final** badge (if marked as final in the Editor)

:::note
Only graphics marked as **Final** in the Editor appear in the sidebar. Draft graphics are not available for playout.
:::

### Filtering by company

Use the dropdown at the top of the sidebar to filter graphics by company, or select **ALL** to see everything.

### Selecting a graphic

Drag a graphic from the sidebar into a session's **standby** slot to prepare it for playout.

## Sessions

A **session** represents an active broadcast output — for example, a specific channel or playout instance. The session list is loaded from the backend. Each session appears as an expandable accordion in the bottom-right area.

Each session has two columns:

| Column | Purpose |
|--------|---------|
| **Standby** | The graphic is loaded and ready. You can edit its fields before going live. |
| **Live** | The graphic is currently on air. |

<!-- ![TODO: screenshot of a session with standby and live columns](../../../assets/on-air/onair-session.png) -->

## Playback controls

Control the playback of the active graphic in a session:

| Command | Action |
|---------|--------|
| **IN** | Send the standby graphic live. It moves from the standby column to the live column. |
| **OUT** | Remove the graphic from live. |
| **NEXT** | Advance the animation to the next label or section. |
| **OUTRO** | Jump to the outro marker and play the outro animation. |

:::note
**NEXT** and **OUTRO** are disabled if the graphic has no animation.
:::

## Editing fields in real time

You can edit text and image fields directly in On Air **while the graphic is in standby**. Once a graphic is live, its fields cannot be edited — send a new version via standby instead.

### Text fields

- Edit any field marked as **isTextEditable** in the Editor.
- Type a new value directly in the field.
- Changes are applied instantly in the preview.

### Image fields

- Edit any field marked as **isImageEditable** in the Editor.
- Click the field to open the **asset picker dialog** and choose an image from the workspace assets.
- Changes are applied instantly in the preview.

:::tip
To make a text or image field editable in On Air, enable **isTextEditable** or **isImageEditable** in the Editor's [Objects](/user-guide/objects/) properties.
:::

<!-- ![TODO: screenshot of field editing in On Air](../../../assets/on-air/onair-field-editing.png) -->

## Preview

The top-right area shows a live preview of the selected graphic, rendered in an iframe at the correct aspect ratio.

- The preview updates in real time as you edit fields.
- Playback controls (**Play**, **Pause**, **Replay**, timeline scrubbing) are available for testing animation before going live.

## Player mode

On Air can also run in **Player Mode** — a standalone view for displaying a single graphic.

Access it by adding a graphic ID to the URL: `/?graphicId=<id>`

In Player Mode:
- Only one graphic is displayed.
- A playback slider and field editors are available.
- A **fake data generator** can insert random text with a configurable word count range (useful for testing layout limits).
- No session management — intended for embedding or standalone preview.

## Workflow summary

A typical On Air workflow:

1. **Create and export** graphics in the Tweenly Editor (mark fields as editable).
2. **Open On Air** and log in.
3. **Filter** graphics by company if needed.
4. **Drag** a graphic into a session's standby slot.
5. **Edit** text and image fields as needed.
6. **Preview** the graphic to verify appearance.
7. Send **IN** to go live.
8. Use **NEXT** or **OUTRO** to advance or end the graphic.
9. Send **OUT** to remove from live.

## Further reading

- [On Air Setup](/on-air/setup/) — how to access and configure On Air for your environment
- [Sessions & Multi-Output](/on-air/sessions/) — managing multiple broadcast sessions
- [Troubleshooting On Air](/on-air/troubleshooting/) — solutions to common issues
- [From Design to Broadcast](/getting-started/design-to-broadcast/) — end-to-end workflow guide

## TL;DR

- On Air is the live playout interface — separate from the Editor.
- Graphics are organized in a sidebar and assigned to sessions via drag-and-drop.
- Each session has **standby** (preparation) and **live** (on air) columns.
- Playback commands: **IN**, **OUT**, **NEXT**, **OUTRO**.
- Text and image fields can be edited in real time before going live.
- Enable **isTextEditable** / **isImageEditable** in the Editor to make fields controllable in On Air.
- Player Mode (`/?graphicId=<id>`) provides standalone single-graphic preview.
