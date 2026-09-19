import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "apk-webview-compatibility",
      apply: "build",
      transformIndexHtml(html) {
        return html
          .replace(/<script\s+type="module"\s+crossorigin\s+src="([^"]+)"\s*><\/script>/g, '<script defer src="$1"></script>')
          .replace(/<script\s+type="module"\s+src="([^"]+)"\s*><\/script>/g, '<script defer src="$1"></script>')
          .replace(/<link\s+rel="stylesheet"\s+crossorigin\s+href="([^"]+)"\s*>/g, '<link rel="stylesheet" href="$1">');
      }
    }
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
