import { Hono } from 'hono'
import { FC } from 'hono/jsx';

const Layout: FC = () => {
  return (
    <p>testing jsx</p>
  )
}

export type Bindings = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>()

app.get('/oauth/trmnl/new', async (c) => {
  const { code, installation_callback_url } = c.req.query()

  if (!code || !installation_callback_url) {
    return c.json({ error: 'Missing code or installation_callback_url' }, 400)
  }

  const response = await fetch('https://usetrmnl.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
      client_id: c.env.CLIENT_ID,
      client_secret: c.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
    }),
  })

  const data = await response.json()

  console.log("Installing trmnl integration", data)

  if (response.status !== 200) {
    return c.json({ error: 'Failed to exchange code for token' }, 500)
  }

  return c.redirect(installation_callback_url)
})

app.get('/oauth/trmnl/install', (c) => {
  return c.json({ error: 'not implemented' })
})

app.get('/integrations/trmnl/markup', (c) => {
  return c.html(<Layout />)
})

app.get('/hooks/trmnl/uninstall', (c) => {
  const body = c.req.json()

  console.log("uninstalling trmnl integration", body)

  return c.json({ message: 'ok' })
})

app.get('/', (c) => {
  return c.json({ message: 'Hi TRMNL' })
})

export default app
