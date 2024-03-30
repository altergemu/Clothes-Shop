import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default ({ mode }: ConfigEnv) => {
  // Here we add env vars from .env files to process.env.
  // Note the last arg is a blank string so that all env vars
  // are loaded, not just those starting with "VITE_"
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    server: {
      host: "0.0.0.0",
      port: Number(process.env.PORT),
    },
    plugins: [
      remix({
        appDirectory: "src/app",
        routes: async (defineRoutes) => {
          return defineRoutes((route) => {
            // Here you can define routes

            // Home page
            route("/", "../pages/home/index.tsx");
          });
        },
      }),
      tsconfigPaths(),
    ],
  });
};
