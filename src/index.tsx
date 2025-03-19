import { Hono } from "hono";
import { renderToString } from "hono/jsx/dom/server";
import { Markup, type Post } from "./markup";

export type Bindings = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", (c, next) => {
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  c.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With",
  );
  return next();
});

const getPosts = async () => {
  const posts = (await fetch("https://oghunt.com/api/list", {}).then((res) =>
    res.json(),
  )) as Post[];

  return posts.slice(0, 5);
};

app.get("/oauth/trmnl/new", async (c) => {
  const { code, installation_callback_url } = c.req.query();

  if (!code || !installation_callback_url) {
    return c.json({ error: "Missing code or installation_callback_url" }, 400);
  }

  const response = await fetch("https://usetrmnl.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      client_id: c.env.CLIENT_ID,
      client_secret: c.env.CLIENT_SECRET,
      grant_type: "authorization_code",
    }),
  });

  const data = await response.json();

  console.log("Installing trmnl integration", data);

  if (response.status !== 200) {
    return c.json({ error: "Failed to exchange code for token" }, 500);
  }

  return c.redirect(installation_callback_url);
});

app.get("/oauth/trmnl/install", (c) => {
  return c.json({ error: "not implemented" });
});

app.post("/integrations/trmnl/markup", async (c) => {
  const posts = await getPosts();
  return c.json({
    markup: renderToString(<Markup posts={posts} />),
  });
});

app.get("/preview", async (c) => {
  const posts = await getPosts();

  return c.json(posts);
});

app.post("/hooks/trmnl/uninstall", (c) => {
  const body = c.req.json();

  console.log("uninstalling trmnl integration", body);

  return c.json({ message: "ok" });
});

app.get("/", (c) => {
  return c.json({ message: "Hi TRMNL" });
});

export default app;
