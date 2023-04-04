import { Link } from "react-router-dom";
import RadioButton from "../checkbox/RadioButton";
import Question from "../question/Question";
import "./IntakeSection.css";
export default function IntakeSection() {
  return (
    <div className="expent-intakesection">
      <div className="expent-intake-infobtns">
        <button className="expent-info-btn active">General Information</button>
        <button className="expent-info-btn">Security & Privacy</button>
        <button className="expent-info-btn">Upload Documents</button>
      </div>

      <div className="expent-info-components">
        <div className="expent-general-information">
          <p className="expent-info-heading">General Information</p>
          <div className="expent-question-components">
            <Question
              questionNumber={"1"}
              questionText={"Please select your sourcing option"}
              optionText={"Choose Sourcing"}
            />
            <Question
              questionNumber={"2"}
              questionText={"Number range of users who will use the product:"}
              optionText={"Choose Sourcing"}
            />
            <Question
              questionNumber={"3"}
              questionText={"Provided an expected spend:"}
              optionText={"Choose expense range"}
            />
          </div>
        </div>

        <div className="expent-general-information">
          <p className="expent-info-heading">Product Feedback</p>
          <div className="expent-question-components">
            <RadioButton
              questionNumber={"4"}
              questionText={"Will you be sharing PII with the vendor?"}
            />
            <Question
              questionNumber={"5"}
              questionText={"What typeof PII will the vendor have access to?:"}
              optionText={"Choose one or more PII type"}
            />
            <RadioButton
              questionNumber={"6"}
              questionText={"Will the vendor have access to AWS Account?:"}
            />
          </div>
        </div>

        <div className="expent-general-information">
          <p className="expent-info-heading">Product Feedback</p>
          <div className="expent-question-components">
            <Question
              questionNumber={"7"}
              questionText={"What typeof PII will the vendor have access to?:"}
            />
          </div>
        </div>
        <div className="expent-primary-secondary-btns">
          <button className="expent-secondary-btn">
            Save and Continue Later
          </button>
          <Link to="/workflowpage">
            <button className="expent-primary-btn">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
