import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    ssr: {
      external: ["hono"],
    },
    plugins: [
      build({
        entry: "src/index.tsx",
        outputDir: "dist",
        minify: true,
      }),
      devServer({
        entry: "src/index.tsx",
      }),
    ],
    define: {
      // Make environment variables available to the application
      "process.env.SUPABASE_URL": JSON.stringify(env.SUPABASE_URL),
      "process.env.SUPABASE_KEY": JSON.stringify(env.SUPABASE_KEY),
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV || mode),
      "process.env.PORT": JSON.stringify(env.PORT),
    },
  };
});
