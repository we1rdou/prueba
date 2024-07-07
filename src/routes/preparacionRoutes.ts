import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { handleGetPreparaciones, handleGetPreparacionById, handleCreatePreparacion, handleUpdatePreparacion, handleDeletePreparacion } from '../controllers/preparacionController';

export const preparacionRoutes = (req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req;
  const parsedUrl = parse(url as string, true);
  const path = parsedUrl.pathname;

  if (path === '/preparaciones' && method === 'GET') {
    handleGetPreparaciones(req, res);
  } else if (path?.startsWith('/preparaciones/') && method === 'GET') {
    const idpreparacion = parseInt(path.split('/')[2]);
    handleGetPreparacionById(req, res, idpreparacion);
  } else if (path === '/preparaciones' && method === 'POST') {
    handleCreatePreparacion(req, res);
  } else if (path?.startsWith('/preparaciones/') && method === 'PUT') {
    const idpreparacion = parseInt(path.split('/')[2]);
    handleUpdatePreparacion(req, res, idpreparacion);
  } else if (path?.startsWith('/preparaciones/') && method === 'DELETE') {
    const idpreparacion = parseInt(path.split('/')[2]);
    handleDeletePreparacion(req, res, idpreparacion);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};
