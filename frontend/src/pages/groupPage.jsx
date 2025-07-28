import React from "react";

// ✅ Correct relative path
import GroupManager from "../group/GroupManager";


export default function CustomerPages() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Group Management</h2>
      <GroupManager />
    
    </div>
  );
}
