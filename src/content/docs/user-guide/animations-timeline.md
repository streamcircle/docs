---
title: Animations & Timeline
description: How to animate objects and control playback timing in the Tweenly Editor.
---

Animations change object properties over time — position, size, opacity, color, and more. The **Timeline** in the Bottom Panel controls when animations start, how long they last, and how they play back.

## Adding an animation

1. Select an object on the **Canvas** or in the **Object Tree**.
2. In the **Right Sidebar**, open the **Animate** tab.
3. Click **+ animation**.
4. A new animation appears in the list and on the **Timeline**.

Each animation starts with a default fade-in effect. You can change it to any other animation type and adjust its properties.

<!-- ![TODO: screenshot of adding an animation via the Right Sidebar](../../../assets/assets/animations-add.png) -->

## Animation types

Tweenly includes 32 pre-built animations, organized by category:

| Category | Animations |
|----------|-----------|
| **Fade** | fadeIn, fadeOut |
| **Scale** | zoomIn, zoomOut, scaleSubtleIn, scaleSubtleOut |
| **Rotation** | rotateXRight, rotateXLeft, rotateYRight, rotateYLeft, rotateZRight, rotateZLeft |
| **Slide** | slideFromLeft, slideToLeft, slideFromRight, slideToRight, slideFromTop, slideToTop, slideFromBottom, slideToBottom |
| **Bounce** | bounceIn, bounceOut |
| **Expand** | expandIn, expandOut |
| **Reveal** | revealFromLeft, revealToLeft, revealFromRight, revealToRight, revealFromTop, revealToTop, revealFromBottom, revealToBottom |

### Tween modes

Each animation can use one of four modes:

| Mode | Description |
|------|-------------|
| **fromTo** | Animates from a start state to an end state. Most common. |
| **from** | Animates from a start state to the object's current properties. |
| **to** | Animates from the object's current properties to an end state. |
| **set** | Instantly applies properties without animation. |

### Customizing an animation

After adding an animation, modify its **from** and **to** states to change what properties are animated. You can animate any combination of:

- **Position** — top, left
- **Size** — width, height
- **Opacity** — transparency (0–1)
- **Transforms** — scale, translate, rotate (X/Y/Z)
- **Color** — background color, text color, gradient
- **Filters** — blur, background blur, drop shadow
- **Spacing** — margin, padding

## Timing

### Duration & delay

| Property | Description |
|----------|-------------|
| **Duration** | How long the animation takes to complete. |
| **Delay (Start offset)** | How long to wait before the animation begins. |
| **Repeat** | Number of times to repeat the animation. |

Adjust timing by editing values in the **Right Sidebar**, or drag the animation block directly on the **Timeline** to reposition and resize it.

### Relative timing

When multiple animations exist on the same object, you can set a **relative start offset** — the animation starts at a defined offset from another animation, rather than at an absolute timeline position.

## Easing

Easing controls the acceleration curve of an animation — whether it starts slow, ends slow, or moves at a constant speed.

### Easing styles

| Style | Effect |
|-------|--------|
| **linear** | Constant speed (default). |
| **power1** | Subtle acceleration/deceleration. |
| **power2** | Moderate acceleration/deceleration. |
| **power3** | Strong acceleration/deceleration. |
| **power4** | Very strong acceleration/deceleration. |
| **back** | Overshoots slightly before settling. Supports strength levels. |
| **elastic** | Spring-like bounce effect. |
| **bounce** | Bouncing ball effect. |
| **circ** | Circular motion curve. |
| **expo** | Exponential acceleration/deceleration. |
| **sine** | Sinusoidal (smooth, natural) motion. |

### Easing direction

Each easing style can be applied in three directions:

| Direction | Effect |
|-----------|--------|
| **in** | Starts slow, ends fast. |
| **out** | Starts fast, ends slow. |
| **inOut** | Starts slow, speeds up, ends slow. |

### Easing strength

The **back** easing style supports five strength levels: extra-soft, soft, normal, strong, extra-strong. Other easing styles do not have adjustable strength.

<!-- ![TODO: screenshot of easing options in the Right Sidebar](../../../assets/assets/animations-easing.png) -->

## Timeline

The **Timeline** in the Bottom Panel is where you control the overall playback of your graphic.

### Timeline layout

- Each object with animations has a **row** on the timeline.
- Animation blocks are displayed as colored bars — drag them to adjust start time and duration.
- The **Playhead** (vertical line) shows the current position. Drag it to preview any point in time.

### Playback controls

| Control | Action |
|---------|--------|
| **Play** | Start playback from the current playhead position. |
| **Pause** | Stop playback. |
| **Go to begin** | Jump the playhead to the start of the timeline. |
| **Next** | Advance to the next label or marker. |
| **Outro** | Jump to the outro marker and play from there. |

Keyboard shortcut: `Cmd/Ctrl + D` to duplicate an animation.

### Timeline settings

| Setting | Options | Description |
|---------|---------|-------------|
| **Init state** | play, pause, hide-and-pause | What happens when the graphic loads. |
| **End state** | clear, pause | What happens when the timeline reaches the end. |
| **Intro end** | Time marker | Marks the end of the intro section. |
| **Outro start** | Time marker | Marks the beginning of the outro section. |

:::tip
Use **hide-and-pause** as the init state if your graphic should be invisible until triggered by a playout system.
:::

## Labels

Labels are **named markers** placed on the timeline. They define points where specific actions occur during playback.

### Adding a label

1. In the **Timeline**, click at the desired time position to place a label.
2. Give the label a **name**.
3. Select the label **action**.

### Label actions

| Action | Behavior |
|--------|----------|
| **continue** | Playback continues past the label without stopping. |
| **pause** | Playback stops at the label until triggered to continue. |
| **jump** | Playback jumps to another label (specify the target label name). |
| **refresh** | Refreshes data at the label position (e.g., reload a Data Source). |

:::tip
Combine **pause** labels with API commands to control graphics from a playout system — for example, pause at a label after the intro, then send a "continue" command when ready.
:::

## Code triggers

Code triggers allow you to run JavaScript at specific points during playback. They can be attached to the timeline, to labels, or to individual animations.

| Scope | Trigger | When it runs |
|-------|---------|-------------|
| **Timeline** | Init code | Once, when the timeline starts. |
| **Timeline** | Update code | Every frame during playback. |
| **Label** | Label code | When playback reaches the label. |
| **Animation** | Init code | When the animation starts. |
| **Animation** | Update code | Every frame during the animation. |

:::note
Code triggers are available in the editor for all users, but they are included **in exports only with the Unlimited plan**.
:::

For use cases and examples, see [Code Triggers](/main-features/code-triggers/).

<!-- ![TODO: screenshot of Timeline with labels and animations](../../../assets/assets/animations-timeline-overview.png) -->

## TL;DR

- Add animations from the **Right Sidebar > Animate tab** by clicking **+ animation**.
- 32 pre-built animations available (fade, slide, scale, rotate, bounce, reveal, expand).
- Customize **from** and **to** states to animate any property (position, size, opacity, color, transforms, filters).
- Control timing with **duration**, **delay**, and **easing** (11 styles x 3 directions).
- The **Timeline** shows all animations as draggable blocks. Use the playhead to preview.
- **Labels** mark points on the timeline with actions: continue, pause, jump, or refresh.
- **Code triggers** run JavaScript at timeline, label, or animation level.
