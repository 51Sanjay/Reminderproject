import React from "react";

// ✅ Correct relative path
import Remainder from "../components/Remainder";

export default function CustomerPages() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Reminder Management</h2>
      <Remainder />
    </div>
  );
}