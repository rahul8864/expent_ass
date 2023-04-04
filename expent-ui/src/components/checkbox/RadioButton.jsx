import "./RadioButton.css";
export default function RadioButton({
  questionNumber,
  questionText,
  optionText,
}) {
  return (
    <div className="expent-question-wrapper">
      <p className="question-num">Question {questionNumber}</p>
      <div className="blankdiv"></div>
      <p className="question-text">{questionText}</p>

      <div className="radio-btn-box">
        <div className="radio-btn-wrapper">
          <div className="expent-radio-select">
            <div className="radio-btn">
              <input type="radio" />
            </div>
            <p>YES</p>
          </div>
        </div>
        <div className="radio-btn-wrapper">
          <div className="expent-radio-select">
            <div className="radio-btn">
              <input type="radio" />
            </div>
            <p>No</p>
          </div>
        </div>
      </div>
    </div>
  );
}
