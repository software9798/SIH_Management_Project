import React from "react";

export default function Table({ complaints }) {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map(c => (
          <tr key={c._id}>
            <td>{c.citizenName}</td>
            <td>{c.status}</td>
            <td>{c.location?.lat},{c.location?.lng}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
