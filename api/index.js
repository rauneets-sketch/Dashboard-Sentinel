// Vercel serverless function entry point
const { handle } = require("@hono/node-server/vercel");

// Import the built app - Vercel will handle the module resolution
const app = require("../dist/index.js").default;

module.exports = handle(app);
