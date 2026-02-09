import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ngrok } from "vite-plugin-ngrok";
import process from "process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      ngrok({
        authtoken: env.NGROK_AUTH_TOKEN,
      }),
    ],
    server: {
      allowedHosts: [".ngrok-free.app"],
    },
  };
});
