import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

// Installation URL
// https://api.oghunt.com/oauth/trmnl/new
//
// Installation Success Webhook URL
// https://api.oghunt.com/oauth/trmnl/install
//
// Plugin Management URL
// https://api.oghunt.com/settings
//
// Plugin Markup URL
// https://api.oghunt.com/integrations/trmnl/markup
//
// Uninstallation Webhook URL
// https://api.oghunt.com/hooks/trmnl/uninstall

app.get('/oauth/trmnl/new', (c) => {
  return c.json({ error: 'not implemented' })
})

app.get('/oauth/trmnl/install', (c) => {
  return c.json({ error: 'not implemented' })
})

app.get('/integrations/trmnl/markup', (c) => {
  return c.json({ error: 'not implemented' })
})

app.get('/hooks/trmnl/uninstall', (c) => {
  return c.json({ error: 'not implemented' })
})

app.get('/', (c) => {
  return c.json({ message: 'Hi TRMNL' })
})

export default app
