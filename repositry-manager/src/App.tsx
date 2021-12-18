import React, { useState, useEffect } from "react";
import { fetchRepositries } from "./queries/fetch-repositry";

function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchRepositries()
      .then((x: any) => setRepos(x.data.viewer.repositories.nodes))
      .catch((error: any) => setError(error));
  }, []);

  const repoList = repos.map((repo: any) => (
    <div key={repo.id}>
      <a href={repo.url}>{repo.nameWithOwner}</a>
      <span>{repo.description}</span>
    </div>
  ));

  return (
    <div className="App">
      <h1>Your repositries</h1>
      {error ? <p>{error.toString()}</p> : repoList}
    </div>
  );
}

export default App;
