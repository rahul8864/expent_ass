import "./WorkflowIcons.css";
import formIcon from "../../assets/images/Workflowcolumn.png";
import descriptionIcon from "../../assets/images/Workfowdescription.png";
import workflowIcon from "../../assets/images/Workflowworkflow.png";
import approvalIcon from "../../assets/images/Workflowapproval.png";
import moreIcon from "../../assets/images/Workflowoption.png";

export default function WorkflowIcons() {
  return (
    <div className="expent-workflowicons-wrapper">
      <div className="workflow-icon">
        <img src={formIcon} alt="" />
        <p>Forms</p>
      </div>
      <div className="workflow-icon">
        <img src={descriptionIcon} alt="" />
        <p>Questionnaire</p>
      </div>
      <div className="workflow-icon">
        <img src={workflowIcon} alt="" />
        <p>Workflow</p>
      </div>
      <div className="workflow-icon">
        <img src={descriptionIcon} alt="" />
        <p>Summary</p>
      </div>
      <div className="workflow-icon">
        <img src={approvalIcon} alt="" />
        <p>Approval</p>
      </div>
      <div className="workflow-icon">
        <img src={moreIcon} alt="" />
        <p>More</p>
      </div>
    </div>
  );
}
