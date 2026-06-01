---
title: Image Sequence
description: Create frame-by-frame animations from numbered image files.
---

An **image sequence** is a set of numbered images played in succession to create a frame-by-frame animation. They are useful for **animated backgrounds, complex transitions, or effects** such as particle simulations, live-action loops, or complex 3D renders exported as frame sequences.  

:::note
Image sequences **are available in Free and Unlimited plans.** In the **Free plan**, image sequences are exported only in plain HTML format, which requires a very stable internet connection. Even then, smooth playback is not guaranteed, and sequences may appear choppy. In the **Unlimited plan**, image sequences are fully supported in both HTML and ZIP package export, ensuring smooth offline playback. 
:::

## Frame Rate Selection

- When creating a new graphics file, a **canvas settings dialog** appears.  
- Select the correct **frame rate**: **25 or 50 frames per second (FPS)** based on the frame rate of your prepared image sequence.  
- Choosing the wrong frame rate may cause playback speed issues and affect animation timing.  

:::caution
Once selected, the frame rate cannot be changed. If the incorrect frame rate is chosen, you must create a new graphics file with the correct setting.
:::

Higher frame rates (50 FPS) produce fluid animation but require more processing power. Use 25 FPS for simpler sequences to reduce file size.

## Adding an Image Sequence

1. In the **Left Sidebar**, click **Sequence**.  
2. The **file explorer** opens – select your images and confirm.  
3. The images are **uploaded and sorted by file name** (standard sequential naming supported, e.g. `frame_001.png`, `frame_002.png`, …).  
4. Once the sequence is created:  
   - It appears in the **Object Tree** (Left Sidebar).  
   - Each image is assigned a **timeline keyframe** in the **Bottom Panel (Timeline)**.  
5. You can add **multiple image sequences** to a single graphics file. Large sequences may increase file size, so consider **splitting sequences into separate graphics files** for better performance.  

## Editing an Image Sequence

- Edit an **image sequence object** like any other object in the **Right Sidebar** (adjust width, height, position, etc.).  
- On the **timeline**, you can:  
  - Adjust the **duration** and **start time** of each frame.  
  - Select multiple frames for bulk actions:  
    - Hold **Ctrl (Windows) / Cmd (Mac)** and click frames.  
    - Hold **Shift** and click the first and last frame to select all in between.  
  - **Remove frames** from the sequence, creating gaps.  
  - **Extend the duration** of the previous frame to fill gaps.  

Each scene can contain multiple image sequences, which can be shifted on the timeline or edited independently.  

## Deleting an Image Sequence

An image sequence can be deleted in two ways:  

1. **Delete the sequence object** in the **Left Sidebar**.  
2. **Remove all frames** from the sequence in the **Timeline**.  

## Exporting a Graphics File with an Image Sequence

When exporting a graphics file that contains image sequences, consider how images are stored and accessed:  

### 1. ZIP Package (Recommended)  
- Exports all frames in a **single folder** inside a `.zip` file.  
- Ensures **consistent playback speed** and works fully **offline**.  

### 2. Plain HTML Export (Requires Online Hosting)  
- Generates a **compact HTML file** with frames stored in the **Tweenly cloud**.  
- Reduces export file size but requires a **stable internet connection**.  
- Performance depends on network speed and connection quality.  

:::tip
**Which format should you choose?**  
- **Use ZIP Package** for smooth, reliable playback without network dependency.  
- **Use Plain HTML Export** if you want a smaller export file and your frames can be hosted online.
::: 
