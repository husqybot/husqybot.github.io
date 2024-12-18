import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Husqy",
  tagline: "The most advanced bot you can add.",
  favicon: "assets/favicon.ico",
  // Set the production url of your site here
  url: "https://husqy.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "husqybot", // Usually your GitHub org/user name.
  projectName: "husqybot.github.io", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    tailwindPlugin,
    [
      "content-docs",
      {
        id: "faq",
        path: "faq",
        routeBasePath: "faq",
        editCurrentVersion: false,
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "known-issues",
        path: "known-issues",
        routeBasePath: "known-issues",
        editCurrentVersion: false,
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "documents",
        path: "1-documents",
        routeBasePath: "documents",
        editCurrentVersion: false,
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      } satisfies DocsOptions,
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: [
            "./src/css/globals.css",
            "./src/css/navbar.css",
            "./src/css/footer.css",
            "./src/css/animations.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "assets/logos/logo_default.png",
    navbar: {
      title: "Husqy",
      hideOnScroll: false,
      logo: {
        alt: "Husqy Logo",
        src: "assets/logos/logo_default.png",
      },
      style: "primary",
      items: [
        { to: "/get-started", label: "Get started", position: "right" },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Documentation",
        },
        { to: "/faq", label: "FAQ", position: "right" },
        { to: "/known-issues", label: "Known issues", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Husqy logo",
        src: "assets/logos/logo_default.png",
        href: "https://husqy.xyz/",
        height: 64,
        width: 64,
      },
      links: [
        {
          label: "Get started",
          to: "/get-started",
        },
        {
          label: "Documentation",
          to: "/docs",
        },
        {
          label: "FAQ",
          to: "/faq",
        },
        {
          label: "Known issues",
          to: "/known-issues",
        },
        {
          label: "Changelog",
          to: "/documents/changelog",
        },
        {
          label: "Privacy policy",
          to: "/documents/privacy-policy",
        },
        {
          label: "Terms of service",
          to: "/documents/terms-of-service",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Husqy<br/>Husqy is not part or related to Discord Inc. in any form or way.

`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
