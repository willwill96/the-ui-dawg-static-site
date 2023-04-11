export type Commit = {
  author: {
    id: string;
    login: string;
  };
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
};

async function getCommits(url: string) {
  try {
    const token = import.meta.env.GITHUB_TOKEN ?? "hello";
    if (!token) {
      throw new Error(
        'Cannot find "GITHUB_TOKEN" used for escaping rate-limiting.'
      );
    }

    const auth = `Basic ${Buffer.from(token, "binary").toString("base64")}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: auth,
        "User-Agent": "astro-docs/1.0",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        `Request to fetch commits failed. Reason: ${res.statusText}
         Message: ${data.message}`
      );
    }

    return data as Commit[];
  } catch (e) {
    console.warn(`[error]  /src/components/AvatarList.astro 
      ${(e as any)?.message ?? e}`);
    return [] as Commit[];
  }
}

export default getCommits;
