import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await fetch(`https://api.github.com/users/${query}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        // Save a "not found" record in localStorage
        saveToHistory({
          searchTerm: query,
          found: false,
          avatarUrl: null,
          displayName: null
        });

        setError("User not found");
        setUser(null);
      } else {
        // Save a "found" record in localStorage
        saveToHistory({
          searchTerm: query,
          found: true,
          avatarUrl: data.avatar_url,
          displayName: data.name || data.login
        });

        setUser(data);
        setError("");
      }
    } catch (err) {
      setError("Error fetching data");
    }
  };

  // Save the search object in localStorage
  const saveToHistory = (searchRecord) => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.push(searchRecord);
    localStorage.setItem("searchHistory", JSON.stringify(history));
  };

  return (
    <div className="container">
      <h2>Search GitHub Users</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div className="card">
          <h3>{user.name || user.login}</h3>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
