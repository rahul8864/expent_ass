import "./ProgressBar.css";
export default function ProgressBar({ title, date, width }) {
  return (
    <div className="expent-main-progress-wrapper">
      <p className="progress-heading">{title}</p>
      <p className="progress-date">{date}</p>
      <div className="expent-main-progressbar">
        <div className="progress-bar" style={{ width: width }}></div>
      </div>
    </div>
  );
}
