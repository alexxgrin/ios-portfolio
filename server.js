const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.get('/apps/parking-share', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/apps/parking-share.html'));
});

app.get('/apps/dog-schedule', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/apps/dog-schedule.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
