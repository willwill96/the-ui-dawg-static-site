export const SITE = {
  title: "The UI Dawg",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/willwill96/the-ui-dawg-static-site/tree/main`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Overview: [
      {
        text: "Introduction",
        link: `${import.meta.env.BASE_URL}en/introduction`,
      },
    ],
    "Blog Posts": [
      {
        text: "Reusing Components Across Frameworks",
        link: `${import.meta.env.BASE_URL}en/reusing-components`,
      },
      {
        text: "Containerizing Development with VS Code Dev Containers",
        link: `${import.meta.env.BASE_URL}en/devcontainers`,
      },
    ],
  },
};
