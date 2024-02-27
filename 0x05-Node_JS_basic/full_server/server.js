import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
});

export default app;
module.exports = app;
