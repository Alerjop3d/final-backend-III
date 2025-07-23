import totalProducts from '../models/inventary.js'

async function obtenerProductosMiddleware(req, res, next) {
  try {
    const result = await totalProducts.find();
    req.allProducts = result;
    next();
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).send('Error al obtener productos');
  }
}
