# FoodBridge Triangle — Hackathon submission

## Project name
FoodBridge Triangle

## Tagline
Find local food support and a clear next step, with Gemma 4.

## Focus area
Food Insecurity and Community Resource Mapping

## Links
- Live application: https://foodbridge-triangle-ben.wintrytitan1025.chatgpt.site
- Public source repository: https://github.com/benedictisaac-4/foodbridge-triangle
- License: MIT for the application code; third-party licenses and model/API terms remain separate.
- Full source: clone the repository; application code is directly browsable. The ZIP is an earlier source snapshot.

## Short description
FoodBridge Triangle helps Raleigh and Wake County residents find food resources, understand published access requirements, and make a next-step plan. It combines a sourced resource directory, location map, saved plans, a structured support guide, and a Gemma 4 community helper.

## Inspiration / problem
Finding food assistance involves more than locating a pantry. People also need to understand service areas, schedules, what to bring, and whom to contact. Information is spread across provider websites, and uncertainty can turn into an unsuccessful trip. We focused on making these next steps clearer while preserving dignity and avoiding unnecessary collection of personal information.

## What it does
Residents can browse or search seven resources: four physical services in Raleigh and three directory or benefits resources. Each listing includes its official source and source-check date. A selected-location map links to directions. Users can save resource cards in a browser-local plan and print them. The support guide asks about the type of food help, Wake County residency, and transportation needs. It explains published requirements and uncertainty without making official eligibility decisions.

The Gemma community helper accepts everyday-language questions and returns guidance grounded in the same curated records. FoodBridge does not claim to know live food stocks, transportation availability, or whether someone is officially eligible for benefits.

## How we built it
React and TypeScript provide the responsive interface, with Vinext/Vite and a Cloudflare Worker-compatible server. A same-origin server endpoint calls Google's Gemini API using the open-weight Gemma model gemma-4-26b-a4b-it. The application passes curated resource records and constraints into the prompt. Model reasoning is minimized for short practical answers, and failed API requests leave the directory usable.

The Google AI Studio key is held in a server-side secret, excluded from the browser bundle and repository. No model training or fine-tuning was performed. The app uses Google-hosted Gemma; it is not running on DigitalOcean inference. Implementation was assisted by ChatGPT/Codex using an existing framework starter. The project team selected the community problem and reviewed the prototype.

## Challenges
The main challenges were keeping advice traceable to provider sources, separating preliminary navigation from official eligibility decisions, and getting model response times suitable for a live demo. The model integration was adjusted after a timeout, then successfully tested on the deployed app.

## What we accomplished / validation
- A deployed public prototype and public MIT-licensed source package.
- Official-source attribution for every directory record.
- Nine automated core checks covering directory integrity, server-side key handling, request restrictions, successful model responses, and provider error fallbacks.
- A successful production build, plus a portable build from a clean source copy using the installed dependency set.
- Browser checks for saving a resource, transportation guidance, map display, and a successful live Gemma answer.

## What we learned
A useful community AI tool needs reliable local records and clear next actions as much as a capable model. Explaining what is known, what needs confirmation, and whom to call is more valuable than an unsupported yes/no eligibility result.

## What's next
Expand the directory through provider partnerships, add provider-reviewed updates, improve transportation-aware discovery, and evaluate multilingual responses with community members. Before broader rollout, add durable rate limiting and a documented data refresh process. No live inventory or automated official eligibility decisions are included in this prototype.

## 90-second demo script
1. Introduce the problem: a Raleigh resident needs food support but does not know where to start.
2. Open Find food, filter Groceries, and select Wake Relief on the map.
3. Expand requirements, show the official source and check date, and save the resource.
4. Open My plan to show the saved card and print option.
5. Open Support guide, choose transportation help, and show the explicit need to confirm transport.
6. Open Community helper and ask: “What should I bring to Wake Relief?”
7. Show the answer and source links. End with: “FoodBridge turns a confusing search into a local map and a clear next step.”


