import React, { useState } from "react";

export default function App() {
  const [rows, setRows] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  // Sort by Date → newest first
  const sortByDate = () => {
    const sorted = [...rows].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateB - dateA !== 0) return dateB - dateA; // newest first
      return b.views - a.views; // tie → by views (high → low)
    });
    setRows(sorted);
  };

  // Sort by Views → highest first
  const sortByViews = () => {
    const sorted = [...rows].sort((a, b) => {
      if (b.views - a.views !== 0) return b.views - a.views; // high → low
      return new Date(b.date) - new Date(a.date); // tie → latest date first
    });
    setRows(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Date and Views Table</h1>

      <button onClick={sortByDate} style={{ marginRight: "10px" }}>
        Sort by Date
      </button>

      <button onClick={sortByViews}>
        Sort by Views
      </button>

      <table border="1" cellPadding="10" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
