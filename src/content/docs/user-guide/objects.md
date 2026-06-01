---
title: Objects
description: Create and configure Rectangle, Text, Image, Ticker, and Sequence objects on the canvas.
---

Every graphic in Tweenly is composed of **objects** — rectangles, text, images, tickers, and sequences — arranged on the **Canvas** and organized in the **Object Tree**.

## Object types

| Type | Description | Can contain children |
|------|-------------|---------------------|
| **Rectangle** | Backgrounds, masks, layout containers. Supports fill, gradients, borders, and overflow control. | Yes |
| **Text** | Static or data-bound text with full typography control. | No |
| **Image** | Static images from file upload, URL, or asset library. | Yes |
| **Image Sequence** | Frame-by-frame animation from a series of images. | No |
| **Crawl Ticker** | Horizontally scrolling text (continuous or staggered). | No |
| **Scroll Ticker** | Vertically scrolling text (up, down, or up & down). | No |

:::tip
For detailed documentation on **Tickers** and **Image Sequences**, see their dedicated pages in the Main Features section.
:::

## Creating an object

1. Open the **Left Sidebar**.
2. Click the object type you want to add: **Rectangle**, **Text**, **Image**, **Sequence**, **Crawl Ticker**, or **Scroll Ticker**.
3. The object appears on the **Canvas** and in the **Object Tree**.

For images, you will be prompted to choose a source:
- **Upload** — Select an image file from your computer.
- **Insert URL** — Enter an image URL or select a Data Source attribute.
- **Choose from Assets** — Pick an existing image from your workspace assets.

<!-- ![TODO: screenshot of Left Sidebar with object creation buttons](../../../assets/assets/objects-left-sidebar.png) -->

## Object tree

The **Object Tree** in the Left Sidebar displays all objects in the scene as a hierarchy.

- **Reorder** objects by moving them up, down, or to the root level.
- **Nest** objects by dragging them into a container (e.g., text inside a rectangle).
- **Right-click** an object to access: duplicate, delete, or add a child object.

### Nesting rules

- **Rectangle** and **Image** can contain child objects.
- **Text**, **Image Sequence**, and **Tickers** cannot have children.

Nested objects inherit the parent's position and are clipped by the parent's bounds when **Overflow** is set to `hidden`.

## Common properties

Select any object to edit its properties in the **Right Sidebar**. These properties are shared by all object types.

### Size & position

| Property | Description |
|----------|-------------|
| **X** | Horizontal position (px). |
| **Y** | Vertical position (px). |
| **Width** | Object width (px). |
| **Height** | Object height (px). |
| **Aspect ratio lock** | Maintain proportions when resizing. |

### Alignment

When one or more objects are selected, use alignment tools to align them:
- Horizontal: **Left**, **Center**, **Right**
- Vertical: **Top**, **Center**, **Bottom**

### Transforms

| Property | Description |
|----------|-------------|
| **Rotation** (X, Y, Z) | Rotate the object in degrees. |
| **Scale** (X, Y) | Scale the object (1 = original size). |
| **Translate** (X, Y) | Offset the object from its position. |
| **Transform Origin** | The point around which transforms are applied (center, top left, etc.). |

### Opacity

Controls the transparency of the object. Range: `0` (fully transparent) to `1` (fully opaque).

### Filters

| Filter | Description |
|--------|-------------|
| **Blur** | Applies a Gaussian blur (px). |
| **Background Blur** | Blurs content behind the object (px). |
| **Drop Shadow** | Adds a shadow with offset, blur, spread, and color. |

### Margin & padding

Set spacing around (**margin**) and inside (**padding**) the object. Each side (top, right, bottom, left) can be set individually.

## Rectangle

A rectangle is the most versatile object. Use it for backgrounds, color blocks, layout containers, masks, or as a parent for nesting other objects.

### Fill

- **Solid color** — Set a background color (RGBA).
- **Gradient** — Apply a linear gradient with angle and color stops.
- **Background image** — Set an image as the fill.

### Border

| Property | Options |
|----------|---------|
| **Width** | Border thickness (px). |
| **Style** | `solid`, `dashed`, `dotted`, `double`, `none` |
| **Color** | Border color (RGBA). |
| **Box sizing** | `content-box` or `border-box` |

### Border radius

Round the corners of a rectangle. Set all corners uniformly, or adjust each corner individually (top-left, top-right, bottom-left, bottom-right).

### Overflow

Controls how child objects behave when they extend beyond the rectangle's bounds:
- **Visible** — Children are fully rendered, even outside the rectangle.
- **Hidden** — Children are clipped at the rectangle's edges (masking effect).

### Layout (Flex)

Rectangles can act as flex containers for their children:

| Property | Options |
|----------|---------|
| **Display** | `block`, `flex`, `inline-block`, `inline-flex` |
| **Flex direction** | `row`, `column` |
| **Justify content** | `flex-start`, `center`, `flex-end`, `space-around`, `space-evenly`, `space-between` |
| **Align items** | `flex-start`, `flex-end`, `center`, `baseline`, `stretch` |
| **Gap** | Spacing between children (px). |

<!-- ![TODO: screenshot of Rectangle properties in Right Sidebar](../../../assets/assets/objects-rectangle-properties.png) -->

## Text

Text objects display static content, data-bound values, or a combination of both.

### Text & Font

| Property | Options |
|----------|---------|
| **Font family** | System fonts (Arial, Helvetica, Roboto, Inter, etc.) or uploaded custom fonts. |
| **Font size** | Size in px. |
| **Font weight** | `normal`, `bold` |
| **Font style** | `normal`, `italic` |
| **Text align** | `left`, `center`, `right` |
| **Text transform** | `none`, `capitalize`, `uppercase`, `lowercase` |
| **Direction** | `ltr` (left-to-right), `rtl` (right-to-left) |
| **Line height** | Spacing between lines. |
| **Letter spacing** | Spacing between characters (px, range: -10 to 50). |
| **White space** | `normal` (wraps), `nowrap` (single line) |
| **Color** | Text color (RGBA). |

### Text sizing

| Mode | Behavior |
|------|----------|
| **Fixed** | The font size stays constant. The text may overflow its bounding box. |
| **Fitting** | The text resizes dynamically to fit within its bounding box. |

### Editable text

Enable **isTextEditable** to allow the text value to be updated at runtime — for example, via the On Air control interface or an API command. When enabled, the text field appears as an input in the playout control panel.

### Data binding

Text can display values from a Data Source. Insert an attribute using the drop-down in the **Text & Font** section. Attributes appear in the format `{slug/attribute-name}` and can be combined with static text.

:::tip
See [Data Source & API Control](/main-features/data-source-api-control/) for details on creating and binding data sources.
:::

<!-- ![TODO: screenshot of Text properties in Right Sidebar](../../../assets/assets/objects-text-properties.png) -->

## Image

Image objects display static images or data-bound image URLs.

### Supported formats

Any image format supported by the browser — including `png`, `jpg`, `svg`, `gif`, `webp`, and `bmp`.

### Image source

An image can be loaded from three sources:
- **File upload** — Select an image from your computer.
- **URL** — Enter a direct URL to an image, or select a Data Source attribute.
- **Asset library** — Choose an existing image from the workspace assets.

### Image display

| Property | Options |
|----------|---------|
| **Background size** | `auto`, `cover` (fill and crop), `contain` (fit within bounds) |
| **Background position** | 9 positions (e.g., `center center`, `left top`, `right bottom`) |
| **Background repeat** | `no-repeat`, `repeat`, `repeat-x`, `repeat-y` |

### Replacing an image

1. Select the image on the **Canvas** or in the **Object Tree**.
2. In the **Right Sidebar > Image section**, click **Replace image**.
3. Choose a new source (file, URL, or asset).

### Editable image

Enable **isImageEditable** to allow the image source to be updated at runtime via the On Air control interface or an API command.

<!-- ![TODO: screenshot of Image properties in Right Sidebar](../../../assets/assets/objects-image-properties.png) -->

## Duplicating an object

1. **Right-click** the object in the **Object Tree** or on the **Canvas**.
2. Select **Duplicate**.

Or use the keyboard shortcut: `Cmd/Ctrl + D`.

## Deleting an object

1. **Right-click** the object in the **Object Tree** or on the **Canvas**.
2. Select **Delete**.

Or use the keyboard shortcut: `Cmd/Ctrl + Delete`.

## TL;DR

- Objects are created from the **Left Sidebar** and managed in the **Object Tree**.
- **Rectangle** and **Image** can contain children; **Text**, **Tickers**, and **Sequences** cannot.
- All objects share common properties: position, size, transforms, opacity, filters, margin, and padding.
- **Rectangle** is the most versatile — use it for backgrounds, masks, containers, and flex layouts.
- **Text** supports custom fonts, sizing modes (fixed/fitting), and data binding.
- **Image** supports file upload, URL, and asset sources with display control (cover/contain).
- Enable **isTextEditable** or **isImageEditable** to allow runtime updates from On Air or API.
