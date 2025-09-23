import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Map from "./components/Map";

export default function App() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/complaints")
      .then(res => setComplaints(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <Table complaints={complaints} />
      <Map complaints={complaints} />
    </div>
  );
}
