import { Route, Routes } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import "./App.css";
import ProcurementWorkflow from "./pages/procurement-workflow/ProcurementWorkflow";
import Intakeform from "./pages/project-information/IntakeForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intakeform />} />

        <Route
          path="/workflowpage"
          element={
            <ReactFlowProvider>
              <ProcurementWorkflow />
            </ReactFlowProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
