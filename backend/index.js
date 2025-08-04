const express = require('express');
const cors = require('cors');

// ⛳ Corrected path
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
