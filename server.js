const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use('/', express.static(`${__dirname}/dist`));

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));