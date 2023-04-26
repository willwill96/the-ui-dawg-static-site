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

export const GITHUB_EDIT_URL = `https://github.com/willwill96/the-ui-dawg-static-site/edit/main`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "the-ui-dawg-static",
  appId: "ON2X9JCA4B",
  apiKey: "7d2cceabc700ea1600758f7d53ba9dc0",
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
        text: "Extending Keycloak Themes with Keycloakify",
        link: `${import.meta.env.BASE_URL}en/keycloakify`,
      },
      {
        text: "Reusing Components Across Frameworks",
        link: `${import.meta.env.BASE_URL}en/reusing-components`,
      },
      {
        text: "Containerizing Development with VS Code Dev Containers",
        link: `${import.meta.env.BASE_URL}en/devcontainers`,
      },
      {
        text: "Version Your Packages with Changesets",
        link: `${import.meta.env.BASE_URL}en/version-with-changesets`,
      },
      {
        text: "Install NPM Packages via git",
        link: `${import.meta.env.BASE_URL}en/install-via-git`,
      },
      {
        text: "Guide to Comparing NPM Packages",
        link: `${import.meta.env.BASE_URL}en/comparing-npm-packages`,
      },
    ],
    "Side Projects": [
      {
        text: "Petfinder GraphQL Server",
        link: `${import.meta.env.BASE_URL}en/projects/petfinder-graphql`,
      },
      {
        text: "Mono-repo Tools",
        link: `${import.meta.env.BASE_URL}en/projects/mono-repo-tools`,
      },
    ],
  },
};
