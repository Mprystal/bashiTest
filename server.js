const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('/build'));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
// app.listen(port, () => console.log(`listening on - http://localhost:${port}`));
