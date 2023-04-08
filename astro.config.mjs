import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

const { PUBLIC_SITE_DOMAIN, PUBLIC_BASE_URL } = process.env;

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
  ],
  site: `https://willwill96.github.io`,
  base: `/the-ui-dawg-static-site`
});
