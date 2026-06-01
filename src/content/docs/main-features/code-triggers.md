---
title: Code Triggers
description: How to run custom JavaScript at specific points during timeline playback in Tweenly.
---

Code triggers are **blocks of JavaScript executed at specific points during timeline playback**. Use them to control playback, update content dynamically, or synchronize animations. Code triggers are timeline-driven — they fire at specific timeline positions, not in response to external events.

:::note
Code triggers are available in the editor for all users, but they are included **in exports only with the Unlimited plan** (both HTML and ZIP package).
:::

## Types of Code Triggers

Code triggers can be attached at three levels:

| Level | Init code | Update code | When it runs |
|-------|-----------|-------------|-------------|
| **Timeline** | Once when timeline starts | Every frame during playback | Global — affects the whole graphic |
| **Animation** | Once when animation starts | Every frame while animation is active | Scoped to one animation |
| **Label** | Once when label is reached | — | Scoped to one point in time |

## Adding a Timeline Code Trigger

1. In the **Timeline** (Bottom Panel), locate the **code trigger icon** in the toolbar (looks like `{ }`).
2. Click the icon to open the menu.
3. Select **Timeline init code** or **Timeline update code**.
4. The **code editor** opens — write your JavaScript and click **Save**.

### Timeline Init Code

Runs **once** when the timeline starts. Use it to set up initial state.

```javascript
// Example: Log start time, set initial variable
console.log("Graphic loaded");
window.myCounter = 0;
```

### Timeline Update Code

Runs **every frame** during playback. Receives three parameters:

| Parameter | Description |
|-----------|-------------|
| `time` | Current timeline position (seconds). |
| `lasttime` | Previous frame's position. |
| `duration` | Total timeline duration. |

```javascript
// Example: Update a counter every second
if (Math.floor(time) > Math.floor(lasttime)) {
    window.myCounter++;
    setText("counter", String(window.myCounter));
}
```

<!-- ![TODO: screenshot of Timeline code trigger menu](../../../assets/assets/code-triggers-timeline.png) -->

## Adding an Animation Code Trigger

1. In the **Timeline**, **right-click** on an animation block (colored bar).
2. Select **Edit init code** or **Edit update code** from the context menu.
3. Write your JavaScript in the code editor and click **Save**.

### Animation Init Code

Runs **once** when the animation starts (when playback reaches the animation's delay point).

```javascript
// Example: Log when a specific animation begins
console.log("Intro animation started");
```

### Animation Update Code

Runs **every frame** while the animation is active (between its start and end). Receives the same three parameters as timeline update code, but scoped to the animation's own timing.

```javascript
// Example: Calculate animation progress (0 to 1)
const progress = time / duration;
if (progress > 0.5) {
    setText("status", "Halfway done");
}
```

## Adding a Label Code Trigger

1. In the **Timeline**, **right-click** on a label marker.
2. Select **Edit [label name]** from the context menu.
3. Write your JavaScript in the code editor and click **Save**.

Label code runs **once** when playback reaches the label.

:::note
Only **continue**, **pause**, and **jump** labels support code triggers. **Refresh** labels do not.
:::

```javascript
// Example: On a "pause" label — log the pause point
console.log("Paused at intro end, waiting for API trigger");
```

<!-- ![TODO: screenshot of right-click context menu on animation/label](../../../assets/assets/code-triggers-context-menu.png) -->

## Available JavaScript API functions

Inside code triggers, the following functions and objects are available as globals (without the `tweenly.` prefix used in [external API calls](/integration/api-control/)):

### Playback control

```javascript
playAnimation()               // Play from the beginning
playAnimation(time)            // Play from a specific time
pauseAnimation()               // Pause at current position
pauseAnimation(time)           // Pause at a specific time
continueAnimation()            // Resume from current position
seekAnimation(time)            // Jump to a time without playing
replayAnimation()              // Restart from the beginning
stopAnimation()                // Stop and return to 0
```

### Label control

```javascript
seekAnimationLabel("intro-end")        // Jump to a label by name
disableAnimationPauseLabels()          // Convert all pause labels to continue
disableAnimationJumpLabels()           // Convert all jump labels to continue
disableAnimationLabels()               // Convert all labels to continue
```

### Content updates

```javascript
setText("object-name", "New value")     // Update a text field
setImage("object-name", "https://...")  // Update an image source
```

### Global objects

```javascript
window.masterTimeline          // GSAP timeline instance (full GSAP API)
window.timelineLabels          // Array of all labels: [{title, time, type, jumpto}]
gsap                           // GSAP library (for advanced tween creation)
```

:::caution
`this` is not available inside code triggers — they run in an isolated function scope. Use `window.masterTimeline` to access the timeline.
:::

## Code editor

All code triggers open the same editor dialog:

- **Language**: JavaScript
- **Validation**: Syntax is checked before saving. Syntax errors prevent save.
- **Save**: Click **Save** to apply. Click **Cancel** to discard.
- **Empty code**: Allowed — removes the trigger.

## Practical examples

### Pause at intro, wait for API command

Set up a **pause** label at the end of the intro section. A playout system calls `continueAnimation()` when ready.

**Label setup**: Add a label at the intro end, set action to **pause**.

**In playout system** (or On Air):
```javascript
// When operator clicks "continue"
frame.contentWindow.continueAnimation();
```

### Dynamic text update during playback

Use timeline update code to change text based on time:

```javascript
if (time >= 3 && lasttime < 3) {
    setText("headline", "Score Update: 2-1");
}
if (time >= 8 && lasttime < 8) {
    setText("headline", "Final Score: 3-1");
}
```

### Loop a section using jump labels

Add two labels:
- `loop-start` at 2s (action: **continue**)
- `loop-end` at 5s (action: **jump**, target: `loop-start`)

Playback will loop between 2s and 5s until you call `disableAnimationJumpLabels()` from an external system.

### Track animation progress

Use animation update code to get a 0–1 progress value:

```javascript
const progress = time / duration;
// Use progress for custom easing, dynamic sizing, etc.
document.querySelector(".progress-bar").style.width = (progress * 100) + "%";
```

## TL;DR

- Code triggers run JavaScript at **timeline**, **animation**, or **label** level.
- Add them via the **toolbar icon** (timeline) or **right-click** (animation/label).
- **Init code** runs once. **Update code** runs every frame with `time`, `lasttime`, `duration` parameters.
- Use `setText()`, `setImage()` to update content, and `playAnimation()`, `pauseAnimation()`, `continueAnimation()` to control playback.
- Access the GSAP timeline via `window.masterTimeline`.
- Code triggers are included in exports **only with the Unlimited plan**.
