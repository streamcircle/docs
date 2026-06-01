# Tweenly Documentation Style Guide

> This guide defines conventions for writing and structuring documentation pages.
> All new and updated pages should follow these rules.

---

## 1. What Works Well (keep doing)

Based on analysis of existing pages:

- **Assets page** — best overall structure: intro → types → how it works → managing → best practices → TL;DR
- **Data Source & API Control** — clear step-by-step with numbered steps, good use of admonitions
- **Graphics Files** — logical CRUD flow: create → save → duplicate → clear → delete → export
- **Tickers** — clear type taxonomy at the top, table for properties
- **Export Options** — concise comparison with decision tip

---

## 2. What Needs Fixing (stop doing)

| Problem | Where | Fix |
|---------|-------|-----|
| Empty/stub pages | `objects.md`, `profile-overview.md` | Fill or remove from sidebar |
| Placeholder descriptions | `description: ...` | Always write a real description |
| Duplicated content | Members section in Workspaces appears twice | One source of truth per concept |
| Commented-out blocks | Gallery, Editor Overview, Tickers | Either finish and publish, or delete |
| "Benefits" sections | Code Triggers, Data Source, Test App | Remove — this is docs, not marketing |
| Emoji warnings (🚨) | Workspaces, Data Source | Use `:::caution` admonitions instead |
| Inconsistent summaries | Some have TL;DR, some Key Takeaways, most nothing | Use TL;DR consistently on complex pages |
| Conceptual-only pages | Code Triggers has no step-by-step | Every feature page needs a how-to |
| Heading level skips | Graphics Files starts with H3 under root | Always start content sections with H2 |

---

## 3. Page Structure Template

Every documentation page follows this skeleton. Not every section is required — use what fits the topic.

```markdown
---
title: [Feature Name]
description: [One sentence — what this page covers and why it matters.]
---

[Intro paragraph — 1-3 sentences. What is this feature? What does it enable?
Bold the key term on first use. No fluff.]

:::note
[Plan availability — if this feature has license restrictions, state them here.]
:::

## [Core Section — named by what the feature IS or DOES]

[Explanation or taxonomy of the feature. If there are types/variants, list them here.]

## Creating a [Feature]

1. [Step one — action verb + UI element in bold.]
2. [Step two.]
3. [Step three.]

![Descriptive alt text](../../../assets/[section]/[filename].png)

## Editing a [Feature]

[Steps for modifying. Include any side effects or warnings.]

:::caution
[Important limitation or side effect the user must know.]
:::

## Deleting a [Feature]

[Steps for removal. Include conditions (e.g., "can only be deleted if not in use").]

## [Feature-Specific Section]

[Additional sections as needed — properties table, advanced usage, etc.]

| **Property** | **Description** |
|-------------|----------------|
| **Name** | What it controls. |

## TL;DR

- [Key takeaway 1.]
- [Key takeaway 2.]
- [Key takeaway 3.]
```

---

## 4. Frontmatter Rules

```yaml
---
title: Assets                           # Short, clear — the feature name
description: How to manage reusable     # One sentence, starts with "How to..."
  media elements across workspaces.     # or "Overview of..." — no "..."
---
```

- `title`: The feature/topic name. Sentence case. No "Overview of..." in title.
- `description`: One actionable sentence. Never leave as `...` or empty.

---

## 5. Writing Rules

### Voice & Tone

- **Instructional, direct, professional.** Not marketing.
- Write as a knowledgeable peer, not a teacher or salesperson.
- Action-oriented: tell the user what to DO, not what they CAN do.

| Do | Don't |
|----|-------|
| "Click **Save** to store your changes." | "You can save your changes by clicking Save." |
| "Data Sources load external data into graphics." | "Data Sources are a powerful feature that allows you to dynamically load external data." |
| "Enter a URL pointing to a JSON or XML file." | "You'll want to enter the URL of your data source here." |

### Things to Avoid

- **No "Benefits" sections.** Benefits belong on the marketing site, not in docs.
- **No filler words**: "powerful", "easily", "simply", "just", "very".
- **No passive hedging**: "You might want to...", "It is possible to...".
- **No emoji** in body text. Use admonitions for warnings/tips.
- **No marketing language**: "cutting-edge", "seamless", "game-changing".

### Sentence Structure

- Lead with the action: "Open the **Gallery**" not "The Gallery can be opened by..."
- One instruction per step in numbered lists.
- Keep sentences short. If a sentence has a comma and "and", consider splitting it.

---

## 6. Formatting Conventions

### UI Elements

Use **bold** for anything the user sees in the interface:

- Buttons: **Save**, **Delete**, **Next**
- Panel names: **Left Sidebar**, **Right Sidebar**, **Objects Panel**
- Menu items: **More** menu, **Export HTML**
- Dialog titles: **Canvas Settings**
- Navigation paths: **Right Sidebar > Text & Font section**

### Code & Technical Values

Use `backticks` for:

- Data formats: `JSON`, `XML`
- File formats: `png`, `jpg`, `svg`
- Code values: `{slug/custom-name}`
- Keyboard shortcuts: `Cmd/Ctrl + S`
- URLs and file paths

### Headings

- **H2** (`##`) — Main sections of the page. Every page starts content with H2.
- **H3** (`###`) — Subsections within an H2.
- **H4** (`####`) — Rare. Only for deep subsections (e.g., "First-Time Save" under "Saving").
- Never skip levels (no H2 → H4).
- Heading text: sentence case, action-oriented where possible ("Creating a Data Source", not "Data Source Creation").

### Lists

- **Numbered lists** — for sequential steps (do this, then this).
- **Bullet lists** — for non-sequential items (types, options, properties).
- Start each item with bold key term when listing feature/properties.

### Tables

Use for comparing options, listing properties, or role/permission matrices:

```markdown
| **Property** | **Description** |
|-------------|----------------|
| **Name** | The display name of the data source. |
| **Slug** | A unique identifier across the workspace. |
```

### Screenshots

- Place immediately after the section they illustrate.
- Use descriptive alt text: `![Creating a new text object in the Editor](...)`.
- One screenshot per concept — don't stack multiple without text between them.
- Path convention: `../../../assets/[section-name]/[descriptive-filename].png`

---

## 7. Admonitions

Starlight supports four admonition types. Use them consistently:

### `:::tip` — Best practices, shortcuts, pro tips

```markdown
:::tip
Multiple Data Source attributes can be combined with static text in the same field.
:::
```

### `:::note` — Neutral context, plan availability, background info

```markdown
:::note
This feature is available in both Free and Unlimited plans.
:::
```

### `:::caution` — Important limitations, side effects, "be careful"

```markdown
:::caution
Editing a Data Source affects all graphics files using it in the workspace.
:::
```

### `:::danger` — Destructive actions, data loss, things that cannot be undone

```markdown
:::danger
Deleted graphics files cannot be recovered.
:::
```

**Rules:**
- Maximum 3 admonitions per page. More than that = noise.
- Never use emoji (🚨, ⚠️) as a substitute for admonitions.
- Keep admonition text to 1-2 sentences. If longer, it belongs in the body.

---

## 8. Page Types & What to Include

### Feature Page (e.g., Tickers, Data Source, Image Sequence)

1. Intro paragraph (what + why)
2. Plan availability note (if applicable)
3. Types/variants (if applicable)
4. Creating — step-by-step
5. Editing — step-by-step with side effects
6. Deleting — conditions + steps
7. Properties table (if applicable)
8. TL;DR (if page is long / complex)

### Overview Page (e.g., Editor Overview, Application Overview)

1. Intro paragraph
2. Layout/interface description with labeled screenshot
3. Brief description of each section/panel
4. Links to detailed pages

### Getting Started Page (e.g., Installation, First Graphic)

1. What the user will accomplish
2. Prerequisites
3. Step-by-step walkthrough
4. What to do next (link to next page)

### Release Notes Page

1. Version number + release date
2. New Features (H3 per feature, bold title + 1-2 sentence description)
3. Improvements (bullet list)
4. Bug Fixes (bullet list)

---

## 9. Content Principles

1. **One source of truth** — Each concept is documented in one place. Other pages link to it; they don't duplicate it.
2. **Task-first** — Structure pages around what the user wants to DO, not what panels exist.
3. **Progressive disclosure** — Start simple, add complexity. Basic workflow first, advanced options after.
4. **Show, don't just tell** — Every procedural section needs a screenshot or code example.
5. **Keep it current** — If a feature changes, update the docs in the same release cycle (Phase 2b/2c).
