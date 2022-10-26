import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../../.env' });
const port = process.env.PORT || 3004;
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});
