import express from 'express';
import server from './routes';

const app = express();

app.use(express.json());
app.use(server);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
