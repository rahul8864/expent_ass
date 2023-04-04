import "./Main.css";
import { FaCalendarAlt, FaAngleRight } from "react-icons/fa";
import ProgressBar from "../progressbar/ProgressBar";
import IntakeSection from "../intake-section/IntakeSection";
export default function Main() {
  return (
    <div className="expent-main-section">
      <div className="expent-main-upperheading">
        <p>Projects</p>
        <FaAngleRight />
        ...
        <FaAngleRight />
        <p>Project Information</p>
      </div>
      <p className="expent-main-middleheading">Request for Software</p>

      <div className="expent-main-calender-and-avt">
        <FaCalendarAlt /> <p>12 October - 26 October,2022</p>.
        <div className="expent-main-avt">
          <div class="avatar avt-orange">DG</div>
          <div class="avatar avt-blue">SJ</div>
          <div class="avatar avt-green">AG</div>
        </div>
      </div>
      <div className="expent-progressbar">
        <ProgressBar
          title={"Pre-Evaluation Feedback"}
          date={"12 October, 2022"}
          width={"100%"}
        />
        <ProgressBar
          title={"Intake form"}
          date={"16 October, 2022"}
          width={"50%"}
        />
      </div>

      <hr style={{ margin: "1rem 0" }} />
      <IntakeSection />
    </div>
  );
}
