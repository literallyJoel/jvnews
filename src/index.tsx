import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";
import Home from "./pages/home";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", ({ html }) => html(<Home />))
  .post("/clicked", () => <div>Yeet</div>)
  .listen(3000);

console.log("Listening on 3000");
