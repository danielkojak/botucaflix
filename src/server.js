require('dotenv').config();

const app = require('./app');

const PORT = process.env.DEV_DB_PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));