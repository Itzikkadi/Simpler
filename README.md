# Simpler — Sampling, simplified. 🎛

AI-powered vocal sample discovery platform for music producers.

Upload your track → get matched vocals instantly → hear them inside the platform → decide on rights → done.

## Live Demo
- Frontend: [simpler-qe00e5dii-simpler1.vercel.app](https://simpler-qe00e5dii-simpler1.vercel.app)
- Backend API: [simpler-backend-v3.vercel.app/api/search?q=vocal+shout](https://simpler-backend-v3.vercel.app/api/search?q=vocal+shout)

## What it does
- 🎵 Upload your track → auto-detects BPM, key, mood, density
- 🎛 Upload a reference track → algorithm learns your vibe
- 🔍 Search 500k+ vocal samples from Freesound (CC0)
- ⚖️ Rights radar — PD / CC0 / Clearable / Risky — you decide
- ▶️ Built-in player — hear everything without leaving the platform
- 📦 Sort by: Most Relevant · Most Popular · Newest · Most Obscure

## Project Structure
```
simpler/
├── frontend/
│   └── index.html        # Full web app (HTML + CSS + JS)
├── backend/
│   ├── api/
│   │   └── search.js     # Freesound API proxy (Vercel serverless)
│   ├── vercel.json
│   └── package.json
└── README.md
```

## Setup

### Backend (Vercel)
1. Deploy `backend/` folder to Vercel
2. The API key is included for development — replace with env variable for production:
   ```
   FREESOUND_API_KEY=your_key_here
   ```
3. Your backend URL will be: `https://your-project.vercel.app/api/search`

### Frontend
1. Deploy `frontend/` folder to Vercel (or any static host)
2. Update `BACKEND` constant in `index.html` to point to your backend URL:
   ```js
   const BACKEND = 'https://your-backend.vercel.app';
   ```

## Tech Stack
- **Frontend:** Vanilla HTML/CSS/JS (no framework)
- **Backend:** Node.js serverless function on Vercel
- **Audio source:** [Freesound API](https://freesound.org/apiv2/) (CC0 samples)
- **Audio analysis:** librosa (Python) — BPM/key detection
- **AI matching:** Claude API (planned)

## Roadmap
- [ ] Real BPM/key analysis (Essentia)
- [ ] Archive.org + Tracklib integration
- [ ] Ableton Max for Live plugin
- [ ] Social feed — "Used this sample in..."
- [ ] Ad space for music gear brands
- [ ] $4.99/month Pro subscription (Stripe)

## License
MIT

---
Built by Itzik Kadi · [itsakmusic8@gmail.com](mailto:itsakmusic8@gmail.com)
