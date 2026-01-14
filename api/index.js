// Vercel serverless function entry point
import { handle } from "@hono/node-server/vercel";
import app from "../dist/index.js";

export default handle(app);
