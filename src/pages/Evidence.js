import { useRef, useState } from "react";
import "./Evidence.css";

function Evidence() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedIncident, setSelectedIncident] = useState("");
    const [description, setDescription] = useState("");
    const [evidence, setEvidence] = useState([]);

    const fileInputRef = useRef(null);

    function handleFileChange(event) {
        setSelectedFile(event.target.files[0] || null);
    }

    function handleUpload(event) {
        event.preventDefault();

        if (!selectedFile) {
            alert("Please select a file.");
            return;
        }

        if (!selectedIncident) {
            alert("Please select an incident.");
            return;
        }

        const newEvidence = {
            id: Date.now(),
            fileName: selectedFile.name,
            incident: selectedIncident,
            description: description.trim(),
            hash: "Pending",
            uploadedBy: "Admin",
            status: "Pending",
        };

        setEvidence((previousEvidence) => [
            ...previousEvidence,
            newEvidence,
        ]);

        setSelectedFile(null);
        setSelectedIncident("");
        setDescription("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    function handleRemove(id) {
        setEvidence((previousEvidence) =>
            previousEvidence.filter((item) => item.id !== id)
        );
    }

    return (
        <div className="evidence-page">
            <div className="evidence-header">
                <div>
                    <h1>Evidence</h1>
                    <p>Manage and verify investigation evidence.</p>
                </div>

                <div className="upload-evidence-container">
                    <h2>Upload Evidence</h2>

                    <form onSubmit={handleUpload}>
                        <label htmlFor="evidence-file">
                            Select evidence file
                        </label>

                        <input
                            id="evidence-file"
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />

                        {selectedFile && (
                            <p className="selected-file">
                                Selected: {selectedFile.name}
                            </p>
                        )}

                        <label htmlFor="evidence-incident">
                            Related incident
                        </label>

                        <select
                            id="evidence-incident"
                            value={selectedIncident}
                            onChange={(event) =>
                                setSelectedIncident(event.target.value)
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

                        <label htmlFor="evidence-description">
                            Description
                        </label>

                        <textarea
                            id="evidence-description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            placeholder="Describe this evidence..."
                            rows={3}
                        />

                        <button
                            type="submit"
                            className="upload-evidence-button"
                        >
                            Upload Evidence
                        </button>
                    </form>
                </div>

                <div className="evidence-table-container">
                    <h2>Evidence Records</h2>

                    <table className="evidence-table">
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Incident</th>
                                <th>Description</th>
                                <th>SHA-256</th>
                                <th>Uploaded By</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {evidence.length === 0 ? (
                                <tr>
                                    <td colSpan="7">
                                        No evidence uploaded yet.
                                    </td>
                                </tr>
                            ) : (
                                evidence.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.fileName}</td>
                                        <td>{item.incident}</td>
                                        <td>
                                            {item.description || "—"}
                                        </td>
                                        <td>{item.hash}</td>
                                        <td>{item.uploadedBy}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Evidence;