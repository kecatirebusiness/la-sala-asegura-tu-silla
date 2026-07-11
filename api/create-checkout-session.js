// Crea una sesión de Checkout EMBEBIDO ($50 de depósito) y devuelve el clientSecret.
const Stripe = require('stripe');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) { res.status(500).json({ error: 'Falta la variable STRIPE_SECRET_KEY' }); return; }
    const stripe = new Stripe(key);
    const origin = req.headers.origin || (req.headers.host ? 'https://' + req.headers.host : '');
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: 5000,
          product_data: {
            name: 'Deposito - La Sala de IA - Generacion 01',
            description: 'Aparta tu silla. Se abona completo a tu inscripcion.'
          }
        },
        quantity: 1
      }],
      return_url: origin + '/?pago=ok&session_id={CHECKOUT_SESSION_ID}'
    });
    res.status(200).json({ clientSecret: session.client_secret });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
