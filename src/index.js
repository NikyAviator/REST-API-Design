// In src/index.js
const express = require('express');
// *** AND *** STEP 2:
const v1Router = require('./v1/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// STEP 2, Test v1 router, base url is /api/v1 and then v1Router:
app.use('/api/v1', v1Router);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
