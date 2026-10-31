# FoodBridge Triangle 🌿

**Find local food support and a clear next step, with Gemma 4.**

Built for Hack for Humanity: Raleigh · Food Insecurity and Community Resource Mapping.

[Open the live demo](https://foodbridge-triangle-ben.wintrytitan1025.chatgpt.site) · [Project story and demo script](SUBMISSION.md) · [MIT license](LICENSE)

Presentation slide deck: https://docs.google.com/presentation/d/1SKRDBxWsg2yZY7TzFvxSRx41fzDBed4p/edit?slide=id.p11#slide=id.p11
Youtube Video:https://www.youtube.com/watch?v=nQb6bXYmn6c

![Gemma answering a food-resource question](FoodBridge-demo.jpg)

## For judges

1. Open the live demo and filter **Groceries**.
2. Select **Wake Relief → Show on map**, expand requirements, and save it.
3. Open **My plan** to see saved resources and the print option.
4. Try **Support guide** with a transportation need.
5. Open **Community helper** and ask **“What should I bring to Wake Relief?”**

The public demo needs no visitor API key. It uses Google-hosted **Gemma**, model `gemma-4-26b-a4b-it`. The application code, tests, and resources are directly browsable in this repository. The earlier source ZIP is retained as a historical snapshot; use the current source tree for development.

## What works

- Seven source-attributed resources: four physical Raleigh food services and three directory/benefits resources.
- Search by name or listed address, category filters, selected-location map, and directions.
- Published requirements, source links, and source-check dates.
- Browser-local saved resource plans and printing.
- A deterministic support guide covering food needs, residency, and transportation uncertainty.
- A source-grounded Gemma helper with useful API failure states.

This prototype does not determine official benefits eligibility, verify live food inventory, confirm transportation, or submit applications. Search matches addresses rather than distance or service-area boundaries. Call providers to confirm before traveling.

## Run from source

Use **Node.js 22.13+** (Node 24 recommended) and pnpm **11.25.0**.

```sh
git clone https://github.com/benedictisaac-4/foodbridge-triangle.git
cd foodbridge-triangle
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed in the terminal (normally http://localhost:5173). No API key is required for browsing resources or using the support guide.

### Enable Gemma locally (optional)

Get your own Google AI Studio key. `.env.example` lists names only; export the variable in your terminal before starting the app.

**macOS/Linux**

```sh
export GEMMA_API_KEY="your-own-key"
export GEMMA_MODEL="gemma-4-26b-a4b-it"
pnpm dev
```

**Windows PowerShell**

```powershell
$env:GEMMA_API_KEY="your-own-key"
$env:GEMMA_MODEL="gemma-4-26b-a4b-it"
pnpm dev
```

Restart the server after changing configuration. Never commit a real key or use a `NEXT_PUBLIC_` variable for it. For hosted deployments, configure these names as server-side secrets and redeploy. Google API documentation: https://ai.google.dev/gemma/docs/core/gemma_on_gemini_api

### Validate

```sh
pnpm test
pnpm build
```

Nine core checks cover resource integrity, server-side secret handling, cross-origin requests, oversized requests, model response parsing, and provider failures. Tests mock the model API, require no key, and do not measure model accuracy. A portable production build was also checked with the installed dependency set. The live Gemma helper was separately tested in-browser.

## Architecture and source guide

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Resource finder, saved plan, support guide, and AI helper UI |
| `app/api/helper/route.ts` | Server-only Google API request and fallback handling |
| `lib/resources.ts` | Curated provider records and source-check date |
| `app/globals.css` | Responsive layout, focus states, and print styles |
| `tests/core.test.mjs` | Core checks using Node's built-in test runner |
| `vite.config.ts`, `worker/index.ts` | Vinext / Cloudflare Worker build |
| `SUBMISSION.md` | Project narrative and 90-second demo |

Browser → same-origin API endpoint → curated records and constrained prompt → Google-hosted Gemma → plain-text response. The directory and support guide operate without the AI API. Maps use Google Maps. The project retains framework starter components and tooling alongside the application.

## Data, privacy, and limitations

Records were checked against official provider pages on **October 31, 2026**. This is a small curated directory, not a provider partnership or complete county inventory. A source-check date is not a confirmation that food is available today. Every record links to its source.

The app does not persist questions or applicant profiles. Saved resource IDs remain in the browser's localStorage. When a visitor asks the connected AI helper, the question and resource context are sent to Google. Avoid sharing sensitive personal information. External map requests are handled by Google Maps. Source grounding reduces but does not eliminate inaccurate model output; verify against provider sources.

Durable abuse prevention, provider-managed updates, broader data coverage, and multilingual quality evaluation remain future work. The public prototype is for demonstration, not a production benefits service.

## Open-source and AI disclosure

Application code is **MIT licensed**. Third-party code and model/API usage retain their own terms; the application license does not relicense Gemma weights or provider website content. Third-party notices are retained under `vendor/` and `scripts/vite/`.

Created during the October 31, 2026 hackathon with ChatGPT/Codex-assisted implementation and a starter framework. **Gemma 4 powers the running community helper.** No model training or fine-tuning was performed. Inference uses Google's API, not DigitalOcean inference.

Contributions: use official sources, include a source-check date, and do not add unverified availability or rules. Do not submit applicant personal information or API keys.
