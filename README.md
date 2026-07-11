# La Sala de IA · Asegura tu silla

Landing con **checkout embebido de Stripe** (el pago ocurre en un modal, sin salir de la página).

## Desplegar en Vercel (una sola vez)

1. Entra a https://vercel.com → **Add New… → Project** → importa el repo `la-sala-asegura-tu-silla`.
2. En **Environment Variables** agrega:
   - `STRIPE_SECRET_KEY` = tu clave **secreta** de Stripe (`sk_live_…`)
   - `STRIPE_PUBLISHABLE_KEY` = tu clave **pública** de Stripe (`pk_live_…`)
3. **Deploy**. Vercel te da una URL `…vercel.app` (o conecta tu dominio).

Si el backend no está disponible, el botón **cae de vuelta** al Payment Link de Stripe automáticamente (nada se rompe).
