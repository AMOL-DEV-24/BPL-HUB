export default function DashboardHome() {
  return (
    <div className="dashboard-home">
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>🏏 Dashboard</h1>
        <p>Welcome Admin 👋 Manage your BPL HUB system from here</p>
      </div>

      {/* STATS GRID */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Players</h3>
          <p>Manage all registered players</p>
        </div>

        <div className="dashboard-card">
          <h3>Teams</h3>
          <p>Create & organize teams</p>
        </div>

        <div className="dashboard-card">
          <h3>Matches</h3>
          <p>Schedule & control matches</p>
        </div>

        <div className="dashboard-card">
          <h3>Live Score</h3>
          <p>Update real-time scores</p>
        </div>
      </div>
    </div>
  );
}