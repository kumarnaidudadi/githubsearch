import React, { useEffect, useState } from "react";
const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);
  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
  };
  return (
    <div className="container">
      <h2>Your Search History</h2>
      <button onClick={clearHistory} style={{ marginBottom: "1rem" }}>
        Clear History
      </button>

      {/* If there's no history, display a message */}
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Search Term</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Search Results</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                {/* Search Term */}
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {item.searchTerm}
                </td>

                {/* Search Results */}
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {item.found ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <img
                        src={item.avatarUrl}
                        alt={item.displayName}
                        width="50"
                        height="50"
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                      <span>{item.displayName}</span>
                    </div>
                  ) : (
                    <span>Search result not found</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default History;