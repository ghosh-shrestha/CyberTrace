
import { useState } from "react";
import "./Investigation.css";

function Investigation() {
    const [investigations, setInvestigations] = useState([]);
    const [incident, setIncident] = useState("");
    const [investigator, setInvestigator] = useState("");
    const [findings, setFindings] = useState("");
    const [status, setStatus] = useState("Open");

    function handleSubmit(event) {
        event.preventDefault();

        if (!incident || !investigator.trim() || !findings.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        const newInvestigation = {
            id: Date.now(),
            incident: incident,
            investigator: investigator.trim(),
            findings: findings.trim(),
            status: status,
            createdAt: new Date().toLocaleString(),
        };

        setInvestigations((previous) => [
            ...previous,
            newInvestigation,
        ]);

        setIncident("");
        setInvestigator("");
        setFindings("");
        setStatus("Open");
    }

    function handleRemove(id) {
        setInvestigations((previous) =>
            previous.filter((item) => item.id !== id)
        );
    }

    return (
        <div className="investigation-page">
            <div className="investigation-header">
                <h1>Investigations</h1>
                <p>
                    Track, investigate, and document security incidents.
                </p>
            </div>

            <div className="investigation-form-container">
                <h2>Start Investigation</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="incident">
                        Related Incident
                    </label>

                    <select
                        id="incident"
                        value={incident}
                        onChange={(event) =>
                            setIncident(event.target.value)
                        }
                    >
                        <option value="">Select an incident</option>
                        <option value="Brute Force Attack">
                            Brute Force Attack
                        </option>
                        <option value="Suspicious Login">
                            Suspicious Login
                        </option>
                        <option value="Multiple Failed Logins">
                            Multiple Failed Logins
                        </option>
                    </select>

                    <label htmlFor="investigator">
                        Assigned Investigator
                    </label>

                    <input
                        id="investigator"
                        type="text"
                        value={investigator}
                        onChange={(event) =>
                            setInvestigator(event.target.value)
                        }
                        placeholder="Enter investigator name"
                    />

                    <label htmlFor="status">
                        Investigation Status
                    </label>

                    <select
                        id="status"
                        value={status}
                        onChange={(event) =>
                            setStatus(event.target.value)
                        }
                    >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                    </select>

                    <label htmlFor="findings">
                        Initial Findings
                    </label>

                    <textarea
                        id="findings"
                        value={findings}
                        onChange={(event) =>
                            setFindings(event.target.value)
                        }
                        placeholder="Record your investigation findings..."
                        rows={4}
                    />

                    <button type="submit">
                        Start Investigation
                    </button>
                </form>
            </div>

            <div className="investigation-list">
                <h2>Investigation Records</h2>

                {investigations.length === 0 ? (
                    <p>No investigations created yet.</p>
                ) : (
                    investigations.map((item) => (
                        <div
                            className="investigation-card"
                            key={item.id}
                        >
                            <h3>{item.incident}</h3>

                            <p>
                                <strong>Investigator:</strong>{" "}
                                {item.investigator}
                            </p>

                            <p>
                                <strong>Status:</strong>{" "}
                                {item.status}
                            </p>

                            <p>
                                <strong>Findings:</strong>{" "}
                                {item.findings}
                            </p>

                            <p>
                                <strong>Created:</strong>{" "}
                                {item.createdAt}
                            </p>

                            <button
                                type="button"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Investigation;

