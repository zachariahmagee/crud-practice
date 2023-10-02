import express, { json } from 'express';
import router from './src/routes/items.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});