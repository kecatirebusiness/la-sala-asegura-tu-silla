// Devuelve la clave PÚBLICA de Stripe (segura de exponer en el frontend).
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ pk: process.env.STRIPE_PUBLISHABLE_KEY || '' });
};
