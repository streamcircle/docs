---
title: Sessions & Multi-Output
description: How to manage multiple broadcast sessions and outputs in Tweenly On Air.
---

A **session** in On Air represents a single broadcast output — for example, a TV channel, a streaming endpoint, or a playout instance. Each session operates independently with its own standby and live graphics.

## Session basics

Each session has two columns:

| Column | Purpose |
|--------|---------|
| **Standby** | The graphic is loaded and ready. Edit fields before going live. |
| **Live** | The graphic is currently on air. Fields cannot be edited while live. |

Sessions appear as expandable accordions in the bottom-right area of the On Air interface.

## Working with a session

### Loading a graphic

1. Find the graphic in the **sidebar** (left panel).
2. **Drag** it into the session's **standby** slot.
3. The graphic preview loads — you can now edit text and image fields.

### Going live

1. Verify the graphic looks correct in the preview.
2. Click **IN** to send the standby graphic to the live column.
3. The graphic is now on air.

### Controlling playback

| Command | Action |
|---------|--------|
| **IN** | Move standby graphic to live. |
| **OUT** | Remove graphic from live output. |
| **NEXT** | Advance animation to the next label. |
| **OUTRO** | Jump to outro marker and play exit animation. |

### Replacing a live graphic

To swap a graphic that's currently on air:

1. Drag a new graphic into the **standby** slot (while the current one is still live).
2. Edit fields in standby as needed.
3. Click **IN** — the new graphic replaces the current live one.

## Multiple sessions

<!-- *TODO: Doplnit — Martina, prosím:*

- *Kolik sessions může běžet současně?*
- *Běží každá session na vlastním output, nebo sdílejí output?*
- *Jak se sessions vytvářejí? V On Air UI (tlačítko "Add session"), v admin panelu, nebo v backend konfiguraci?*
- *Může operátor vidět a ovládat všechny sessions najednou, nebo se mezi nimi přepíná?*
- *Jak se session pojmenovává / identifikuje (název kanálu, číslo, custom label)?* -->

## Session configuration

<!-- *TODO: Doplnit:*

- *Má session nějaké nastavení (resolution, output format, render quality)?*
- *Dá se session přiřadit ke konkrétní workspace (aby se v ní zobrazovaly jen grafiky z daného workspace)?*
- *Existuje session-level permission (kdo může ovládat kterou session)?* -->

## Multi-output scenarios

<!-- *TODO: Doplnit typické use cases — příklady z praxe:*

- *Příklad 1: Jeden operátor, dva kanály (např. hlavní program + sportovní kanál)*
- *Příklad 2: Dva operátoři, každý ovládá svou session*
- *Příklad 3: Kombinace On Air sessions + API-řízené outputy* -->

## TL;DR

- Each session = one broadcast output with **standby** and **live** columns.
- Drag graphics from the sidebar into a session's standby slot.
- **IN** sends to live, **OUT** removes, **NEXT** / **OUTRO** control animation.
- Replace a live graphic by loading a new one into standby and pressing IN.
