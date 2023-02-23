const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Just for testing:
app.get('/', (req, res) => {
  res.send('Welcome to this little PPC!');
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
