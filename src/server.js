require('dotenv').config();
const app = require('./app');

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Servidor online na porta ${PORT}`);
});