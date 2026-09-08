# Olamí ORT — Página de Donaciones

Página independiente de donaciones para el Colegio Olamí ORT.
Comparte la base de datos de Supabase con Donekta.

## Setup en Vercel

1. Crea un repo nuevo en GitHub y sube estos archivos
2. En Vercel: New Project → importa el repo
3. Agrega estas variables de entorno:

```
NEXT_PUBLIC_SUPABASE_URL = https://jzyvudqogfrpyzcnnoiv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = (tu anon key de Supabase)
SUPABASE_SERVICE_ROLE_KEY = (tu service role key)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = (tu pk de Stripe)
STRIPE_SECRET_KEY = (tu sk de Stripe)
RESEND_API_KEY = (tu key de Resend)
NEXT_PUBLIC_SITE_URL = https://tu-dominio.vercel.app
```

4. Deploy

## Notas

- Los proyectos se cargan de la tabla `projects` filtrando por `Colegio Olamí ORT`
- Para agregar proyectos, usa el panel de Donekta o SQL directo en Supabase
