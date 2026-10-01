import "./Alerts.css";
function Alerts(){
    return(<div className="alerts-page">
        <div className="alerts-header">
            <div>
                <h1>Alerts</h1>
                <p>Security alerts detected by CyberTrace.</p>
            </div>
        </div>
        <div className="alerts-table-container">
            <table className="alerts-table">
                <thead>
                    <tr>
                        <th>Alerts</th>
                        <th>Source IP</th>
                        <th>Severity</th>
                        <th>Status</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brute Force Attack</td>
                        <td>192.168.1.20</td>
                        <td>High</td>
                        <td>Open</td>
                        <td>10:15 AM</td>
                    </tr>
                    <tr>
                        <td>Suspicious Login</td>
                        <td>192.168.1.20</td>
                        <td>Medium</td>
                        <td>Investigation</td>
                        <td>09:42 AM</td>
                    </tr>
                    <tr>
                        <td>Multiple Failed Logins</td>
                        <td>10.0.0.15</td>
                        <td>Critical</td>
                        <td>Open</td>
                        <td>09:19 AM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}
export default Alerts;