import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Incidents from "./pages/Incident";
import Evidence from "./pages/Evidence";
import Investigation from "./pages/Investigation";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/alerts" element={<Alerts/>}/>
                <Route path="/incidents" element={<Incidents/>}/>
                <Route path="/evidence" element={<Evidence/>}/>
                <Route path="/investigation" element={<Investigation />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
