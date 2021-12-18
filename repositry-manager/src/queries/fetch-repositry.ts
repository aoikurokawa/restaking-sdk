import { post } from "superagent";

const FETCH_REPO_QUERY = `
    query {
        viewer {
            repositries(first:100) {
                nodes {
                    id
                    url
                    nameWithOwner
                    description
                }
            }
        }
    }
`;

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchRepositries = () => {
  post("https://api.github.com/graphql")
    .set({
      Authorization: `Beater ${TOKEN}`,
    })
    .send({
      query: FETCH_REPO_QUERY,
    });
};
