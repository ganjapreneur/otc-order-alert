# OTC Order Alert 🔔

A Progressive Web App (PWA) that monitors a Gmail inbox for new online orders and blasts a loud repeating alarm until your retail staff acknowledges it.

Built for **Off The Charts Monterey** — works on any phone or tablet when added to the home screen.

---

## How It Works

1. Signs into Gmail via Google OAuth (one-time setup)
2. Polls the inbox every 30 seconds for emails matching a configurable subject line
3. When a match is found → full-screen red alert + repeating alarm sound
4. Staff taps **"I'm On It — Fulfilling Now"** to silence the alarm and mark the email as read
5. Manager settings (alarm sound, timing, subject line) are hidden behind a 6-digit PIN

---

## Setup — 3 Steps

### Step 1: Get a Google OAuth Client ID (free, ~10 min)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project — name it `OTC Order Alert`
3. **APIs & Services → Library** → search `Gmail API` → Enable it
4. **APIs & Services → OAuth consent screen**
   - User Type: **External**
   - App name: `OTC Order Alert`
   - Add your email as a test user
5. **APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID**
   - Application type: **Web application**
   - Authorized JavaScript origins: add your GitHub Pages URL  
     e.g. `https://yourusername.github.io`
6. Copy the **Client ID** — it looks like `123456789-abc...apps.googleusercontent.com`

### Step 2: Add Your Client ID to the App

Open `index.html` and find this line near the top of the `<script>` section:

```js
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE';
```

Replace `YOUR_GOOGLE_CLIENT_ID_HERE` with your actual Client ID. Save the file.

### Step 3: Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `otc-order-alert`)
2. Upload all files from this folder into the repo root
3. Go to **Settings → Pages → Source: Deploy from main branch → / (root)**
4. Your app will be live at:  
   `https://yourusername.github.io/otc-order-alert`

> ⚠️ The app **must** be served over HTTPS for Gmail OAuth and push notifications to work. GitHub Pages provides this automatically.

---

## Adding to Phone Home Screen (PWA)

**iPhone (Safari required):**
- Open the URL in Safari
- Tap the Share button → **Add to Home Screen** → Add
- Opens as a full-screen app with no browser chrome

**Android (Chrome):**
- Open in Chrome → three-dot menu → **Add to Home Screen**

---

## Using the App

### Staff View
- Tap **Start Monitoring** to begin watching for orders
- When an order comes in: full-screen red alert fires automatically
- Tap **"I'm On It — Fulfilling Now"** to silence and mark as read

### Manager Settings (PIN: `420420`)
- Tap **Manager Settings** on the idle screen
- Enter the 6-digit PIN on the numpad
- Configure:
  - **Subject line** to watch for (match your Meadow order emails)
  - **Alarm sound** — 6 styles to choose from with live preview
  - **Alarm duration** — how long the sound plays (1–10 seconds)
  - **Pause between alarms** — silence gap before it repeats (5–60 seconds)
  - **Poll frequency** — how often Gmail is checked (15s–2min)

---

## Alarm Sound Options

| Style | Description |
|-------|-------------|
| 🚨 Urgent Beep | Rapid square-wave emergency tone |
| 🔊 Dual Siren | Sweeping high/low frequency siren |
| 🎵 Store Chime | Ascending pentatonic bell sequence |
| 📣 Buzzer | Deep industrial on/off buzz |
| 💓 Pulse | Double-thump heartbeat pattern |
| 🤖 Digital | Retro 8-bit arpeggio |

---

## Files

```
index.html          — Main app (all screens)
manifest.json       — PWA manifest (makes it installable)
sw.js               — Service worker (offline support + notifications)
register-sw.js      — Service worker registration
icon-192.png        — App icon (192×192)
icon-512.png        — App icon (512×512)
apple-touch-icon.png— iOS home screen icon (180×180)
```

---

## Notes

- The app polls Gmail every 30 seconds by default (configurable)
- Audio requires the app to be open/in foreground on iOS (Apple restriction)
- For always-on use, keep the app open on a dedicated counter tablet with screen sleep disabled
- Acknowledging an order marks the email as read so it won't re-trigger
- Settings persist across sessions via `localStorage`
- Token stored in `sessionStorage` — staff will need to re-authenticate if they clear browser data

---

## Support

Built for OTC Monterey. Questions? Contact your manager.
