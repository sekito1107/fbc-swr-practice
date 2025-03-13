import useSWR from "swr";
import "./App.css";

const fetcher = ([url, options]) =>
  fetch(url, options).then((res) => res.json());

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const options = { headers: { Accept: "application/json" } };

  const { data, error, isLoading } = useSWR([url, options], fetcher);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && <p>Status: {data.description}</p>}
      {error && <p>Failed to load.</p>}
    </>
  );
}

export default App;
