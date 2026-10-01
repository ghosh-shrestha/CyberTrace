import { useState } from "react";
import "./Incident.css"
function Incidents(){
    const [showForm,setShowForm] = useState(false);
    const[title,settitle] = useState("");
    const [severity,setSeverity] = useState("Medium");
    const [description,setDescription] = useState("");
    function handleCreateIncident(event){
        event.preventDefault();
        console.log("Title:",title);
        console.log("Severity:",severity);
        console.log("Description:",description);
        settitle("");
        setSeverity("Medium");
        setDescription("");
        setShowForm(false);
    }
    return(<div className="incident-page">
        <div className="incident-header">
            <div>
                <h1>Incident</h1>
                <p>Manage and investigate security incidents.</p>
            </div>
            <button className="create-incident-button" onClick={()=>setShowForm(true)}>create Incident</button>
        </div>
        {showForm && (
            <div className="incident-form-container">
                <h2>Create Incident</h2>
                <form onSubmit={handleCreateIncident}>
                    <label>Incident Title</label>
                    <input
                    type="text" placeholder="Enter incident title" value={title} onChange={(e)=>settitle(e.target.value)}/>
                    <label>severity</label>
                    <select value={severity} onChange={(e)=>setSeverity(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                    <label>Description</label>
                    <textarea placeholder="Describe the incident" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    <div className="incident-form-button">
                        <button
                        type="submit"className="submit-incident-button">Create</button>
                        <button type="button" className="cancel-incident-button" onClick={()=>setShowForm(false)}>Cancel</button>
                    </div>
                </form>


            </div>
        )}
        <div className="incident-table-container">
            <table className="incidents-table">
                <thead>
                    <tr>
                        <th>Incident</th>
                        <th>Severity</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brute Force Attack</td>
                        <td>High</td>
                        <td>Open</td>
                        <td>Admin</td>
                        <td>Today</td>
                    </tr>
                    <tr>
                        <td>Suspicious Login</td>
                        <td>Medium</td>
                        <td>Investigating</td>
                        <td>Investigator</td>
                        <td>Today</td>
                    </tr>
                    <tr>
                        <td>Multiple Failed Logins</td>
                        <td>Critical</td>
                        <td>Open</td>
                        <td>Admin</td>
                        <td>Yesterday</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}
export default Incidents;