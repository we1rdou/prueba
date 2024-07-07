import { IncomingMessage, ServerResponse } from 'http';
import { getPreparaciones, getPreparacionById, createPreparacion, updatePreparacion, deletePreparacion } from '../services/preparacionService';

export const handleGetPreparaciones = (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(getPreparaciones()));
};

export const handleGetPreparacionById = (req: IncomingMessage, res: ServerResponse, idpreparacion: number) => {
  const preparacion = getPreparacionById(idpreparacion);
  if (preparacion) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(preparacion));
  } else {
    res.statusCode = 404;
    res.end('Preparacion not found');
  }
};

export const handleCreatePreparacion = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newPreparacion = createPreparacion(JSON.parse(body));
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(newPreparacion));
  });
};

export const handleUpdatePreparacion = (req: IncomingMessage, res: ServerResponse, idpreparacion: number) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const updatedPreparacion = updatePreparacion(idpreparacion, JSON.parse(body));
    if (updatedPreparacion) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(updatedPreparacion));
    } else {
      res.statusCode = 404;
      res.end('Preparacion not found');
    }
  });
};

export const handleDeletePreparacion = (req: IncomingMessage, res: ServerResponse, idpreparacion: number) => {
  if (deletePreparacion(idpreparacion)) {
    res.statusCode = 204;
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Preparacion not found');
  }
};
