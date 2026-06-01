---
title: Built-in Test App
description: Simulate API inputs and test graphic behavior before playout.
---

The Test App allows you to **simulate API inputs** and preview how graphics behave under different conditions — without requiring a playout or automation system.

:::note
The Built-in Test App is available in **Free and Unlimited** plans.
:::

## Opening the Test App

1. In the Editor, click the **Test App** button in the main toolbar (top bar).
2. The Test App opens in a new panel showing the current graphic.

<!-- ![TODO: screenshot of Test App button in toolbar and the Test App panel](../../../assets/assets/test-app-overview.png) -->

## Testing text fields

The Test App displays all text fields marked as **isTextEditable**. For each field:

1. Type a custom value directly in the input box.
2. The graphic preview updates immediately.

### Random text generation

Click the **randomize** button next to a text field to generate random strings. Set the **word count range** (min–max) to control the length.

This is useful for stress-testing layouts — checking that text wrapping, fitting, and overflow behave correctly with both short labels and long names.

## Testing images

For image fields marked as **isImageEditable**:

1. Enter a new image URL in the input box.
2. The graphic preview updates with the new image.

Test with images of different aspect ratios and resolutions to verify that **background-size** (`cover` / `contain`) and **background-position** work as expected.

## Testing tickers

If the graphic contains ticker objects with data-bound content:

1. Edit the ticker entries in the Test App.
2. Verify that scrolling/crawling updates correctly with the new text.

## Testing playback

The Test App includes playback controls:

- **Play** / **Pause** — test the full animation sequence.
- **Timeline scrubbing** — drag the playhead to preview specific moments.
- Use this to verify that **labels** (pause, jump, refresh) trigger correctly.

## Best practices

- Test with both **short and long text values** to confirm that layouts remain consistent.
- Use **randomized content generation** to quickly stress-test tickers and text objects.
- Preview image replacement with different **resolutions and aspect ratios**.
- Test the full animation cycle: intro → pause label → continue → outro.
- Check **edge cases**: empty text, very long single words (no spaces), missing images.

<!-- *TODO: Doplnit — Martina:*

- *Dá se v Test App testovat i styling (barvy, fonty), nebo jen text a obrázky?*
- *Zobrazuje Test App data z Data Source, nebo jen editable fields?*
- *Existuje možnost importovat testovací data z JSON (bulk test)?* -->

## TL;DR

- Open the Test App from the **main toolbar** in the Editor.
- Test **text fields** by typing values or using random text generation.
- Test **images** by entering new URLs.
- Use **playback controls** to verify the full animation cycle.
- Stress-test with randomized content to catch layout issues before going live.

