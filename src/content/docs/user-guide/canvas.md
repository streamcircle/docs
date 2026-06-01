---
title: Canvas & Navigation
description: Navigate the canvas, select objects, zoom, pan, and configure resolution and frame rate.
---

The **Canvas** is the main workspace where you visually arrange and edit objects. It displays the graphic at the current resolution and provides tools for zooming, panning, selecting, and manipulating objects.

## Tool modes

The Editor has two tool modes, selectable from the toolbar above the canvas:

| Mode | Key | Cursor | Behavior |
|------|-----|--------|----------|
| **Selection** (default) | `V` | Arrow | Click to select objects. Drag to move. Resize handles visible. |
| **Hand** | `H` | Grab | Click and drag to pan the canvas. Object selection disabled. |

Press `V` to return to selection mode. Hold **Space** and drag for temporary panning without switching modes.

## Zoom

| Control | Description |
|---------|-------------|
| **Zoom slider** | Adjust zoom level from 10% to 200% (in the toolbar). |
| **Fit to screen** | Auto-zoom to fit the entire canvas in the viewport (button in the toolbar). |

The current zoom percentage is displayed next to the slider.

## Selecting objects

### Single selection

Click an object on the **Canvas** to select it. Click an empty area to deselect all.

### Multi-Select

Hold **Cmd** (Mac) or **Ctrl** (Windows) and click objects to add or remove them from the selection.

When multiple objects are selected:
- A shared selection wrapper appears around all selected objects.
- Individual resize handles are hidden.
- You can move all selected objects together by dragging the wrapper.

## Moving objects

Drag a selected object to reposition it on the canvas.

:::note
Objects with `position: static` (flex children inside a flex container) cannot be dragged individually — they are positioned by their parent's flex layout.
:::

## Resizing objects

Select an object to reveal 8 **resize handles** around it (4 corners + 4 edges).

- Drag a **corner handle** to resize width and height simultaneously.
- Drag an **edge handle** to resize in one direction only.
- Hold **Shift** while dragging a corner to maintain the aspect ratio.

:::note
Resize handles are hidden when multiple objects are selected.
:::

## Grid & snapping

Toggle grid and snapping options from the **canvas settings** (gear icon in the toolbar):

| Setting | Description |
|---------|-------------|
| **Show canvas grid** | Displays a visual grid overlay on the canvas. |
| **Snap to canvas grid** | Objects snap to a 20px grid when moved or resized. When off, objects move freely (1px precision). |
| **Show canvas overflow** | When on, content beyond the canvas edges is visible. When off, it is clipped. |

## Canvas settings

Open the canvas settings dialog from the gear icon in the toolbar to configure resolution and frame rate.

### Resolution

| Preset | Size |
|--------|------|
| **Full HD** | 1920 x 1080 px (default) |
| **4K** | 3840 x 2160 px |
| **Custom** | Enter any width and height. |

### Frame rate

| Option | Use case |
|--------|----------|
| **1 second** | Default timeline unit. |
| **25 FPS** | PAL broadcast standard. |
| **50 FPS** | High frame rate broadcast. |

:::caution
Frame rate cannot be changed after the graphic is created. Choose the correct rate when setting up a new file, especially when working with image sequences.
:::

<!-- ![TODO: screenshot of Canvas with grid, zoom slider, and settings](../../../assets/assets/canvas-overview.png) -->

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `V` | Selection mode (default cursor) |
| `H` | Hand tool (pan canvas) |
| `Space` + drag | Temporary pan |
| `Cmd/Ctrl + D` | Duplicate selected object |
| `Cmd/Ctrl + Delete` | Delete selected object |
| `Cmd/Ctrl + Click` | Add/remove object to multi-selection |
| `Shift` + corner drag | Resize with locked aspect ratio |

## TL;DR

- **Two modes**: Selection (`V`) for editing objects, Hand (`H`) for panning. Hold `Space` for temporary pan.
- **Zoom**: 10%–200% via slider, or fit-to-screen button.
- **Multi-select**: `Cmd/Ctrl + Click`. Selected objects move together.
- **Resize**: 8 handles per object. `Shift` + corner drag locks aspect ratio.
- **Grid snap**: Toggle in settings. Snaps to 20px grid when enabled.
- **Resolution**: Full HD (default), 4K, or custom. Set once per file.
- **Frame rate**: 1s, 25 FPS, or 50 FPS. Cannot be changed after creation.
