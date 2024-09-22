import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";


const site = import.meta.env.APP_SITE_URL || `https://willwill96.github.io`
const base = import.meta.env.APP_BASE_URL || `/the-ui-dawg-static-site`

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx(),
  ],
  site,
  base,
});
