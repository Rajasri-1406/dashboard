const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');


const app = express();

app.use(cors());
app.use('/api', apiRoutes); // => /api/user and /api/leaderboard

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
