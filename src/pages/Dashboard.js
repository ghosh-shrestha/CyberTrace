import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">

            {/* Sidebar */}
            <aside className="sidebar">
                <h2>CyberTrace</h2>

                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/alerts">Alerts</Link>
                    <Link to="/incidents">Incidents</Link>
                    <Link to="/evidence">Evidence</Link>
                    <Link to="/investigation">Investigation</Link>
                    <Link to="/analytics">Analytics</Link>
                    <Link to="/reports">Reports</Link>
                    <Link to="/audit-logs">Audit Logs</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/login">Logout</Link>
                </nav>
            </aside>


            {/* Main Content */}
            <main className="main-content">

                {/* Header */}
                <div className="dashboard-header">
                    <div>
                        <h1>Dashboard</h1>
                        <p>
                            Security overview and incident monitoring
                        </p>
                    </div>
                </div>


                {/* Overview Cards */}
                <div className="overview-cards">

                    <div className="overview-card">
                        <p>Active Alerts</p>
                        <h2>12</h2>
                    </div>

                    <div className="overview-card">
                        <p>Open Incidents</p>
                        <h2>5</h2>
                    </div>

                    <div className="overview-card">
                        <p>Critical Incidents</p>
                        <h2>2</h2>
                    </div>

                </div>


                {/* Recent Incidents */}
                <div className="recent-incidents">

                    <h2>Recent Incidents</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Incident</th>
                                <th>Severity</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>Brute Force Attack</td>
                                <td>High</td>
                                <td>Open</td>
                                <td>Admin</td>
                            </tr>

                            <tr>
                                <td>Suspicious Login</td>
                                <td>Medium</td>
                                <td>Investigating</td>
                                <td>Investigator</td>
                            </tr>

                            <tr>
                                <td>Multiple Failed Logins</td>
                                <td>Critical</td>
                                <td>Open</td>
                                <td>Admin</td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </main>

        </div>
    );
}

export default Dashboard;