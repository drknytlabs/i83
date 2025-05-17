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
runMission?.(); // Call your AI logic here