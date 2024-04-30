// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

app.use('/', routes);

export default app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
