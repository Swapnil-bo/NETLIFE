<div align="center">
```
███╗   ██╗███████╗████████╗██╗     ██╗███████╗███████╗
████╗  ██║██╔════╝╚══██╔══╝██║     ██║██╔════╝██╔════╝
██╔██╗ ██║█████╗     ██║   ██║     ██║█████╗  █████╗  
██║╚██╗██║██╔══╝     ██║   ██║     ██║██╔══╝  ██╔══╝  
██║ ╚████║███████╗   ██║   ███████╗██║██║     ███████╗
╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚═╝╚═╝     ╚══════╝
```

### *Your Life. Dramatized. Streamed. Forever.*

<br/>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Ollama](https://img.shields.io/badge/Ollama-Local_AI-E50914?style=for-the-badge)](https://ollama.ai)
[![Mistral](https://img.shields.io/badge/Mistral_7B-Instruct-FF6B35?style=for-the-badge)](https://mistral.ai)
[![License](https://img.shields.io/badge/Cost-Free_Forever-22C55E?style=for-the-badge)](#)

<br/>

> **Drop 5 details about your life.**
> **Get back a full Netflix Original Series concept.**
> **Powered entirely by AI running on your own machine.**

<br/>

---

</div>

## 🎬 What is NETLIFE?

NETLIFE is a **local-first AI application** that transforms the raw, chaotic, beautiful mess of your real life into a complete Netflix show concept — in under 60 seconds.

No cloud. No API keys. No subscription. No data leaving your device. Just you, a local language model, and the dramatic series your life always deserved.

---

## ✨ What Gets Generated

Feed it your name, your job, your city, your biggest quirk, and one dramatic moment. What comes back is a **complete cinematic press kit**:

| Section | What You Get |
|---|---|
| 🎭 **Show Identity** | Title, tagline, genre, Netflix rating, content warnings |
| 📖 **The Logline** | A two-sentence hook that sells your entire life |
| 👤 **Protagonist Bio** | Your fictional alter-ego — age, fatal flaw, dark secret |
| 🎬 **Supporting Cast** | 3 fully fleshed characters with roles and descriptions |
| 🌀 **Season 1 Arc** | Complete 3-act breakdown — Setup, Confrontation, Resolution |
| 📋 **Episode Guide** | 8 episodes with dramatic titles and descriptions |
| 🎥 **Trailer Script** | A ready-to-share voiceover script for your official trailer |
| 💾 **My Shows Gallery** | Every show you've ever generated, saved and viewable forever |

---

## 🖥️ The UI Experience

This isn't a form with a text dump. Every screen is designed to feel like you're inside Netflix:

**Landing Page** — Floating show posters rising in the background. Mouse-tracking spotlight. Live trending ticker. Genre cycling animation. A featured "Untitled Series — Starring: You" card.

**Input Form** — Slides up from the bottom like a native app sheet. Live completion ring. Field-by-field focus animations. Dramatic casting room aesthetic.

**Loading Screen** — A full cinematic clapperboard with your name in the DIRECTOR slot. Live 24fps timecode. REC indicator. Production stage checklist. Animated progress glow.

**Show Card** — A scrollable Netflix press kit. Protagonist card with spinning avatar ring. Three-column season arc. Episode guide with hover reveals. Screenplay-format trailer script with one-click copy.

---

## 🔒 Why Local AI?

| | NETLIFE | Cloud AI Apps |
|---|---|---|
| **Cost** | ✅ Free forever | ❌ Pay per token |
| **Privacy** | ✅ Zero data leaves device | ❌ Sent to remote servers |
| **Speed** | ✅ No network latency | ❌ Depends on internet |
| **API Key** | ✅ Not required | ❌ Required |
| **Works Offline** | ✅ Yes | ❌ No |

---

## ⚡ Tech Stack
```
┌─────────────────────────────────────────────┐
│                   NETLIFE                   │
├─────────────────────────────────────────────┤
│  Frontend     React 19 + Vite 6             │
│  Styling      Tailwind CSS + Custom CSS     │
│  Fonts        Bebas Neue + DM Sans          │
│  AI Engine    Ollama → Mistral 7B Instruct  │
│  Storage      localStorage (zero backend)   │
│  Animations   Pure CSS keyframes            │
└─────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [Ollama](https://ollama.ai) installed and running

### Step 1 — Pull the model
```bash
ollama pull mistral:7b-instruct
```

> This downloads ~4.4GB once. After that, everything runs locally forever.

### Step 2 — Clone the repo
```bash
git clone https://github.com/Swapnil-bo/Netflix-Life-Series.git
cd Netflix-Life-Series/netflix-life-series
```

### Step 3 — Install dependencies
```bash
npm install
```

### Step 4 — Start Ollama
```bash
ollama serve
```

> Keep this running in a separate terminal.

### Step 5 — Launch the app
```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** and create your show. 🎬

---

## 📁 Project Structure
```
netflix-life-series/
├── src/
│   ├── components/
│   │   ├── InputForm.jsx       # Cinematic casting form (slides up from bottom)
│   │   ├── LoadingScreen.jsx   # Film production clapperboard loader
│   │   ├── ShowCard.jsx        # Full Netflix press kit output UI
│   │   └── MyShows.jsx         # Saved shows gallery with localStorage
│   │
│   ├── utils/
│   │   ├── ollama.js           # Ollama API client + structured JSON prompt
│   │   └── storage.js          # localStorage save/load/delete helpers
│   │
│   ├── App.jsx                 # Root — hero landing, state, routing
│   ├── App.css                 # All styles (2000+ lines, god mode)
│   └── main.jsx                # Entry point
│
├── .env.example                # Environment variable reference
├── tailwind.config.js
└── vite.config.js
```

---

## 🎭 Sample Output

> *Input: AI Engineer, Chennai, debugs at 3am, quit job for AI startup*
```
SHOW TITLE    →  "MIDNIGHT VISIONARY"
TAGLINE       →  "Where the line between man and machine blurs."
GENRE         →  Drama, Sci-Fi, Tech Thriller
RATING        →  TV-MA
CONTENT       →  Strong language, Thematic elements, Intense work stress

EPISODE 01    →  "3am Revelations"
EPISODE 02    →  "The Prodigal Son Returns"  
EPISODE 03    →  "Rivalry Unleashed"
...
EPISODE 08    →  "A Future Unveiled"

TRAILER       →  "Deep in the heart of Chennai, one engineer works
                  tirelessly — building the future with AI. But as he
                  pushes technology to its limits, he risks losing
                  everything that matters..."
```

---

## 🛠️ How the AI Prompt Works

The core of NETLIFE is a carefully engineered structured prompt that forces Mistral to output strict JSON — no markdown, no explanation, no hallucinated fields:
```
You are a creative Netflix show writer.
Respond ONLY with a valid JSON object.
No backticks. No preamble. Raw JSON only.

{
  "show_title": "...",
  "tagline": "...",
  "genre": "...",
  ...
}
```

Combined with Ollama's `format: "json"` parameter, this achieves near-perfect structured output from a 7B model running entirely on consumer hardware.

---

## 🗺️ Roadmap

- [x] Hero landing page with floating posters
- [x] Cinematic input form
- [x] Clapperboard loading screen
- [x] Full Netflix press kit output
- [x] My Shows gallery with localStorage
- [x] God mode mobile responsive UI
- [ ] Export show as PDF press kit
- [ ] Share show as public link
- [ ] Season 2 generator for existing shows
- [ ] Switch between Mistral / Qwen / LLaMA models

---

## 👨‍💻 Built By

**Swapnil Hazra** — AI Engineer building in public.

Part of my **#100DaysOfVibeCoding** challenge — shipping one AI project every day using local models, React, FastAPI, LangChain, and whatever else it takes.

[![X](https://img.shields.io/badge/Follow_@SwapnilHazra4-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/SwapnilHazra4)
[![Instagram](https://img.shields.io/badge/Follow_@swapnil__hazra__-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/swapnil_hazra_)
[![GitHub](https://img.shields.io/badge/GitHub-Swapnil--bo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Swapnil-bo)

---

## ⭐ If This Made You Smile

Give it a star. Share your generated show on X and tag me.
I want to see what Netflix series your life deserves. 🎬

---

<div align="center">

*Generated locally · No data left your device · Powered by Mistral 7B*

**NETLIFE** — *Your Life. Dramatized.*

</div>