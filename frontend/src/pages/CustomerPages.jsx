import React from "react";

// ✅ Correct relative path
import Customer from "../components/Customer";

export default function CustomerPages() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Customer Management</h2>
      <Customer />
    </div>
  );
}
