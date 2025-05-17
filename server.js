// server.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { runMission } = require('./index'); // Adjust as needed

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (if you have frontend in /public)
app.use(express.static(path.join(__dirname, 'public')));

// Simple health check
app.get('/', (req, res) => {
  res.send('🧠 i83 operational. Awaiting command.');
});

// Optional API route example
app.get('/api/ping', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

// Launch the server
app.listen(PORT, () => {
  console.log(`✅ i83 Server is live on port ${PORT}`);
});
app.post('/api/mission', express.json(), async (req, res) => {
  const { prompt } = req.body;
  try {
    await runMission(prompt);
    res.json({ success: true, message: '🚀 Mission triggered.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
// Trigger your mission/agent/brain function
runMission?.(🚀 Mission: Complete and Deploy GA Dashboard

🎯 Goal:
Finalize, fix, and fully deploy the GA Dashboard analytics platform. Ensure all frontend components function, backend APIs respond correctly, and visual polish meets modern design standards.

🧩 Tasks:
1. Finalize and render radar-style world map background with animated SVG radar sweep and pulsing blue dots based on geo activity.
2. Ensure Chart.js displays a responsive, animated multi-line graph of pagePath traffic.
3. Render Top Pages list with pagePath and view count.
4. Render Session Metrics: avg session time, bounce rate, engaged sessions, total sessions.
5. Fetch and render real-time geo data (active users by country) and live active user count.
6. Add radar ping crawler for mentions of "Gary Gabel" or "The Constitution Kids" (Google search-based, daily update at 8am).
7. Implement dark/light theme toggle.
8. Animate all charts and maps with smooth transitions, gradients, and glow effects.
9. Enable "Check Radar" button to manually reload pings from `/api/radar/google`.
10. Host on DigitalOcean App Platform and ensure `.env` variables are set:
    - `GA_CREDENTIALS_PATH`
    - `GA_PROPERTY_ID`
    - `OPENAI_API_KEY`

✅ Constraints:
- Clean UI/UX (dark mode default)
- Responsive on desktop/tablet
- Secure: no exposed secrets, GA keys in `.env` only
- Push-ready GitHub repo (`main` branch)

🎯 Success Criteria:
- All frontend components visually load and update
- Backend routes respond with live analytics data
- No console errors in browser or terminal
- Deployment passes health checks and is publicly live

🗂 Output Expected:
- `/public/index.html`
- `/public/style.css`
- `/public/script.js`
- `/server.js` updated
- `/api/*` routes functional
- `.env` structure documented

⏱️ Deadline: Immediate execution`); // Call your AI logic here