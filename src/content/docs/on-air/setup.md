---
title: On Air Setup
description: How to access, configure, and deploy Tweenly On Air for live broadcast control.
---

*This page covers how to get On Air running and connected to your broadcast environment.*

## Accessing On Air

On Air is a separate web application from the Tweenly Editor. It requires a Tweenly account.

<!-- *TODO: Doplnit konkrétní informace — Martina, prosím vyplň:*

- *Jaká je URL On Air instance? Je to `onair.tweenly.io`, nebo má každý zákazník vlastní URL?*
- *Je On Air SaaS (cloud-hosted), nebo self-hosted? Nebo obojí?*
- *Vyžaduje On Air nějakou instalaci nebo konfiguraci na straně zákazníka?*
- *Jaké jsou system requirements pro On Air (prohlížeč, OS, síťové požadavky)?* -->

## Login and permissions

On Air uses the same Tweenly account as the Editor. Log in with your existing credentials.

<!-- *TODO: Doplnit:*

- *Mají všichni uživatelé přístup do On Air, nebo jen určité role/licence?*
- *Potřebuje operátor Unlimited licenci, nebo stačí Free?*
- *Existují v On Air specifické role (operator, admin)?* -->

## Connecting to broadcast outputs

On Air sessions represent broadcast outputs — each session corresponds to one channel or playout instance.

<!-- *TODO: Doplnit:*

- *Jak se vytvoří nová session? V On Air UI, nebo v backendu/konfiguraci?*
- *Jak se session mapuje na konkrétní broadcast output (CasparCG instance, OBS scene, NDI output)?*
- *Je potřeba konfigurovat nějaký endpoint nebo connection string?* -->

## Network requirements

<!-- *TODO: Doplnit:*

- *Jaké porty/protokoly On Air používá?*
- *Funguje On Air za firemním firewallem/proxy?*
- *Jaká je minimální požadovaná šířka pásma?*
- *Podporuje On Air offline režim, nebo vyžaduje stálé připojení?* -->

## First-time setup checklist

Before going live for the first time, verify:

1. You can log in to On Air in your browser.
2. At least one session is available and active.
3. Graphics are marked as **Final** in the Editor (only Final graphics appear in On Air).
4. Editable fields are configured — **isTextEditable** / **isImageEditable** enabled on the right objects.
5. Timeline labels are set up (pause after intro, pause before outro).

<!-- *TODO: Doplnit další kroky specifické pro deployment — Martina:*

- *Je potřeba něco konfigurovat v backendu (API, sessions)?*
- *Existuje admin panel pro správu sessions a outputů?* -->

## Next steps

- [On Air Overview](/on-air/overview/) — interface layout and controls
- [Sessions & Multi-Output](/on-air/sessions/) — managing multiple broadcast sessions
- [From Design to Broadcast](/getting-started/design-to-broadcast/) — end-to-end workflow
