import { createServer } from 'http';
import { preparacionRoutes } from '../routes/preparacionRoutes';

export const startServer = () => {
  const server = createServer((req, res) => {
    preparacionRoutes(req, res);
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
};
