import "./WorkflowHeader.css";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function WorkflowHeader() {
  return (
    <div className="expent-workflow-header">
      <div className="header-backarrow-and-heading">
        <div>
          <Link to="/">
            <button className="back-btn">
              <FiArrowLeft />
            </button>
          </Link>
        </div>
        <div>
          <p className="expent-workflow-header-title">Procurement Workflow</p>
          <p className="expent-workflow-header-subtitle">
            Step 2: Workflow Creation
          </p>
        </div>
      </div>
      <div className="expent-workflow-header-btns">
        <button className="header-btn">Cancel</button>
        <button className="header-btn">Save Draft</button>
        <button className="header-btn active">Finish</button>
      </div>
    </div>
  );
}
