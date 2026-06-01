---
title: Tickers
description: Create crawl and scroll tickers for news feeds, sports results, and other scrolling text.
---

Tickers are **objects** commonly used for **news feeds, sports results, and other real-time information**. A ticker is a text element that continuously crawls or scrolls across the screen.  

:::note
Tickers **are available in Free and Unlimited** plans.
:::

## Types of Tickers

There are two main types of tickers:  

- **Crawl Tickers** – Move text **horizontally** (right to left).  
  - **Continuous** – The text repeats with no gaps between items.  
  - **Staggered** – A new text block **enters only after the previous one disappears**.  

- **Scroll Tickers** – Move text **vertically** (top to bottom or vice versa).  
  - **Up** – Moves text from bottom to top.  
  - **Down** – Moves text from top to bottom.  
  - **Up & Down** – Moves text up and down alternately.  

## Creating a Ticker

1. **Go to the Left Sidebar.**  
2. Click **Crawl Ticker** or **Scroll Ticker**.  
3. Choose the desired **ticker type**.  
4. The ticker appears on the canvas and can be edited in the **Right Sidebar**.  

## Editing a Ticker

1. Select the ticker in the **objects tree**.  
2. Open the **Right Sidebar** to adjust its properties (direction, speed, fonts, colors, background).  

:::caution
Selecting a ticker by clicking on the canvas may not work correctly. Select the ticker from the object tree instead.
:::

## Timing Properties

| **Ticker Type** | **Property**   | **Description** |
|-----------------|----------------|-----------------|
| **Crawl**       | Crawl Speed    | Adjusts the speed of horizontal movement independent of text or ticker size. |
| **Scroll**      | Duration       | Defines how long the scroll effect takes. |
| **Scroll**      | Delay          | Adds a delay before the text starts moving. |

- **Play/stop control** – Each ticker can be controlled separately.  

## Ticker Content

Tickers can contain **multiple text entries** that are either:  

- **fixed** (entered manually), or  
- **dynamic** (loaded from a data source, e.g. JSON feed). See [Data Source & API Control](/main-features/data-source-api-control/) for details.

## Deleting a Ticker

1. **Right-click** on the ticker in the **objects tree**.
2. Select **Delete** from the menu.

## TL;DR

- Two ticker types: **Crawl** (horizontal) and **Scroll** (vertical).
- Crawl supports continuous and staggered modes. Scroll supports up, down, and up & down.
- Create tickers from the **Left Sidebar**. Edit properties in the **Right Sidebar**.
- Ticker content can be fixed (manual) or dynamic (from a data source).
- Select tickers from the **object tree**, not by clicking on the canvas.
