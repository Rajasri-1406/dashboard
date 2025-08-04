const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow only your Vercel frontend
app.use(cors({
  origin: "https://dashboard-iota-ochre.vercel.app"
}));

app.use(express.json());
app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
