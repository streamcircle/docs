---
title: Free vs Unlimited
description: What is included in the Free plan and what the Unlimited plan unlocks.
---

Tweenly offers two license plans: **Free** and **Unlimited**. Both plans provide full access to the Editor for creating and animating graphics. The Unlimited plan removes export restrictions and enables team collaboration.

## Feature comparison

| Feature | Free | Unlimited |
|---------|:----:|:---------:|
| **Editor** — create, animate, preview graphics | Yes | Yes |
| **Data Sources** — connect JSON, XML, TXT feeds | Yes | Yes |
| **Code Triggers** — write JS in the Editor | Yes | Yes |
| **Export HTML** — plain HTML with online assets | Yes | Yes |
| **Export ZIP Package** — self-contained offline export | No | Yes |
| **Code Triggers in exports** — JS runs in exported files | No | Yes |
| **setText / setImage in exports** — API control of fields | No | Yes |
| **API Control in exports** — runtime text/image updates | No | Yes |
| **Personal Workspace** | 1 | 1 |
| **Shared Workspaces** — team collaboration | No | Unlimited |
| **Workspace Members** | — | Unlimited |

## Features in both plans

Both plans include all Editor features:

- All object types (Rectangle, Text, Image, Sequence, Tickers)
- All 32 pre-built animations + custom animations
- Timeline with labels, easing, and playback controls
- Data Sources (create, bind, refresh)
- Code Triggers (write and test in the Editor)
- Built-in Test App for previewing graphics
- Gallery and asset management

## What Unlimited unlocks

### Exports

In the Free plan, exported HTML files are limited:
- Code trigger bodies are **removed** (replaced with empty functions).
- `setText()` and `setImage()` API methods are **not available**.
- ZIP Package export is **not available**.

With Unlimited, exports include everything — code triggers run, API methods work, and ZIP packages are available for offline/production use.

### Workspaces & collaboration

The Free plan includes one personal workspace (private, no members). With Unlimited, you can create shared workspaces and invite team members with different roles (Owner, Admin, Collaborator).

### On Air integration

[Tweenly On Air](/on-air/overview/) works with both plans for previewing graphics. However, the full live playout workflow with API-controlled field updates requires Unlimited exports.

## How to upgrade

To upgrade, see [Manage License](/getting-started/manage-license/).
