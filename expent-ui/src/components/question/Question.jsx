import "./Question.css";
export default function Question({ questionNumber, questionText, optionText }) {
  return (
    <div className="expent-question-wrapper">
      <p className="question-num">Question {questionNumber}</p>
      <div className="blankdiv"></div>
      <p className="question-text">{questionText}</p>
      <select className="expent-question-select">
        <option> {optionText} </option>
      </select>
    </div>
  );
}
