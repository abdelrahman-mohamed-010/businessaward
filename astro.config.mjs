import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import bookshop from "@bookshop/astro-bookshop";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), bookshop()],
});
