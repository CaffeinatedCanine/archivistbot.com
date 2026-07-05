// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova(/* options */)],
      title: "Archivist",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Embeds",
          items: [{ autogenerate: { directory: "embeds" } }],
        },
				{
          label: "Commands",
          items: [{ autogenerate: { directory: "commands" } }],
        },
				{
          label: "Behind the Stacks",
          items: [{ autogenerate: { directory: "technical" } }],
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
