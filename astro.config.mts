// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://archivistbot.com",
  integrations: [
    starlight({
      plugins: [starlightThemeNova(/* options */)],
      title: "Archivist",
      components: {
        Footer: "./src/components/Footer.astro",
        SocialIcons: "./src/components/Socials.astro",
      },
      social: [
        {
          icon: "discord",
          label: "support server",
          href: "https://discord.gg/FzhC9bVFva",
        },
        {
          icon: "email",
          label: "email",
          href: "mailto:botarchivist@gmail.com",
        },
        {
          icon: "pencil",
          label: "blog",
          href: "/blog",
        },
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/archivistbot.bsky.social",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Example Guide", slug: "guides/example" }],
        },
        {
          label: "Embeds",
          items: [{ autogenerate: { directory: "embeds" } }],
        },
        {
          label: "Commands",
          items: [
            { label: "AO3 Related", slug: "commands/ao3" },
						{ label: "Redirect", slug: "commands/redirect" },
            {
              label: "Settings System",
              items: [
                "commands/settings/settings",
                "commands/settings/general",
                "commands/settings/work",
								"commands/settings/chapter",
								"commands/settings/series",
								"commands/settings/user",
              ],
							collapsed: true,
            },
          ],
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
