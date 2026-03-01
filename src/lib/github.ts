const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
const GITHUB_USERNAME = 'NewWorldOrderly';

interface ContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalIssueContributions: number;
        totalPullRequestReviewContributions: number;
      };
    };
  };
}

export async function getContributions(): Promise<number> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return 0;
  }

  const now = new Date();
  const from = new Date(now.getFullYear(), 0, 1).toISOString();

  const query = `
    query($login: String!, $from: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from) {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalPullRequestReviewContributions
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME, from } }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return 0;
    }

    const json = (await response.json()) as ContributionsResponse;
    const c = json.data?.user?.contributionsCollection;
    if (!c) return 0;

    return (
      c.totalCommitContributions +
      c.totalPullRequestContributions +
      c.totalIssueContributions +
      c.totalPullRequestReviewContributions
    );
  } catch {
    return 0;
  }
}
