const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
//   res.render('landing.ejs');
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', function () {
    throw new Error('Requested resource not found');
  });
}

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
// app.listen(port, () => console.log(`listening on - http://localhost:${port}`));
