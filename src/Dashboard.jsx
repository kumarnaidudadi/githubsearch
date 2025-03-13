import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // (Optional) Load recent searches from localStorage
  const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  const recentSearches = history.slice(-3).reverse(); // last 3 searches, reversed

  return (
    <div className="container">
      {/* Hero Section */}
      <div style={{
        background: "#282c34",
        color: "#fff",
        padding: "40px",
        borderRadius: "8px",
        marginBottom: "2rem"
      }}>
        <h1 style={{ fontSize: "2.5rem" }}>Welcome to GitHub Search</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Discover and explore GitHub users quickly and easily.
        </p>
        <Link
          to="/search"
          style={{
            background: "#61dafb",
            padding: "10px 20px",
            color: "#000",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "bold"
          }}
        >
          Start Searching
        </Link>
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <h2>Recent Searches</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {recentSearches.map((item, index) => (
              <li key={index} style={{
                padding: "10px 0",
                borderBottom: "1px solid #eee"
              }}>
                {item.searchTerm || "Unknown"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
